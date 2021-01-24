'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/userInfo1', controller.user.userInfo1);
  router.get('/userInfo2', controller.user.userInfo2);
  router.get('/userInfoById', controller.user.searchInfo);
};
