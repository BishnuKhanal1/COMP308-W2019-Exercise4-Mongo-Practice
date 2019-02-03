let mongoose = require("mongoose");
let favoriteThingsSchema = mongoose.Schema(
  {
    name: String,
    description: String
  },
  {
    collection: "favorite_things"
  }
);

module.exports = mongoose.model("Bishnu", favoriteThingsSchema);
