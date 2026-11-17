(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? '關閉導覽選單' : '開啟導覽選單');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', '開啟導覽選單');
      });
    });
  }

  const copyButton = document.querySelector('[data-copy-email]');
  const feedback = document.querySelector('.copy-feedback');
  if (copyButton && feedback) {
    copyButton.addEventListener('click', async () => {
      const email = copyButton.getAttribute('data-copy-email');
      try {
        await navigator.clipboard.writeText(email);
        feedback.textContent = 'Email 已複製！期待收到你的訊息 ♡';
      } catch (error) {
        feedback.textContent = `請手動複製：${email}`;
      }
    });
  }
})();
