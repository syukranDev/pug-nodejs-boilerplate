var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    return res.render('index', { layout: 'layout'})
});

module.exports = router;
