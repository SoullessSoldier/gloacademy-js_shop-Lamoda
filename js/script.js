const headerCityBtn = document.querySelector('.header__city-button');
headerCityBtn.textContent = localStorage.getItem('lomoda-location') || 'Ваш город';
headerCityBtn.addEventListener('click', () => {
    const city = prompt('Укажите ваш город:', 'Москва');
    headerCityBtn.textContent = city;
    localStorage.setItem('lomoda-location', city);
}); 

const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.dbScrollY = window.scrollY;
    document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
    `;
};
const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dbScrollY,
    })
};

const subheaderCart = document.querySelector('.subheader__cart'),
    cartOverlay = document.querySelector('.cart-overlay');

const cartModalOpen = () => {
    cartOverlay.classList.add('cart-overlay-open');
    disableScroll();
};

const cartModalClose = () => {
    cartOverlay.classList.remove('cart-overlay-open');
    enableScroll();
};

subheaderCart.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', (event) => {
    const target = event.target;

    if(target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
        cartModalClose();
    }

});

