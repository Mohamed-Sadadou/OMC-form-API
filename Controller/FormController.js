const FormModel = require('../Models/FormModel');
const Errors= require('../utils/errors.utils');


module.exports.CreerForm = async (req, res) => {

    console.log('on affiche le req  ', req.body);
    const {Nom,Prenom,Email,Matricule,Team,Motivation,MotivationTeam,Specialite}=req.body;
    const Form = new FormModel({
        Nom, Prenom, Email, Matricule, Team,Motivation,MotivationTeam,Specialite,
    });
    Form.save()
        .then(() => res.status(201).json({ message: 'Formulaire Ajouté !' }))
        .catch(error => res.status(400).json({ message:Errors.ErreurCreate(error) }));
};

