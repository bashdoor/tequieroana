const heartContainer = document.querySelector('.hearts-container');

for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${5 + Math.random() * 10}s`;
    heart.style.animationDelay = `-${Math.random() * 10}s`;
    heartContainer.appendChild(heart);
}

const eventsContainer = document.querySelector('.events-container');

function addEvent(date, description) {
    const event = document.createElement('div');
    event.className = 'event';
    event.innerText = `${date} - "${description}"`;
    eventsContainer.appendChild(event);
}

// Ejemplo de cómo usar la función:
addEvent("2 de julio 2023", "Reencuentro dominical, 8 pm, pollería. Amor reavivado.");
addEvent("4 de julio 2023", "Ana en busca de locación de Elvis. Momento inolvidable.");
addEvent("3 de septiembre 2023", "Tratando de robarle al tiempo un momento eterno para vivir juntos nuestro amor. Te quiero mucho Ana");



