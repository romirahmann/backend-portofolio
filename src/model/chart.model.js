const sakila = require('./../database/sakila.config');

getTopCustomer = async () => {
    return await sakila
      .select('customer.customer_id', 'customer.first_name')
      .count('rental.rental_id as rental_count')
      .from('customer')
      .join('rental', 'customer.customer_id', '=', 'rental.customer_id')
      .groupBy('customer.customer_id', 'customer.first_name')
      .orderBy('rental_count', 'DESC')
      .limit(10);
  };

  getDailyIncome = async () => {
    return await sakila.raw(`
              SELECT DATE(payment_date) AS transaction_date,
              SUM(amount) AS total_daily_income
              FROM payment
              GROUP BY DATE(payment_date);
          `);
  };
 



module.exports = {
   getDailyIncome,
   getTopCustomer
};