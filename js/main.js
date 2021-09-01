'use strict';

function createCard() {
    for (let i = 0; i <= items.length - 1; i++) {
        let item_name = items.map(item => item.name),
            item_imgUrl = items.map(item => item.imgUrl),
            item_stock = items.map(item => item.orderInfo.inStock),
            item_price = items.map(item => item.price),
            item_reviews = items.map(item => item.orderInfo.reviews);
        let cards = document.querySelector('.cards');
        let cards__item = document.createElement('div');
        cards__item.classList.add('cards__item');
        cards__item.innerHTML = 
        `<div class="card">
                <a href="#" class="card__like">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4998 2.99988C14.7598 2.99988 13.0898 3.80988 11.9998 5.08988C10.9098 3.80988 9.23975 2.99988 7.49975 2.99988C4.41976 2.99988 1.99976 5.41988 1.99976 8.49988C1.99976 12.2799 5.39976 15.3599 10.5498 20.0399L11.9998 21.3499L13.4498 20.0299C18.5998 15.3599 21.9998 12.2799 21.9998 8.49988C21.9998 5.41988 19.5798 2.99988 16.4998 2.99988ZM12.0998 18.5499L11.9998 18.6499L11.8998 18.5499C7.13975 14.2399 3.99976 11.3899 3.99976 8.49988C3.99976 6.49988 5.49976 4.99988 7.49975 4.99988C9.03975 4.99988 10.5398 5.98988 11.0698 7.35988H12.9398C13.4598 5.98988 14.9598 4.99988 16.4998 4.99988C18.4998 4.99988 19.9998 6.49988 19.9998 8.49988C19.9998 11.3899 16.8598 14.2399 12.0998 18.5499Z" fill="black"/>
                    </svg>                                
                </a>
                <img src='images/${item_imgUrl[i]}' alt='' class="card__img">
                <h3 class="card__header">${item_name[i]}</h3>
                <div class="stock">
                    <div class="stock__img">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="9.99981" r="9.5" stroke="#1BC943"/>
                            <g clip-path="url(#clip0)"><path d="M8.6251 12.1061L6.01885 9.49984L5.13135 10.3811L8.6251 13.8748L16.1251 6.37484L15.2438 5.49359L8.6251 12.1061Z" fill="#1BC943"/></g>
                            <defs><clipPath id="clip0"><rect width="15" height="15" fill="white" transform="translate(3 1.99982)"/></clipPath></defs>
                        </svg>
                    </div>
                    <p class="stock__left"><b>${item_stock[i]}</b> left in stock</p>
                </div>
                <p class="card__price">Price: <b>${item_price[i]}</b>$</p>
                <a href="#" target="_blank" class="btn card__btn">Add to cart</a>
                <div class="reviews">
                    <a href="#" class="review__img">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00008 15.7915L7.79175 14.6915C3.50008 10.7998 0.666748 8.23315 0.666748 5.08315C0.666748 2.51648 2.68341 0.499817 5.25008 0.499817C6.70008 0.499817 8.09175 1.17482 9.00008 2.24148C9.90841 1.17482 11.3001 0.499817 12.7501 0.499817C15.3167 0.499817 17.3334 2.51648 17.3334 5.08315C17.3334 8.23315 14.5001 10.7998 10.2084 14.6998L9.00008 15.7915Z" fill="#F05454"/>
                        </svg>    
                    </a>
                    <div class="review__average">
                        <p class="positive"><b>${item_reviews[i]}%</b> Positive reviews</p>
                        <p class="above">Above avarage</p>
                    </div>
                    <div class="review__orders">
                        <p class="counter"><b>527</b></p>
                        <p class="stat">orders</p>
                    </div>
                </div>
        </div>`
cards.append(cards__item);
    }
}

createCard();


