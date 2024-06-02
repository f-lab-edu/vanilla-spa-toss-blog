import createRouter from './router/router.js';
import createPages from './pages/page.js';

const container = document.getElementById('app');
const NAV_SELECTOR = '[data-navigate]';
const pages = createPages(container);

const router = createRouter();

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./src/mocks/browser.js');
  worker.start();
}

router
  .addRoute('/', pages.home)
  .addRoute('/tech', pages.tech)
  .addRoute('/design', pages.design)
  .addRoute('/article/:id', pages.article)
  .setNotFound(pages.notFound)
  .start();

document.body.addEventListener('click', (e) => {
  const target = e.target.closest(NAV_SELECTOR);

  if (target !== null && target.matches(NAV_SELECTOR)) {
    const { navigate } = target.dataset;
    console.dir(e.target);

    router.navigate(navigate);
  }
});

export default container;
