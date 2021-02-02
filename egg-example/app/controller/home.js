'use strict';
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    const list = await service.home.getList();
    // ctx.body = JSON.stringify(list)
    let title = '首页'
    await ctx.render('home', { title: title });
  }
}
module.exports = HomeController;
