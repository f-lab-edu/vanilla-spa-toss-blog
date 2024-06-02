import articleView from './article';
import list from './list';

export default (container) => {
  const home = async () => {
    const data = await fetch('/').then((res) => res.json());
    container.innerHTML = list(data);
  };

  const tech = async () => {
    const data = await fetch('/tech').then((res) => res.json());
    container.innerHTML = list(data);
  };

  const design = async () => {
    const data = await fetch('/design').then((res) => res.json());
    container.innerHTML = list(data);
  };

  const article = async (params) => {
    const { id } = params;
    const data = await fetch(`/article/${id}`).then((res) => res.json());
    container.innerHTML = articleView(data);
  };

  const notFound = () => {
    container.innerHTML = `<div>page not found</div>`;
  };

  return {
    home,
    tech,
    design,
    article,
    notFound,
  };
};
