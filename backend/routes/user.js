const User = require("../models/user");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./userauth");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists. Please login." });
    }
    if (password.length <= 8) {
      return res.status(400).json({
        message:
          "Password is too short. Please make the password more than 8 characters.",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    return res.status(200).json({ message: "Registration successful." });
  } catch (err) {
    res.status(500).json({ message: "Internal server error." });
  }
});

router.put("/update-user/:id", async (req, res) => {
  const userId = req.params.id;
  const { name, email, role } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    if (email !== user.email) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email is already in use." });
      }
    }

    user.name = name;
    user.email = email;
    user.role = role;
    await user.save();
    return res
      .status(200)
      .json({ message: "User details updated successfully." });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "No records found!" });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (isMatch) {
      const token = jwt.sign(
        { id: existingUser._id, role: existingUser.role },
        "oltquiz123",
        { expiresIn: "30d" }
      );
      return res.status(200).json({
        id: existingUser._id,
        role: existingUser.role,
        token,
        result: "Success",
      });
    } else {
      return res.status(400).json({ message: "Invalid Credentials!" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error." });
  }
});

router.get("/all-user", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: "An error occurred", error: err.message });
  }
});

router.delete("/delete-user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const result = await User.findByIdAndDelete(userId);

    if (!result) {
      return res.status(404).send({ message: "User not found" });
    }

    res.send({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).send({ message: "An error occurred", error: err.message });
  }
});

router.get("/get_user_info", authenticateToken, async (req, res) => {
  try {
    const { id } = req.user;
    const data = await User.findById(id).select("-password");
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
