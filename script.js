// เพิ่มเอฟเฟกต์เลื่อนขึ้นเมื่อผู้ใช้เลื่อนผ่านโปรเจค
window.addEventListener('scroll', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (cardPosition < screenPosition) {
            card.classList.add('fade-in');
        }
    });
});
