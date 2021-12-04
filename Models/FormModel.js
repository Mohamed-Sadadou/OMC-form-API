const mongoose = require('mongoose');
const { isEmail } = require('validator');


const MembreSchema = new mongoose.Schema(
    {
        Nom:{
            type:String,
            required: true,  
        },
        Prenom:{
            type:String,
            required: true,
        },
        Email:{
            type: String,
            required:true,
            validate: [isEmail],
            lowercase: true,
            trim:true
        },
        Matricule:{
            type:String,
            required: true, 
        },
        Team:{
            type:String,    
        },
        Motivation:{
            type:String,
            required: true, 
        },
        MotivationTeam:{
            type:String, 
        },
        Specialite:{
            type:String, 
        },

    }
);



module.exports = mongoose.model('Membre',MembreSchema);