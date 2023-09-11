const projects = require("../database/projects.config");

login = async (username, password) => await projects
      .select(`user_id`, 'username', 'password')
      .from('users')
      .where({'username': username, 'password': password}) 

module.exports = {
    login,
}
