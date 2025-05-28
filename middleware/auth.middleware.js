const jwt = require("jsonwebtoken");

exports.authorize = (roles = []) => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) return res.status(401).json({ message: "Unauthorized" });
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Forbidden" });
      }
      next();
    } catch (err) {
      res.status(401).json({ message: "Unauthorized", error: err.message });
    }
  };
};
