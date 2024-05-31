export default (container) => {
  const home = () => {
    container.innerHTML = `<div>This is Home page</div>`;
  };

  const tech = async () => {
    const data = await fetch('/').then((res) => res.json());
    console.log(data);
    container.innerHTML = data
      .map(({ title }) => `<div>${title}</div>`)
      .join('');
  };

  const design = () => {
    container.innerHTML = `<div>This is Design page</div>`;
  };

  const article = (params) => {
    const { id } = params;
    container.textContent = `This is Article Page with Id ${id}`;
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
