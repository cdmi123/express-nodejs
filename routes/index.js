var express = require('express');
var router = express.Router();
const user = require('../controller/UserController')

router.post('/Insert',user.Insert);
router.get('/',user.SelectData);
router.get('/single/:id',user.GetSingleData);
router.get('/delete/:id',user.DeleteData);
router.post('/update/:id',user.UpdateData);

module.exports = router;
