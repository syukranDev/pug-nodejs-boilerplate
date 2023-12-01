var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    let data = {}

    try{
        let sampleData = [
            {
                id: 1,
                type: 'btc',
                price: 2343242.33
            },
            {
                id: 2,
                type: 'eth',
                price: 2343242.33
            },
            {
                id: 3,
                type: 'xrp',
                price: 665.33
            }
        ]

        data.count = sampleData.length || 0
        data.rows = sampleData || []

   } catch(e) {
        console.error(e)
        return res.status(500).send({ errMsg: 'Unable to fetch crypto price list.'})
   }

   return res.send({ status: 'success', data})
});

module.exports = router;
