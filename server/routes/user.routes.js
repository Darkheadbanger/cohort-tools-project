const router = require("express").Router();
const User = require("../models/User.model");

const { isAuthenticated } = require("../middleware/jwt.middleware");
const { error403Credentials } = require("../error-handling/errorHandling");

// Pas cablé