const userModel = require("../models/userModel");

const userController = {};

userController.get_all = async (req, res, next) => {
  const user_list = await userModel.find();
  res.send(user_list);
};

userController.register = async (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  const saveUser = await userModel.create({
    first_name,
    last_name,
    email,
    password,
  });
  if (saveUser) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
};

userController.login = async (req, res, next) => {
  const { email, password } = req.body;
  const FindUser = await userModel.find({ email, password });
  if (FindUser.length > 0) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
};

userController.remove_user = async (req, res, next) => {
  const { id } = req.query;
  const deleteUser = await userModel.findByIdAndDelete(id);
  if (deleteUser) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
};

module.exports = userController;
