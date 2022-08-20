const transcation = require('./utility');

class User {
    async getUserInfo(email) {
        const sql = ["SELECT name, email FROM user WHERE email = ?"];
        const value = [[email]]
        const data = await transcation(sql, value);
        return data[0][0]
    }

    async getUserSecret(email) {
        const sql = ["SELECT email, password FROM user WHERE email = ?"];
        const value = [[email]]
        const data = await transcation(sql, value);
        return data[0]
    }

    async createUser(userName, email, hash) {
        const sql = ["INSERT INTO user (name, email, password) VALUES (?, ?, ?)"];
        const value = [[userName, email, hash]];
        await transcation(sql, value);
    }
}

module.exports = User;