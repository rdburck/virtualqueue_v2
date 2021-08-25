const router = require('express').Router();
const customerRoutes = require('./customerRoutes');

router.use('/customerRoutes', customerRoutes);

module.exports = router;
