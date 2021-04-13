const router = require('express').Router();

const apiPhonesRouter = require('./api/phones');

router.use('/phones', apiPhonesRouter);

module.exports = router;
