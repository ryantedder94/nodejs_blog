const { multipleMongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");

const homeController = (req, res, next) => {
  Course.find({})
    .then((courses) =>
      res.render("home", {
        courses: multipleMongooseToObject(courses),
      })
    )
    .catch((error) => next(error));
};
module.exports = {
  homeController,
};
