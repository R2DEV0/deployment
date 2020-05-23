const { Project } = require('../models/project.model');

module.exports.createProject = (req, res) => {
    const{name, due_date, isStarted, isComplete} = req.body;
    Project.create({
        name,
        due_date,
        isStarted,
        isComplete
    })
    .then(project => res.json( project ))
    .catch(err => res.status(400).json(err))
};

module.exports.allProjects = (req, res) => {
    Project.find({})
    .then(project => res.json( project ))
    .catch(err => res.status(400).json(err))
};

module.exports.getOne = (req, res) => {
    Project.findOne({ _id: req.params.id })
    .then(project => res.json({ project }))
    .catch(err => res.status(400).json(err))
};



module.exports.update = (req, res) => {
    const { id } = req.params;
    const {name, due_date, isStarted, isComplete} = req.body;
    Project.findOneAndUpdate({ _id: id }, {
        name,
        due_date,
        isStarted,
        isComplete
    },
    {
        new: true,
        useFindandModify: true,
    })
    .then(updatedProject => res.json(updatedProject))
    .catch(err => res.status(400).json(err));
};



module.exports.remove = (req, res) => {
    Project.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.status(400).json(err))
};