import Router from 'koa-router';
const router = new Router();
router.prefix('/users');

const index = async (ctx: Router.RouterContext, next: any) => {
  ctx.body = {
    success: true,
  };
};
router.get('/', index);
router.post('/', index);

const foo = async (ctx: Router.RouterContext, next: any) => {
  ctx.body = 'this is foo response.';
};
router.get('/foo', foo);
router.post('/foo', foo);

const bar = async (ctx: Router.RouterContext, next: any) => {
  ctx.body = 'this is bar response.';
};
router.get('/bar', bar);
router.post('/bar', bar);

export default router;
