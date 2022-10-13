const express = require("express");
const router = express.Router();
const TweetController = require("../controller/tweets.controller");
const { uploadFileBucket } = require("../middleware/upload");

router.post("/", uploadFileBucket.single("file"), TweetController.createTweet);

router.get("/", TweetController.getTweets);

router.put("/", uploadFileBucket.single("file"), TweetController.updateTweet);



// router.delete("/", ProductController.deleteProductById);

module.exports = router;
// AuthorizationCheck
