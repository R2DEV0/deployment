import React,{ useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';


export default (props) => {

    const [name, setName] = useState('');
    const [due_date, setDue_date] = useState('')
    const [errors, setErrors] = useState([]);
    const [nameError, setNameError] = useState('');
    const [dateError, setDateError] = useState('');
    const [project, setProject] = useState('')

    const onSubmit = (e, data) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/projects', data)
        .then(res => {
            navigate('/');
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr=[];

            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }

    const nameHandler = (e) => {
        setName(e.target.value);
        if(e.target.value.length < 3){
            setNameError('Project name must have at least 3 characters.')
        }
        else if(e.target.value.length > 2){
            setNameError("")
        }
    }


    return(
        <div className='container'>
            <Link to ='/'>Back to Dashboard</Link>
            <div className='form' style={{marginTop: '20px'}}>
                <form onSubmit={e => onSubmit(e, {name, due_date})}>
                    <div>
                        <label htmlFor='name'>Project: </label>
                        <input type ='text' name='name' onChange={nameHandler} />
                    </div>
                    {
                    nameError ?
                    <p style={{color:'red'}}>{ nameError }</p> :
                    ''
                    }
                    <div> 
                        <lable htmlFor='due_date'>Due Date: </lable>
                        <input type='date' name='due_date' onChange={(e) => setDue_date(e.target.value)} />
                    </div>
                    <button className='btn btn-primary btn-md' style={{marginTop: '20px'}}>Submit</button>
                </form>
            </div>
            {errors.map((error, idx)=> {
                return(
                    <p style={{ color:'red' }}key={idx}>{error}</p>
                )
            })}
        </div>
    )

}