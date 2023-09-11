const model = require("../../model/auth.model");
const { generateToken } = require("../../services/auth.service");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide both username and password.' });
  }

  let user = await model.login(username, password);
  if(!user.length > 0){
    return res.status(401).json({ message: 'Account not found!' });
  }

  // Generate a JWT token and send it in the response
  const payload = {
    id: user.id,
    username: user.username,
    password: user.password
  };

  const token = generateToken(payload);
  res.json({ token, userData: user });
};

module.exports = {
    login,
}
