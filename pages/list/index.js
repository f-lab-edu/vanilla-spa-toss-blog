const list = (data) => {
  return `
  <main>
  <div class="tabs">
  <div data-navigate="/" data-tab="all" class="tab">전체</div>
  <div data-navigate="/tech" data-tab="tech" class="tab"> 개발</div>
  <div data-navigate="/design" data-tab="design" class="tab">디자인</div>
  </div>
  <ul class="article-list">
  ${data
    .map(
      ({ title, id, summary, createdAt, author, thumnail }) =>
        `<li data-navigate="/article/${id}">
      <div class="list-wrapper">
      <div class="list-content-wrapper">
       <div class="list-title">${title}</div>
       <div class="list-summary">${summary}</div>
      <div class="list-writer">${createdAt} ${author}</div>
       </div>
       <img src=${thumnail} width={130} height={90}  />
       </div>
       </a>
       </li>`,
    )
    .join('')}
    
    </ul></main>`;
};

export default list;
