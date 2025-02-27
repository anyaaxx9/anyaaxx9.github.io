// Анимация при скролле
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop - window.innerHeight < -100) {
            el.classList.add('active');
        }
    });
});

// Параллакс эффект для хедера
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('header').style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Галерея с лайтбоксом
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const imgUrl = item.style.backgroundImage.slice(5, -2);
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${imgUrl}" alt="Gallery image">
                <span class="close">&times;</span>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        lightbox.querySelector('.close').addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

// Инициализация
window.onload = () => {
    document.querySelector('header').style.opacity = 1;
};

// Товары для магазина
const products = [
    { 
        id: 1, 
        name: 'Корм для собак', 
        price: 1200, 
        category: 'food',
        image: './img/1c97f9e784757053e35f11f7c267.webp'
    },
    {
        id: 2,
        name: 'Интерактивная игрушка для кошек',
        price: 890,
        category: 'toy',
        image: './img/igrushka-dlya-koshki-ferplast-twister-3.jpg'
    },
    {id:3, name:'Сухой корм для кошек', price:1500, category:'food', image:'./img/ruyrc7zqtfko3z6rp0g9u5t0z0wzytbz.jpg'},

    {id:4, name:'Интерактивная игрушка для собак', price:890, category:'toy', image:'./img/6487519484.jpg'},

    {id:5, name:'Переноска для кошек', price:3200, category:'toy', image:'./img/ryukzak-perenoska-dlya-koshek-i-sobak-optom-1000x1000.jpg'},

    {id:5, name:'Укол от бешенства (все животные)', price:1000, category:'vet', image:'./img/11696.jpg'},
];

// Инициализация магазина
function initShop() {
    const grid = document.querySelector('.products-grid');
    grid.innerHTML = products.map(product => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h4>${product.name}</h4>
                <p class="product-price">${product.price} руб.</p>
                <button onclick="addToCart(${product.id})">В корзину</button>
            </div>
        </div>
    `).join('');
}

// Фильтрация товаров
function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.display = (category === 'all' || card.dataset.category === category) 
            ? 'block' 
            : 'none';
    });
}


// Инициализация при загрузке
window.onload = () => {
    initShop();
    document.querySelector('header').style.opacity = 1;

    initShop();
    document.querySelector('header').style.opacity = 1;
    
    // Плавный скролл для навигации
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};


var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }