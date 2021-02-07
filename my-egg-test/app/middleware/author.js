module.exports = options => {
  return async function gzip(ctx, next) {
    ctx.state.csrf = ctx.csrf
    await next();
  };
};