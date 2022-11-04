const photographerController = {};

photographerController.get_all = async (req, res, next) => {
  res.send("hello from controller photographer");
};

module.exports = photographerController;
