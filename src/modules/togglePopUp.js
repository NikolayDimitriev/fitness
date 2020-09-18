const togglePopUp = () => {
    const toggleUlOfHeader = document.querySelector('.clubs-list__item'),
        freeVisitPopUp = document.querySelector('#free_visit_form'),
        callbackPopUp = document.querySelector('#callback_form'),
        giftPopUp = document.querySelector('#gift'),
        body = document.body;

    const style = document.createElement('style');

    style.id = 'styleToPopUp';
    style.textContent = `
        .popup-active {
            display: block !important;
        }
    `;
    document.head.append(style);

    body.addEventListener('click', e => {
        const target = e.target;

        // выпадающее меню "выбрать клуб"
        if (target.closest('.clubs-list')) {
            toggleUlOfHeader.classList.toggle('popup-active');
            // открытие модального окна free-visit-form
        } else if (target.closest('.open-popup')) {
            freeVisitPopUp.classList.add('popup-active');
            // открытие модального окна callback_form
        } else if (target.closest('.callback-btn')) {
            callbackPopUp.classList.add('popup-active');
            // открытие модального окна gift и скрытие кнопки подарка
        } else if (target.closest('.fixed-gift')) {
            giftPopUp.classList.add('popup-active');
            target.closest('.fixed-gift').style.display = 'none';
            // закрытие модальных окон по кнопке
        } else if (target.closest('.close_icon')) {
            target.closest('.popup-active').classList.remove('popup-active');
            // закрытие модальных окон по подложке
        } else if (target.closest('.overlay')) {
            target.closest('.popup-active').classList.remove('popup-active');
        }
    });
};

export default togglePopUp;
