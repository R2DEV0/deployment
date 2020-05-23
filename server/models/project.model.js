const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'There must be a project description'],
            minlength: [3, 'Project must have at least 3 characters']
        },
        due_date: {
            type: Date,
            required: [ true, 'There must be a due by date']
        },
        isStarted:{
            type: Boolean,
            default: false
        },
        isComplete:{
            type: Boolean,
            default: false
        }
    },
    {timestamps: true}
);

module.exports.Project = mongoose.model('Project', ProjectSchema);