// src/middlewares/validateEvent.js
module.exports = (req, res, next) => {
  const { title, date, location } = req.body;
  const errors = [];

  if (!title) errors.push({ field: 'title', message: "Field 'title' wajib diisi" });
  if (!date) errors.push({ field: 'date', message: "Field 'date' wajib diisi" });
  if (!location) errors.push({ field: 'location', message: "Field 'location' wajib diisi" });

  if (errors.length > 0) {
    return res.status(400).json({
      status: "fail",
      message: "Validation error",
      errors
    });
  }

  next();
};
