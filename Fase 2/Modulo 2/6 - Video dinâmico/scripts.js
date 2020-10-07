const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id")

        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://youtube.com/embed/${videoId}`
        
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""   
})