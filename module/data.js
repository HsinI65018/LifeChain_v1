const transcation = require('./utility');

class Data{
    async getTermsName(productId) {
        const sql = ["SELECT terms_1, terms_2, terms_3, terms_4, terms_5, terms_6, terms_7, terms_8, terms_9, terms_10, terms_11, terms_12, terms_13, terms_14, terms_15, terms_16, terms_17, terms_18, terms_19, terms_20, terms_21 FROM product WHERE id = ?"];
        const value = [[productId]];
        const data = await transcation(sql, value);
        return data[0][0]
    }

    async getTermsValue(productId, plan) {
        const sql = ["SELECT terms_1, terms_2, terms_3, terms_4, terms_5, terms_6, terms_7, terms_8, terms_9, terms_10, terms_11, terms_12, terms_13, terms_14, terms_15, terms_16, terms_17, terms_18, terms_19, terms_20, terms_21 FROM terms WHERE item = ? and plan = ?"];
        const value = [[productId ,plan]];
        const data = await transcation(sql, value);
        return data[0][0]
    }

    async getPlanPrice(productId, plan, days) {
        const sql = ["SELECT price FROM price INNER JOIN terms ON price.plan_id = terms.id WHERE terms.item = ? and terms.plan = ? and day = ?"];
        const value = [[productId, plan, days]];
        const data = await transcation(sql, value);
        return data[0][0]
    }
};

module.exports = Data;