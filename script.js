document.querySelectorAll('.favoritar').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = btn.textContent.includes('❤️') ? '💖 Favoritado!' : '❤️ Favoritar';
  });
});
