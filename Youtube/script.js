// Замена картинки в плеере
setInterval(() => {
    const imgElements = document.querySelectorAll('[class*="PlayerBarDesktop_cover"]');
    let imgBackground = "";

    imgElements.forEach(img => {
        if (img.src && img.src.includes('/1000x1000')) {
            imgBackground = img.src.replace('/1000x1000', '/1000x1000');
        }
    });

    if (imgBackground) {
        const targetElement = document.querySelector('.PlayerBar_root__cXUnU');
        if (targetElement) {

            const currentBackground = targetElement.style.background;

            const newBackground = `url(${imgBackground}) center center / cover no-repeat`;

            const img = new Image();
            img.src = imgBackground;

            img.onload = () => {

                if (currentBackground !== newBackground) {
                    targetElement.style.background = newBackground;
                }
            };

            img.onerror = () => {
                console.error(`Ошибка загрузки изображения: ${imgBackground}`);
            };
        }
    }
}, 500);

// dynamicLight
setInterval(() => {
    const imgElements = document.querySelectorAll('[class*="PlayerBarDesktop_cover"]');
    let imgBackground = "";

    imgElements.forEach(img => {
        if (img.src && img.src.includes('/1000x1000')) {
            imgBackground = img.src.replace('/1000x1000', '/200x200');
        }
    });

    if (imgBackground) {
        const targetElement = document.querySelector('.dynamicLight');
        if (targetElement) {
            // Добавляем CSS-свойства для плавного перехода
            targetElement.style.transition = "background 5s ease-in-out";

            const currentBackground = targetElement.style.background;

            const newBackground = `url(${imgBackground}) center center / cover no-repeat`;

            const img = new Image();
            img.src = imgBackground;

            img.onload = () => {
                if (currentBackground !== newBackground) {
                    targetElement.style.background = newBackground;
                }
            };

            img.onerror = () => {
                console.error(`Ошибка загрузки изображения: ${imgBackground}`);
            };
        }
    }
}, 1000);  // Интервал в 1 секунду для проверки изменения изображения


function addDynamicLightElement() {
    const dynamicLight = document.createElement('div');

    dynamicLight.classList.add('dynamicLight');

    document.body.appendChild(dynamicLight);
}

addDynamicLightElement();

// Улучшение качества закрепов
setInterval(() => {
    const imgElements = document.querySelectorAll('img.qQ7GQU14EkggPBC6jdeS');

    imgElements.forEach(imgElement => {
      imgElement.src = imgElement.src.replace(/(100x100|200x200)/g, '1000x1000');
      
      imgElement.srcset = imgElement.srcset.replace(/(100x100|200x200)/g, '1000x1000');
    });
}, 1000);

// Бровсер скрин
function addbrowserScreenElement() {
    const browserScreen = document.createElement('div');

    browserScreen.classList.add('browserScreen');

    document.body.appendChild(browserScreen);
}

addbrowserScreenElement();

// Бровсер buttons
function addbrowserButtonsElement() {
    const browserButtons = document.createElement('div');

    browserButtons.classList.add('browserButtons');

    document.body.appendChild(browserButtons);
}

addbrowserButtonsElement();

// Цвета
function firstColorBlock() {
    const firstColorBlock = document.createElement('div');

    firstColorBlock.classList.add('firstColorBlock');

    document.body.appendChild(firstColorBlock);
}

firstColorBlock();

function secondColorBlock() {
    const secondColorBlock = document.createElement('div');

    secondColorBlock.classList.add('secondColorBlock');

    document.body.appendChild(secondColorBlock);
}

secondColorBlock();

function thirdColorBlock() {
    const thirdColorBlock = document.createElement('div');

    thirdColorBlock.classList.add('thirdColorBlock');

    document.body.appendChild(thirdColorBlock);
}

thirdColorBlock();

// Поиск
function searchBlock() {
    const searchBlock = document.createElement('div');

    searchBlock.classList.add('searchBlock');

    document.body.appendChild(searchBlock);
}

searchBlock();

// Субтитры
const floatingDiv = document.createElement('div');
floatingDiv.id = 'floatingDiv';

document.body.appendChild(floatingDiv);

let previousText = '';

function updateFloatingText() {
    const lyricsElement = document.querySelector('.SyncLyricsScroller_line_active__6lLvH');
    
    if (lyricsElement && lyricsElement.textContent.trim() !== '') {
        const currentText = lyricsElement.textContent.trim();
        
        if (currentText !== previousText) {
            floatingDiv.textContent = currentText;
            previousText = currentText;
        }

        floatingDiv.style.display = 'block';
    } else {
        floatingDiv.style.display = 'none';
        previousText = '';
    }
}
setInterval(updateFloatingText, 100);

updateFloatingText();

// Получаем элементы
const playerBar = document.querySelector('.PlayerBar_root__cXUnU');
const logo = document.querySelector('.NavbarDesktop_logo__Z4jGx');

// Добавляем обработчики событий
playerBar.addEventListener('mouseenter', () => {
    logo.style.opacity = 1;
});

playerBar.addEventListener('mouseleave', () => {
    logo.style.opacity = 0;
});