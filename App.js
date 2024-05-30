import createRouter from './router/router.js';
import createPages from './pages/page.js';

const container = document.getElementById('app');

const pages = createPages(container);

const router = createRouter();

router
  .addRoute('/', pages.home)
  .addRoute('/tech', pages.tech)
  .addRoute('/design', pages.design)
  .addRoute('/article/:id', pages.article)
  .setNotFound(pages.notFound)
  .start();

export default container;
