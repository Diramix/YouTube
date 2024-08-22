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
}, 0);

// dynamicLight
setInterval(() => {
    const imgElements = document.querySelectorAll('[class*="PlayerBarDesktop_cover"]');
    let imgBackground = "";

    imgElements.forEach(img => {
        if (img.src && img.src.includes('/1000x1000')) {
            imgBackground = img.src.replace('/1000x1000', '/1000x1000');
        }
    });

    if (imgBackground) {
        const targetElement = document.querySelector('.dynamicLight');
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
}, 0);

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