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


// downButtons
function downButtons() {
    const downButtons = document.createElement('div');

    downButtons.classList.add('downButtons');

    document.body.appendChild(downButtons);
}

downButtons();

// .likeBack
function likeBack() {
    const likeBack = document.createElement('div');

    likeBack.classList.add('likeBack');

    document.body.appendChild(likeBack);
}

likeBack();

// Функция для смены фона в зависимости от состояния aria-pressed
function updateLikeButtonBackground() {
    const likeButton = document.querySelector('.PlayerBarDesktop_likeButton__LKH4K');
    const likeBack = document.querySelector('.likeBack');

    if (likeButton && likeBack) {
        const isPressed = likeButton.getAttribute('aria-pressed');

        if (isPressed === 'true') {
            likeBack.style.backgroundColor = '#f1f1f1';
        } else if (isPressed === 'false') {
            likeBack.style.backgroundColor = '#272727';
        }
    }
}

// checkPlayerBar
function checkPlayerBar() {
  const likeButton = document.querySelector('.PlayerBarDesktop_likeButton__LKH4K');
  
  const likeBackElements = document.querySelectorAll('.likeBack');
  const downButtonElements = document.querySelectorAll('.downButtons');
  
  if (!likeButton) {
    likeBackElements.forEach(element => element.style.display = 'none');
    downButtonElements.forEach(element => element.style.display = 'none');
  } else {
    likeBackElements.forEach(element => element.style.display = '');
    downButtonElements.forEach(element => element.style.display = '');
  }
}

setInterval(checkPlayerBar, 300);

setInterval(updateLikeButtonBackground, 300);

// Первоначальная проверка для установки правильного фона при загрузке страницы
updateLikeButtonBackground();

// dynamicLight
let currentBackground = "";  // Текущее изображение фона
let isAnimating = false;  // Флаг, чтобы избежать резкой смены во время анимации

setInterval(() => {
    const imgElements = document.querySelectorAll('[class*="PlayerBarDesktop_cover"]');
    let imgBackground = "";

    imgElements.forEach(img => {
        if (img.src && img.src.includes('/1000x1000')) {
            imgBackground = img.src.replace('/1000x1000', '/200x200');
        }
    });

    if (imgBackground && imgBackground !== currentBackground && !isAnimating) {
        const targetElement = document.querySelector('.dynamicLight');
        if (targetElement) {
            const img = new Image();
            img.src = imgBackground;

            img.onload = () => {
                if (currentBackground !== imgBackground && !isAnimating) {
                    currentBackground = imgBackground;  // Обновляем текущий фон
                    isAnimating = true;  // Устанавливаем флаг анимации

                    // Анимация через псевдоэлемент
                    const newBackground = `url(${imgBackground}) center center / cover no-repeat`;

                    // Создаем или находим псевдоэлемент для плавной анимации
                    let backgroundOverlay = document.querySelector('.backgroundOverlay');
                    if (!backgroundOverlay) {
                        backgroundOverlay = document.createElement('div');
                        backgroundOverlay.classList.add('backgroundOverlay');
                        targetElement.appendChild(backgroundOverlay);
                    }

                    // Устанавливаем стили псевдоэлемента
                    backgroundOverlay.style.position = 'absolute';
                    backgroundOverlay.style.top = '0';
                    backgroundOverlay.style.left = '0';
                    backgroundOverlay.style.width = '100%';
                    backgroundOverlay.style.height = '100%';
                    backgroundOverlay.style.zIndex = '-1';
                    backgroundOverlay.style.willChange = 'opacity, transform';
                    backgroundOverlay.style.transition = 'opacity 5s ease-in-out';
                    backgroundOverlay.style.opacity = '0';
                    backgroundOverlay.style.background = newBackground;

                    // Применяем анимацию плавного появления
                    requestAnimationFrame(() => {
                        backgroundOverlay.style.opacity = '1';
                    });

                    // После завершения анимации (5 секунд)
                    setTimeout(() => {
                        targetElement.style.background = newBackground;  // Устанавливаем новый фон основного элемента
                        backgroundOverlay.style.opacity = '0';  // Скрываем псевдоэлемент

                        // Через небольшую задержку удаляем псевдоэлемент, чтобы избежать резких изменений
                        setTimeout(() => {
                            backgroundOverlay.remove();
                            isAnimating = false;  // Сбрасываем флаг анимации после её завершения
                        }, 500);  // Небольшая задержка для завершения скрытия
                    }, 5000);  // Время завершения анимации (5 секунд)
                }
            };

            img.onerror = () => {
                console.error(`Ошибка загрузки изображения: ${imgBackground}`);
            };
        }
    }
}, 500);  // Интервал 3 секунды для проверки изменения изображения

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

const playerBar = document.querySelector('.PlayerBar_root__cXUnU');
const logo = document.querySelector('.NavbarDesktop_logo__Z4jGx');

playerBar.addEventListener('mouseenter', () => {
    logo.style.opacity = 1;
});

playerBar.addEventListener('mouseleave', () => {
    logo.style.opacity = 0;
});