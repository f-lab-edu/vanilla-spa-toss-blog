const articleView = (data) => {
  const { title, thumnail, author, createdAt, content } = data;
  return `   <div class="article-view">
      <img src=${thumnail} />
      <h1 class="article-title">${title}</h1>
      <div class="article-writer">${author}</div>
      <div class="article-date">${createdAt}</div>
      <div class="article-content">${content}</div>
    </div>`;
};

export default articleView;
