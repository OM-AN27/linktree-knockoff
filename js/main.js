window.addEventListener('scroll', fadeIn);

function fadeIn() {

    let allItems = document.querySelectorAll('.fade')

    for(let i = 0; i < allItems.length; i++) {

        let windowTop = window.innerHeight;
        let fadeTop = allItems[i].getBoundingClientRect().top;
        let fadePoint = 100; 

        if(fadeTop < windowTop - fadePoint) {
            allItems[i].classList.add('active');
        }else {
            allItems[i].classList.remove('active');
    
        }
    }

}

