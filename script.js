const heartContainer = document.querySelector('.hearts-container');

for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${5 + Math.random() * 10}s`;
    heart.style.animationDelay = `-${Math.random() * 10}s`;
    heartContainer.appendChild(heart);
}
