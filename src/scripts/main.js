
    document.addEventListener('DOMContentLoaded', function(){ 
    const buttons = document.querySelectorAll('[data-tab-button]');
      
    for (let i = 0; i < buttons.length; i++){
        
   
        buttons[i].addEventListener('click', function(button){
            
            const abaAlvo =  button.target.dataset.tabButton;
            
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            
            hideAbs();
            aba.classList.add('movies__list__generation--is-active');
            removeActiveButton();
            button.target.classList.add('movies__tabs__button--is-active');
            
        })
    }
})

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i=0; i < buttons.length; i++){
        buttons[i].classList.remove('movies__tabs__button--is-active');
    }
}
function hideAbs() {

    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    for (let i =0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('movies__list__generation--is-active');
        
    }
}
