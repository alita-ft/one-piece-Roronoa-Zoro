'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/login', controller.user.login)
  router.post('/binding', controller.user.binding)
  router.get('/cookie', controller.news.setCookie)




  // router.get('/', controller.home.index);
  // router.get('/news', controller.news.index)
  // router.get('/users', controller.user.index)
};
