import koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';

export const app = koa();
const router = Router();

export function starter() {
  app.use(serve('web'));

  router.get('*', function * () {
    this.body = 'Good night sweet princess';
  });

  app.use(router.routes());
  app.listen(3000);
  console.log('listening 3000');
}
