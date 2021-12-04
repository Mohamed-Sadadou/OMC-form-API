const router = require('express').Router();
const FormController =  require('../Controller/FormController');


router.post("/Create",FormController.CreerForm);


module.exports = router;