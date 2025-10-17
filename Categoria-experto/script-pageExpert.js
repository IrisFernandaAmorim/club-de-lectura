// select all book cards
const books = document.querySelectorAll('.book');

// helper: load status map from localStorage
function loadStatusMap() {
  return JSON.parse(localStorage.getItem('experto_status') || '{}');
}
function saveStatusMap(map) {
  localStorage.setItem('experto_status', JSON.stringify(map));
}

// helper: comments map
function loadCommentsMap() {
  return JSON.parse(localStorage.getItem('experto_comments') || '{}');
}
function saveCommentsMap(map) {
  localStorage.setItem('experto_comments', JSON.stringify(map));
}

// initialize from storage
const statusMap = loadStatusMap();
const commentsMap = loadCommentsMap();

// iterate books and attach events
books.forEach(book => {
  const id = book.dataset.id;
  const toggle = book.querySelector('.btn-toggle');
  const textarea = book.querySelector('textarea');
  const send = book.querySelector('.comment-send');
  const list = book.querySelector('.comment-list');

  // restore status visual
  if (statusMap[id] === 'read') {
    book.classList.add('is-read');
    toggle.textContent = 'Leído ✅';
  } else {
    toggle.textContent = 'Por leer 📖';
  }

  // restore comments
  const existingComments = commentsMap[id] || [];
  existingComments.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
  });

  // toggle read/unread
  toggle.addEventListener('click', () => {
    const isRead = book.classList.toggle('is-read');
    statusMap[id] = isRead ? 'read' : 'unread';
    saveStatusMap(statusMap);
    toggle.textContent = isRead ? 'Leído ✅' : 'Por leer 📖';
  });

  // send comment
  send.addEventListener('click', () => {
    const value = textarea.value.trim();
    if (!value) return;
    const li = document.createElement('li');
    li.textContent = value;
    list.appendChild(li);
    textarea.value = '';
    commentsMap[id] = commentsMap[id] || [];
    commentsMap[id].push(value);
    saveCommentsMap(commentsMap);
  });
});
