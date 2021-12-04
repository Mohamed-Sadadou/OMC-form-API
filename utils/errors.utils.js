
module.exports.ErreurCreate = (err)=>{
    let errors = {Nom:'', Prenom:'', Email:'', Matricule:'', Team:'',Motivation:'',MotivationTeam:'',Specialite:''}

    if (err.message.includes('Nom')) errors.Nom = 'Probleme avec le nom manquant ce champ est necessaire';
    if (err.message.includes('Prenom')) errors.Nom = 'Probleme avec le Prenom manquant ce champ est necessaire';
    if (err.message.includes('Email')) errors.Nom = "Probleme avec l'Email non conforme";
    if (err.message.includes('Matricule')) errors.Nom = 'Probleme avec le Matricule manquant ce champ est necessaire';
    if (err.message.includes('Team')) errors.Nom = 'Probleme avec la Team';
    if (err.message.includes('Motivation')) errors.Nom = 'Probleme avec la Motivation manquante ce champ est necessaire';
    if (err.message.includes('MotivationTeam')) errors.Nom = 'Probleme avec la MotivationTeam ';
    if (err.message.includes('Specialite')) errors.Nom = 'Probleme avec la Specialitée ';
    return errors;
}