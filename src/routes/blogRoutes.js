const express = require("express");
const router = express.Router();
const getHomePage = require('../app/controllers/homeController')
const getNewsPage = require('../app/controllers/newsController')
const getSearchPage = require('../app/controllers/searchController');
const getDetailsCourses = require("../app/controllers/courseController");


const blogRoutes = (app) => {
  router.get("/", getHomePage.homeController);

  router.get("/news", getNewsPage.newsController);

  router.get("/search", getSearchPage.searchController);

  router.get('/courses/:slug', getDetailsCourses.courseController);

  return app.use("/", router);
};

module.exports = blogRoutes;

// cai duong dan /courses/nodejs nay m phai khai bao o day, day t thay m khai bao 4 cai
