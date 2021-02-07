'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api1', controller.home.API1);
  router.get('/api2', controller.home.API2);
  router.get('/', controller.home.index);
  router.get('/news', controller.news.index)
  router.post('/add', controller.home.add)
};
