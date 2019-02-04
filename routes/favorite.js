let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let favorite = require("../models/favorite");

/*Get Contact List Page - read operation */

router.get("/", (req, res, next) => {
  favorite.find((err, favoriteList) => {
    if (err) {
      return console.error(err);
    } else {
      console.log(favoriteList); //for debugging purpose

      res.render("favorite/index", {
        title: "Favorite Things",
        favoriteList: favoriteList
      });
    }
  });
});

module.exports = router;
