const express = require('express');
const router = express.Router();
const transcation = require('../module/utility');

router.post('/', async (req, res) => {
    const {product, plan} = req.body;
    const sql = ["SELECT terms_1, terms_2, terms_3, terms_4, terms_5, terms_6, terms_7, terms_8, terms_9, terms_10, terms_11, terms_12, terms_13, terms_14, terms_15, terms_16, terms_17, terms_18, terms_19, terms_20, terms_21 FROM product WHERE id = ?"];
    const value = [[product]];
    const data = await transcation(sql, value)

    const sql2 = ["SELECT terms_1, terms_2, terms_3, terms_4, terms_5, terms_6, terms_7, terms_8, terms_9, terms_10, terms_11, terms_12, terms_13, terms_14, terms_15, terms_16, terms_17, terms_18, terms_19, terms_20, terms_21 FROM terms WHERE item = ? and plan = ?"];
    const value2 = [[product ,plan]];
    const data2 = await transcation(sql2, value2)
    res.status(200).json({'success': true, 'title':data[0][0], 'data': data2[0][0]})
});


module.exports = router;