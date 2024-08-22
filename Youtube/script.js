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

setInterval(() => {
    const imgElements = document.querySelectorAll('img.qQ7GQU14EkggPBC6jdeS');

    // Проходим по каждому найденному элементу
    imgElements.forEach(imgElement => {
      // Заменяем размер в атрибуте src
      imgElement.src = imgElement.src.replace(/(100x100|200x200)/g, '1000x1000');
      
      // Заменяем размер в атрибуте srcset
      imgElement.srcset = imgElement.srcset.replace(/(100x100|200x200)/g, '1000x1000');
    });
}, 0);

// Функция для добавления элемента в body
function addDynamicLightElement() {
    // Создаем новый элемент div
    const dynamicLight = document.createElement('div');
    
    // Добавляем класс dynamicLight
    dynamicLight.classList.add('dynamicLight');
    
    // Добавляем новый элемент в конец body
    document.body.appendChild(dynamicLight);
}

// Вызов функции для добавления элемента
addDynamicLightElement();

// Функция для добавления элемента в body
function addbrowserScreenElement() {
    // Создаем новый элемент div
    const browserScreen = document.createElement('div');
    
    // Добавляем класс dynamicLight
    browserScreen.classList.add('browserScreen');
    
    // Добавляем новый элемент в конец body
    document.body.appendChild(browserScreen);
}

// Вызов функции для добавления элемента
addbrowserScreenElement();

// Создаем новый div элемент с id "floatingDiv"
const floatingDiv = document.createElement('div');
floatingDiv.id = 'floatingDiv'; // Присваиваем id для использования стилей из CSS

// Добавляем элемент в body
document.body.appendChild(floatingDiv);

// Переменная для хранения предыдущего текста
let previousText = '';

// Функция для обновления текста внутри div, если он изменился
function updateFloatingText() {
    // Находим элемент с классом SyncLyricsLine_root__r62BN
    const lyricsElement = document.querySelector('.SyncLyricsScroller_line_active__6lLvH');
    
    // Если элемент найден и в нем есть текст
    if (lyricsElement && lyricsElement.textContent.trim() !== '') {
        const currentText = lyricsElement.textContent.trim();
        
        // Проверяем, изменился ли текст
        if (currentText !== previousText) {
            // Обновляем текст внутри нашего div и сохраняем новое значение
            floatingDiv.textContent = currentText;
            previousText = currentText;
        }
        
        // Показываем элемент, если текст есть
        floatingDiv.style.display = 'block';
    } else {
        // Скрываем элемент, если текста нет или элемент не найден
        floatingDiv.style.display = 'none';
        previousText = ''; // Сбрасываем предыдущий текст
    }
}

// Запускаем проверку текста каждую секунду
setInterval(updateFloatingText, 100);

// Вызываем функцию сразу для первичного отображения
updateFloatingText();