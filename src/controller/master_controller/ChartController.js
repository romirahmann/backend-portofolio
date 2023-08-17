const model = require('../../model/chart.model')

getTopCustomer = async (req, res) => {
    let data = await model.getTopCustomer();
    res.status(200).json(data);
}

getDailyIncome = async (req, res) => {
    let data = await model.getDailyIncome();
    res.status(200).json(data);
}

module.exports = {
   getTopCustomer,
   getDailyIncome
}