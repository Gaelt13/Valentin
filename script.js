function flipCard(card) {
    const inner = card.querySelector(".card-inner");
    inner.style.transform = inner.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
}

document.addEventListener("DOMContentLoaded", function () {
    const heartPositions = [
        [1, 3], [1, 4], [1, 6], [1, 7],
        [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8],
        [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], 
        [4, 3], [4, 4], [4, 5], [4, 6], [4, 7],
        [5, 4], [5, 5], [5, 6],
        [6, 5]
    ];

    const loveQuotes = [
        "Me encanta tú sonrisa❤️",
        "A tu lado me siento en paz💛",
        "Eres mi persona favorita en el mundo 🌎",
        "Contigo, aprendí lo que es amar 💖",
        "Mi corazón late por y para ti 💓",
        "Amo cada detalle de ti 💕",
        "Eres la razón de mi sonrisa",
        "Tu risa contagiosa❤️",
        "Tienes un gran corazón💖",
        "Eres muy inteligente y responsable💓",
        "Me encanta estar a tu lado👫",
        "Eres súper amable con los demás❤️",
        "Que nos apoyemos mutuamente👫",
        "Nuestro sentido del humor xd😹",
        "Tus caricias❤️",
        "El como me miras💛",
        "Eres la persona con la que quiero compartir mis días☀️",
        "Eres lo mejor que me ha pasado💕",
        "El brillo de tus ojos👁️",
        "Tu gusto por la música🎵",
        "El como nos compenetramos💖",
        "Nuestro gusto por la comida🍔",
        "Como te emocionas por cosas pequeñitas🎁",
        "Tus expresiones cuando algo te gusta💘",
        "Tu valentia🦖",
        "Eres maravillosa🌟",
        "Ser tú❤️",
    ];

    const gallery = document.querySelector(".heart-gallery");
    gallery.innerHTML = "";

    heartPositions.forEach((pos, index) => {
        const randomQuote = loveQuotes[index % loveQuotes.length]; 

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.gridColumn = pos[1];
        card.style.gridRow = pos[0];

        card.innerHTML = `
            <div class="card-inner" onclick="flipCard(this.parentElement)">
                <div class="card-front">
                    <img src="img${index + 1}.jpg" alt="Imagen ${index + 1}">
                </div>
                <div class="card-back">
                    <p class="love-quote">${randomQuote}</p>
                </div>
            </div>
        `;

        gallery.appendChild(card);
    });


    const music = new Audio("I was made for lovin you.mp3");
    music.loop = true;
    let musicStarted = false;

    const musicButton = document.createElement("button");
    musicButton.innerText = "🎵 Activar música";
    musicButton.style.position = "fixed";
    musicButton.style.bottom = "20px";
    musicButton.style.right = "20px";
    musicButton.style.padding = "10px";
    musicButton.style.borderRadius = "10px";
    musicButton.style.background = "red";
    musicButton.style.color = "white";
    musicButton.style.border = "none";
    musicButton.style.cursor = "pointer";
    document.body.appendChild(musicButton);

    function startMusic() {
        if (!musicStarted) {
            music.play().then(() => {
                musicStarted = true;
                musicButton.innerText = "🔊 Música activada";
            }).catch(error => {
                console.log("⚠️ Error al reproducir música:", error);
                alert("Activa manualmente la música haciendo clic en el botón.");
            });
        }
    }

    musicButton.addEventListener("click", startMusic);
    document.body.addEventListener("click", startMusic, { once: true });


    function createFloatingHeart() {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "❤️";
        document.body.appendChild(heart);

        const startX = Math.random() * window.innerWidth;
        heart.style.left = `${startX}px`;
        heart.style.bottom = "0px";
        heart.style.position = "fixed";
        heart.style.fontSize = `${Math.random() * 20 + 20}px`;
        heart.style.opacity = "1";
        heart.style.transition = "all 5s ease-out";

        setTimeout(() => {
            heart.style.transform = `translateY(-${window.innerHeight}px) scale(1.5)`;
            heart.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createFloatingHeart, 300);
});
