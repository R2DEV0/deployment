import React,{ useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import moment from 'moment';

export default (props) => {
    const[project, setProject] = useState('');
    const[loaded, setLoaded] = useState(false);
    const[projectCompleted, setProjectCompleted] = useState({});
    const[projectStarted, setProjectStarted] = useState({});
    const[projectBacklog, setProjectBacklog] = useState({});
    


    useEffect(() => {
        let notStarted =[];
        let notCompleted =[];
        let completed =[];
        axios.get('http://localhost:8000/api/projects')
        .then(res => {
            setProject(res.data);
            res.data.map((item, i) => {
                if(item.isStarted === false){
                    notStarted.push(item)
                }
                else if(item.isStarted == true && item.isComplete === false){
                    notCompleted.push(item)
                }
                else if(item.isComplete == true && item.isStarted === true){
                    completed.push(item)
                }
            })
            setProjectBacklog(notStarted);
            setProjectStarted(notCompleted);
            setProjectCompleted(completed);
            update();
            setLoaded(true)
        })
    }, []);

    const update = () => {
        let notStarted =[];
        let notCompleted =[];
        let completed =[];
        axios.get('http://localhost:8000/api/projects')
        .then(res => {
            setProject(res.data);
            res.data.map((item, i) => {
                if(item.isStarted === false){
                    notStarted.push(item)
                }
                else if(item.isStarted == true && item.isComplete === false || item.isComplete === null){
                    notCompleted.push(item)
                }
                else if(item.isComplete == true){
                    completed.push(item)
                }
            })
            setProjectBacklog(notStarted);
            setProjectStarted(notCompleted);
            setProjectCompleted(completed);
            setLoaded(true)
        })
    };

    const toggleStarted = (i) => {
        const projectCopy = [...project];
        const selectedProject = projectCopy[i];
        selectedProject.isStarted = !selectedProject.isStarted;
        setProject(projectCopy);
        update();
    }

    const toggleComplete = (i) => {
        const projectCopy = [...project];
        const selectedProject = projectCopy[i];
        selectedProject.isComplete = !selectedProject.isComplete;
        setProject(projectCopy);
        update(); 
    }


    const startProj = (id, status, i, name, due_date, isComplete) => {
        axios.put(`http://localhost:8000/api/update/${id}`, {'isStarted': !status, 'name': name, 'due_date': due_date, 'isComplete': isComplete })
            .then(res => {
                console.log(res)
                toggleStarted(i)
            })
            .catch(err => {
                console.log(err);
            })
        }

    const completeProj = (id, status, i, name, due_date, isStarted) => {
        axios.put(`http://localhost:8000/api/update/${id}`, {'isComplete': !status, 'name': name, 'due_date': due_date, 'isComplete': isStarted })
            .then(res => {
                console.log(res)
                toggleComplete(i)
            })
            .catch(err => {
                console.log(err);
            })
        }


    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/projects/${id}`)
            .then(res => {
                console.log(res);
                setProject(project.filter(project => project._id !== id));
                update()
            })
            .catch(err => {
                console.log(err);
            })
        }


    const addNew = (e) => {
        navigate('/create')
    }



    return(
        <div className='container'>
            <div style={{display: 'inline-block', verticalAlign:'top', width:'350px'}}>
                <h4 style={{textAlign:'center', fontWeight: 'bold'}} >Backlog</h4>
                {loaded && <div style={{display: 'inline-block'}}>
                    {projectBacklog.map((item, i) => { return <ul key={i} style={{border: '1px solid black', padding:'10px', listStyle:'none'}}>
                        <li>Project: {item.name}</li>
                        <li>Due by: {item.due_date}</li>
                        <li><button className='btn btn-outline-secondary btn-sm' onClick={(e) => {startProj(item._id, item.isStarted, i, item.name, item.due_date, item.isComplete)}}>Start Project</button></li>
                    </ul>})}
                </div>}
            </div>

        <div style={{display: 'inline-block', verticalAlign:'top', width:'350px'}}>
            <h4 style={{textAlign:'center',fontWeight: 'bold'}}>Started</h4>
            {loaded && <div style={{display: 'inline-block', marginRight:'20px', marginLeft: '20px'}}>
                    {projectStarted.map((item, i) => { return <ul key={i} style={{border: '1px solid black', padding:'10px', listStyle:'none'}}>
                        <li>Project: {item.name}</li>
                        <li>Due by: {item.due_date}</li>
                        <li><button className='btn btn-outline-primary btn-sm' onClick={(e) => {completeProj(item._id, item.isComplete, i, item.name, item.due_date, item.isStarted)}} >Completed</button></li>
                    </ul>
                })}
            </div>}
        </div>

        <div style={{display: 'inline-block', verticalAlign:'top', width:'350px'}}>
            <h4 style={{textAlign:'center', fontWeight: 'bold'}}>Completed</h4>
            {loaded && <div style={{display: 'inline-block'}}>
                {projectCompleted.map((item, i) => { return <ul key={i} style={{border: '1px solid black', padding:'10px', listStyle:'none'}}>
                    <li>Project: {item.name}</li>
                    <li>Due by: {item.due_date}</li>
                    <li><button className='btn btn-outline-danger btn-sm' onClick={(e) => {deleteHandler(item._id)}} >Delete Project</button></li>
                </ul>})}
            </div>}
            </div>

            <div>
                <button className='btn btn-primary btn-md'onClick={addNew} style={{marginTop: '50px'}}>Add New Project</button>
            </div>
        </div>

    )
}