'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    let res = await this.service.user.login()
    this.ctx.body = JSON.stringify(res)
  }
  async binding() {
    let res = await this.service.user.binding()
    console.log(res);
    this.ctx.body = JSON.stringify(res)
  }
}

module.exports = UserController;
