import { http, HttpResponse } from 'msw';

import { tech, design } from '../dummyData/articles.json';

const ARTICLE_LIST = [...tech, ...design];

export const handlers = [
  http.get('/', () => {
    return HttpResponse.json(ARTICLE_LIST);
  }),

  http.get('/tech', () => {
    return HttpResponse.json(tech);
  }),

  http.get('/design', () => {
    return HttpResponse.json(design);
  }),

  http.get('/article/:id', ({ params }) => {
    const { id } = params;
    const article = ARTICLE_LIST.find((article) => article.id === id);

    return HttpResponse.json({ ...article });
  }),
];
