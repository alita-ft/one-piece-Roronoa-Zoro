'use strict';

const Controller = require('egg').Controller;
let userInfo = require('../../data/userInfo')
class UserController extends Controller {
    async userInfo1() {
        const { ctx } = this;
        ctx.body = JSON.stringify({ userInfo });
    }

    async userInfo2() {
        const { ctx } = this;
        console.log(ctx.query);
        console.log(ctx.request.body);


        userInfo = {
            userName: '小强',
            phone: '12300000000',
            jobNumber: '0001',
            bankId: '1',
            role: 0
        }
        ctx.body = JSON.stringify({ userInfo });
    }
    async searchInfo() {
        const { ctx } = this;
        console.log(ctx.query);
        let infoById = {
            userName: '小强',
            phone: '12300000000',
            jobNumber: '0001',
            bankId: '1',
            role: 0
        }
        ctx.body = JSON.stringify({ userInfo: infoById });
    }
}

module.exports = UserController;
