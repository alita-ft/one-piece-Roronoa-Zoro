'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/token', controller.home.getToken);
  router.get('/login', controller.home.login)
  router.get('/mongo', controller.home.mongo)
};
