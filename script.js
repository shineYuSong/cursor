// 处理鼠标悬停GIF播放
document.querySelectorAll('.hover-play img').forEach(img => {
    const staticSrc = img.src;
    const hoverSrc = img.getAttribute('data-hover');

    img.addEventListener('mouseenter', () => {
        img.src = hoverSrc;
    });

    img.addEventListener('mouseleave', () => {
        img.src = staticSrc;
    });
});

// 处理视频自动播放
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
});

document.querySelectorAll('.auto-play-video').forEach(video => {
    observer.observe(video);
});

// 平滑滚动
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 