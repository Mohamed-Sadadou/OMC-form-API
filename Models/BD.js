const mongoose = require('mongoose');

mongoose
    .connect('link here baliz', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('Connection a mongo effectuer avec succes'))
    .catch((err) => console.log('erreur de connection : ', err));