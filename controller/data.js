const Data = require('../module/data');
const data = new Data();

const getData = async (req, res) => {
    const {productId, plan, days} = req.body;
    const termsName = await data.getTermsName(productId);
    const termsValue = await data.getTermsValue(productId, plan);
    const planPrice = await data.getPlanPrice(productId, plan, days);
    res.status(200).json({'success': true, 'termsName':termsName, 'termsValue': termsValue, 'planPrice': planPrice})
}

module.exports = getData;