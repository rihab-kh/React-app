const jwt = require("jsonwebtoken");
const asyncHandler = require("./async");
const User = require("../models/users");
const joueur = require("../models/users");

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
    ) {
      // Set token from Bearer token in header
      token = req.headers.authorization.split(" ")[1];
      // Set token from cookie
    }
    // Make sure token exists
    if (!token) {
      res.status(401).json({
        success: false,
        errors: {
          other: "Not authorized to access this route",
        },
      });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET);
    //  console.log(decoded.role);

    req.user = await User.findOne({_id:decoded._id});

    next();
  } catch (err) {
    console.log("error"+err)
    return res.status(401).json({
      success: false,
      errors: {
        other: "Not authorized to access this route2",
      },
    });
  }
});

// Grant access to specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(401).json({
        success: false,
        errors: {
          other: "Not authorized to access this route3",
        },
      });
    }
    next();
  };
};

exports.adminRegister = asyncHandler(async (req, res, next) => {
  if (req.body.secretKey === process.env.SECRET) {
    next();
  } else {
    res.status(400).json({
      success: false,
      errors: {
        other: "You must have a valid secret key.",
      },
    });
  }
});
