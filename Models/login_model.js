// const pool = require('../Configs/db');

// const account = {
//     findByUsernameAndPassword: async (username, password) => {
//         const query = 'SELECT * FROM account WHERE account_dzone_username = $1 AND account_dzone_password = $2';
//         const values = [username, password];
//         const result = await pool.query(query, values);
//         return result.rows[0];
//     }
// };

// module.exports = account;