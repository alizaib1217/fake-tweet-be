const Joi = require("joi");

const Auth = {
  register: Joi.object().keys({
    name: Joi.string()
      .min(1)
      .required()
      .error((err) => {
        err[0].message = "First name is required.";
        return err;
      }),
    email: Joi.string()
      .email()
      .required()
      .error((err) => {
        err[0].message = "Email is required.";
        return err;
      }),

    avatar: Joi.string()
      .min(0)
      .error((err) => {
        return err;
      }),
    password: Joi.string()
      .min(6)
      .required()
      .error((err) => {
        // err[0].message = 'Email is required.';
        return err;
      }),
  }),

  login: Joi.object().keys({
    email: Joi.string()
      .email()
      .required()
      .error((err) => {
        err[0].message = "Email is required.";
        return err;
      }),
    password: Joi.string()
      .min(6)
      .required()
      .error((err) => {
        // err[0].message = 'Email is required.';
        return err;
      }),
  }),
};

exports.default = Auth;
