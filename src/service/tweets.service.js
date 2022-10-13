const { Tweets } = require("../models");

exports.createTweet = async ({
  name,
  userName,
  time,
  tweet,
  file,
  verified,
}) => {
  try {
    const newTweet = new Tweets({
      name,
      userName,
      time,
      tweet,
      file,
      verified,
    });
    return await newTweet.save();
  } catch (e) {
    throw Error(e);
  }
};

exports.getTweets = async () => {
  try {
    return await Tweets.find();
  } catch (e) {
    throw Error(e);
  }
};

exports.updateTweet = async (body) => {
  try {
    // update
    const response = await Tweets.findOneAndUpdate(
      { _id },
      {
        $set: body,
      },
      { new: true }
    );
    return response;
  } catch (e) {
    throw Error(e);
  }
};

// exports.deleteProductById = async ({ _id }) => {
//   try {
//     return await Products.findByIdAndDelete({ _id });
//   } catch (e) {
//     throw Error(e);
//   }
// };
