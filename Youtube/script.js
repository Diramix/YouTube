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

// Добавление CSS стилей для анимации
const style = document.createElement('style');
style.textContent = `
    /* CSS-класс для начального состояния элементов (скрыто) */
    .hidden {
        opacity: 0;
        transition: opacity 0.5s ease; /* Плавное изменение прозрачности за 0.5 секунды */
        display: block; /* Убедитесь, что элемент занимает место в документе */
    }

    /* CSS-класс для отображения элементов */
    .visible {
        opacity: 1;
        transition: opacity 0.5s ease; /* Плавное изменение прозрачности за 0.5 секунды */
    }
`;
document.head.appendChild(style);

// Функция для скрытия элементов, добавляя CSS-класс .hidden
function hideElementsByClasses(classes) {
    classes.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach(element => {
            element.classList.add('hidden');
            element.classList.remove('visible');
        });
    });
}

// Функция для отображения элементов, добавляя CSS-класс .visible
function showElementsByClasses(classes) {
    classes.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach(element => {
            element.classList.add('visible');
            element.classList.remove('hidden');
        });
    });
}

// Лютый скрипт который убирает полоску йоу
function toggleCloseButton() {
    const ariaLabelElement = document.querySelector('[aria-label="Включить текстомузыку Может нарушить доступность"]');

    const closeButton = document.querySelector('.FullscreenPlayerDesktop_closeButton__MQ64s');

    if (ariaLabelElement && closeButton) {
        const isHidden = ariaLabelElement.getAttribute('aria-hidden') === 'true';

        if (isHidden) {
            closeButton.style.display = 'none';
        } else {
            closeButton.style.display = 'block';
        }
    }
}

setInterval(toggleCloseButton, 500);

// Создаем новый div элемент с классом PlayPauseContent
const playPauseContent = document.createElement('div');
playPauseContent.classList.add('PlayPauseContent');
playPauseContent.style.backgroundImage = 'url("http://127.0.0.1:2007/assets/pause.png")';
playPauseContent.style.backgroundSize = 'cover'; // Адаптируем изображение под размеры

// Добавляем div элемент в документ (например, в body)
document.body.appendChild(playPauseContent);

// Функция для проверки состояния и изменения backgroundImage
function checkAndUpdateContent() {
  const sonataButton = document.querySelector('body > div > section > div > div > div > button.WsKeF73pWotx9W1tWdYY');

  if (sonataButton) {
    const dataTestId = sonataButton.getAttribute('data-test-id');
    console.log('Current data-test-id:', dataTestId); // Выводим текущий атрибут для отладки

    if (dataTestId === 'PLAY_BUTTON_NOT_PLAYING') {
      console.log('Switching to arch.png');
      playPauseContent.style.backgroundImage = 'url("http://127.0.0.1:2007/assets/pause.png")';
    } else if (dataTestId === 'PLAY_BUTTON_PLAYING') {
      console.log('Switching to down-buttons.png');
      playPauseContent.style.backgroundImage = 'url("http://127.0.0.1:2007/assets/play.png")';
    }
  } else {
    console.log('Element with class SonataControlsDesktop_sonataButton__FTykq not found');
  }
}

// Запускаем проверку каждую секунду
setInterval(checkAndUpdateContent, 50);

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

function checkPlayerBar() {
  const likeButton = document.querySelector('.PlayerBarDesktop_likeButton__LKH4K');
  
  const likeBackElements = document.querySelectorAll('.likeBack');
  const downButtonElements = document.querySelectorAll('.downButtons');
  const navbarLogoElement = document.querySelector('.NavbarDesktop_logo__Z4jGx');
  
  if (!likeButton) {
    likeBackElements.forEach(element => element.style.display = 'none');
    downButtonElements.forEach(element => element.style.display = 'none');
    
    if (navbarLogoElement) {
      navbarLogoElement.style.display = 'none';
    }
  } else {
    likeBackElements.forEach(element => element.style.display = '');
    downButtonElements.forEach(element => element.style.display = '');
    
    if (navbarLogoElement) {
      navbarLogoElement.style.display = '';
    }
  }
}

setInterval(checkPlayerBar, 300);

setInterval(updateLikeButtonBackground, 300);

updateLikeButtonBackground();


// dynamicLight
let currentBackground = "";
let isAnimating = false;

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
                    currentBackground = imgBackground;
                    isAnimating = true;

                    const newBackground = `url(${imgBackground}) center center / cover no-repeat`;

                    let backgroundOverlay = document.querySelector('.backgroundOverlay');
                    if (!backgroundOverlay) {
                        backgroundOverlay = document.createElement('div');
                        backgroundOverlay.classList.add('backgroundOverlay');
                        targetElement.appendChild(backgroundOverlay);
                    }

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

                    requestAnimationFrame(() => {
                        backgroundOverlay.style.opacity = '1';
                    });

                    setTimeout(() => {
                        targetElement.style.background = newBackground;
                        backgroundOverlay.style.opacity = '0';

                        setTimeout(() => {
                            backgroundOverlay.remove();
                            isAnimating = false;
                        }, 500);
                    }, 5000);
                }
            };

            img.onerror = () => {
                console.error(`Ошибка загрузки изображения: ${imgBackground}`);
            };
        }
    }
}, 500);

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