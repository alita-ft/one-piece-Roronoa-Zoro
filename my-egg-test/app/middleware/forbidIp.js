module.exports = options => {
  return async function forbidip(ctx, next) {
    let host = ctx.request.ip
    let { whiteList } = options
    if (whiteList.includes(host)) {
      await next();
    } else {
      ctx.status = 403
      ctx.body = '您的ip不在白名单内'
    }
  }
}