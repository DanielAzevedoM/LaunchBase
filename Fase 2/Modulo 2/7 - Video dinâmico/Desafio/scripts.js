const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const imgCard = document.querySelectorAll('.card-img')


for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    
    card.addEventListener("click", function(){
        const urlId = card.getAttribute('id')


        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src=`https://rocketseat.com.br/${urlId}`
    })
}


document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector("iframe").src = "";
})