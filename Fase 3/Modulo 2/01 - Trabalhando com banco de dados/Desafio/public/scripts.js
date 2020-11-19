const currentPage = location.pathname

const menuItems = document.querySelectorAll("header .links a") 

for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
    

    if(currentPage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
}