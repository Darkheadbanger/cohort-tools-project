const router = require("express").Router();
const User = require("../models/User.model");

const { isAuthenticated } = require("../middleware/jwt.middleware");
const { error403Credentials } = require("../error-handling/errorHandling");

// Pas cablé

router.get("/users/:id", isAuthenticated, async (req, res, next) => {
  try {
    const foundUserById = await User.findById(req.params.id);
    res.status(200).json(foundUserById);
  } catch (error) {
    res.status(500).json({ messageError: error });
  }
});

module.exports = router;
