const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id")

        window.location.href = `/video?id=${videoId}`
        
    })
}

