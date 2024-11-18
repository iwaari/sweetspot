function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
  }
  
  document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('menu');
      menu.classList.add('hidden'); 
    });
  });


