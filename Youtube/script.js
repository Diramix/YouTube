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
    const ariaLabel = sonataButton.getAttribute('aria-label');

    if (ariaLabel === 'Воспроизведение') {
      playPauseContent.style.backgroundImage = 'url("http://127.0.0.1:2007/assets/pause.png")';
    } else if (ariaLabel === 'Пауза') {
      playPauseContent.style.backgroundImage = 'url("http://127.0.0.1:2007/assets/play.png")';
    }
  } else {
    console.log('Element with class SonataControlsDesktop_sonataButton__FTykq not found');
  }
}

// Запускаем проверку каждую секунду
setInterval(checkAndUpdateContent, 50);

// downButtons
const downButtons = document.createElement('div');

downButtons.classList.add('downButtons');

document.body.appendChild(downButtons);

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
  const navbarLogoElement = document.querySelector('.NavbarDesktop_logo__Z4jGx');
  const rickrollDescriptionElement = document.querySelector('.rickrollDescription');
  
  if (!likeButton) {
    if (navbarLogoElement) {
      navbarLogoElement.style.display = 'none';
    }
    
    if (rickrollDescriptionElement) {
      rickrollDescriptionElement.style.display = '';
    }
  } else {
    if (navbarLogoElement) {
      navbarLogoElement.style.display = '';
    }
    
    if (rickrollDescriptionElement) {
      rickrollDescriptionElement.style.display = 'none';
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
const browserScreen = document.createElement('div');

browserScreen.classList.add('browserScreen');

document.body.appendChild(browserScreen);

// Бровсер buttons
const browserButtons = document.createElement('div');

browserButtons.classList.add('browserButtons');

document.body.appendChild(browserButtons);

// Цвета
// firstColorBlock
const firstColorBlock = document.createElement('div');
firstColorBlock.classList.add('firstColorBlock');
document.body.appendChild(firstColorBlock);

//secondColorBlock
const secondColorBlock = document.createElement('div');
secondColorBlock.classList.add('secondColorBlock');
document.body.appendChild(secondColorBlock);

//thirdColorBlock
const thirdColorBlock = document.createElement('div');
thirdColorBlock.classList.add('thirdColorBlock');
document.body.appendChild(thirdColorBlock);

// Поиск
const searchBlock = document.createElement('div');

searchBlock.classList.add('searchBlock');

document.body.appendChild(searchBlock);

// Субтитры
const youTubeSubtitles = document.createElement('div');
youTubeSubtitles.id = 'youTubeSubtitles';

document.body.appendChild(youTubeSubtitles);

let previousText = '';

function updateFloatingText() {
    const lyricsElement = document.querySelector('.SyncLyricsScroller_line_active__6lLvH');
    
    if (lyricsElement && lyricsElement.textContent.trim() !== '') {
        const currentText = lyricsElement.textContent.trim();
        
        if (currentText !== previousText) {
            youTubeSubtitles.textContent = currentText;
            previousText = currentText;
        }

        youTubeSubtitles.style.display = 'block';
    } else {
        youTubeSubtitles.style.display = 'none';
        previousText = '';
    }
}
setInterval(updateFloatingText, 0);

updateFloatingText();

// .LinkTitle
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

let lastArtistText = '';

function updateElement() {
    const artistElement = document.querySelector('body > div > section > div > div > div > div > div > div > a > span.Meta_text__Y5uYH');

    const artistText = artistElement ? (artistElement.textContent || artistElement.innerText) : '';

    const cleanedArtistText = artistText.replace(/[\s.,![\](){}'"\\|/?*&%$#@★]+/g, '');

    const randomString = generateRandomString(11);

    let linkTitleElement = document.querySelector('.LinkTitle');
    
    if (!linkTitleElement) {
        linkTitleElement = document.createElement('div');
        linkTitleElement.className = 'LinkTitle';
        document.body.appendChild(linkTitleElement);
    }

    if (cleanedArtistText === '') {
        linkTitleElement.textContent = 'dQw4w9WgXcQ';
    } else {
        if (cleanedArtistText !== lastArtistText) {
            linkTitleElement.textContent = `${randomString}&ab_channel=${cleanedArtistText}`;

            lastArtistText = cleanedArtistText;
        }
    }
}

updateElement();

setInterval(updateElement, 2000);

// .PageTitle
function createPageTitleElement(text) {
    const newElement = document.createElement('div');
    newElement.className = 'PageTitle';
    newElement.textContent = text;

    document.body.appendChild(newElement);

    return newElement;
}

function checkMetaTitle() {
    const metaTitleElement = document.querySelector('body > div > section > div > div > div > div > div > div > div > a > span.Meta_title__GGBnH');

    const defaultText = "Rick Astley - Never Gonna Give You Up (Official Music Video)";
    
    let text = defaultText;
    
    if (metaTitleElement) {
        const metaText = metaTitleElement.textContent.trim();
        if (metaText) {
            text = metaText;
        }
    }

    let pageTitleElement = document.querySelector('.PageTitle');
    
    if (pageTitleElement) {
        if (pageTitleElement.textContent !== text + " - YouTube") {
            pageTitleElement.textContent = text + " - YouTube";
        }
    } else {
        createPageTitleElement(text);
    }
}

const checkInterval = setInterval(checkMetaTitle, 2000);

// .LeftBScreen
const LeftBScreen = document.createElement('div');

LeftBScreen.classList.add('LeftBScreen');

document.body.appendChild(LeftBScreen);

// ymLogoColor
function applyBackgroundColor() {
    const elementWithColor = document.querySelector("[style*='--player-average-color-background']");

    if (elementWithColor) {
        const backgroundColor = getComputedStyle(elementWithColor).getPropertyValue('--player-average-color-background');

        const targetElements = document.querySelectorAll('.AccK_iF55jra4_OlFloI, .YjRa1ZjM_lXFlrfS7jcu, .qoEgTMlU0VM3i4p8LeMG');

        targetElements.forEach(element => {
            element.style.color = backgroundColor;
            element.style.filter = `invert(100%)`;
        });
    }

    setTimeout(applyBackgroundColor, 500);
}

applyBackgroundColor();

// .Rickroll Description
const rickrollDescription = document.createElement('div');

rickrollDescription.classList.add('rickrollDescription');

document.body.appendChild(rickrollDescription);

// Качество
function replaceQualityText() {
    const elements = document.querySelectorAll('.QualitySettingsContextMenu_item_option__SSxha');

    elements.forEach(element => {
        if (element.textContent.trim() === 'Превосходное') {
            element.textContent = '2160p';
        } else if (element.textContent.trim() === 'Оптимальное') {
            element.textContent = '720p';
        } else if (element.textContent.trim() === 'Экономичное') {
            element.textContent = '144p';
        }
    });
}

setInterval(replaceQualityText, 100);

// .subtitlesRedLine
const subtitlesRedLine = document.createElement('div');

subtitlesRedLine.classList.add('subtitlesRedLine');

document.body.appendChild(subtitlesRedLine);

// toggleSubtitlesRedLine
function toggleSubtitlesRedLine() {
    const closeButton = document.querySelector('.FullscreenPlayerDesktop_closeButton__MQ64s');
    const subtitlesRedLine = document.querySelector('.subtitlesRedLine');

    const shouldShowSubtitles = closeButton && getComputedStyle(closeButton).display !== 'none';

    if (subtitlesRedLine) {
        subtitlesRedLine.style.display = shouldShowSubtitles ? 'block' : 'none';
    }
}

setInterval(toggleSubtitlesRedLine, 100);

// Отключение тупого даблклика
function disableDoubleClick() {
    const elements = document.querySelectorAll('.PlayerBar_root__cXUnU');

    elements.forEach(element => {
        element.addEventListener('dblclick', function(event) {
            event.preventDefault();
            event.stopPropagation();
        }, true);
    });
}

setInterval(disableDoubleClick, 1000);

// Авто смена темы Яндекс Музыки на тёмную
setInterval(() => {
  const body = document.body;
  if (!body.classList.contains('ym-dark-theme') && !body.classList.contains('ym-light-theme')) {
    body.classList.add('ym-dark-theme');
  } else if (body.classList.contains('ym-light-theme')) {
    body.classList.replace('ym-light-theme', 'ym-dark-theme');
  }
}, 0);