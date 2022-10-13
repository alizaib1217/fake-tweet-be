const {
  createTweet,
  getTweets,
  updateTweet,
} = require("../service/tweets.service");

exports.createTweet = async (req, res) => {
  const { name, userName, time, tweet, verified } = req.body;
  const { filename } = req.file;
  const doc = await createTweet({
    name,
    userName,
    time,
    tweet,
    file: filename,
    verified,
  });
  res.json(doc);
};

exports.getTweets = async (req, res) => {
  const doc = await getTweets();
  res.json({
    status: true,
    data: doc,
  });
};

exports.updateTweet = async (req, res) => {
  const { name, userName, time, tweet, verified } = req.body;
  const { filename } = req.file;
  // file null
  const body = {
    name,
    userName,
    time,
    tweet,
    file: filename,
    verified,
  };

  if (!filename) delete body.filename;
  const doc = await updateTweet(body);
  res.json(doc);
};

// exports.deleteProductById = async (req, res) => {
//   const { _id } = req.body;
//   const doc = await deleteProductById({ _id });
//   if (doc) {
//     res.json({
//       status: true,
//       data: doc,
//     });
//   } else {
//     res.json({
//       status: true,
//       message: "Incorrect Id.",
//     });
//   }
// };
