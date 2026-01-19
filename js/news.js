const newsList = document.getElementById('news-list');
const modal = document.getElementById('news-modal');
const modalTitle = modal.querySelector('.modal-title');
const modalDate = modal.querySelector('.modal-date');
const modalBody = modal.querySelector('.modal-body');
const closeBtn = modal.querySelector('.close');

fetch('news.json')
  .then(res => res.json())
  .then(newsItems => {
    newsItems.forEach(item => {
      const li = document.createElement('li');
      li.className = 'news-item';

      const date = document.createElement('span');
      date.className = 'date';
      date.textContent = item.date;

      const title = document.createElement('span');
      title.className = 'summary';
      title.textContent = item.title;

      li.append(date, title);
      newsList.appendChild(li);

      li.addEventListener('click', () => {
        modalDate.textContent = item.date;
        modalTitle.textContent = item.title;

        // 安全：textContentのみ使用
        modalBody.textContent = item.content;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  });

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
