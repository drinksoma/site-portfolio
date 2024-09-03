// Находим все карточки с классом .case-card
document.querySelectorAll('.case-card').forEach(card => {
    const overlay = card.querySelector('.card-overlay');

    // Добавляем оверлей при касании карточки
    card.addEventListener('touchstart', () => {
        overlay.classList.add('active');
    });

    // Убираем оверлей, когда палец убран
    card.addEventListener('touchend', () => {
        overlay.classList.remove('active');
    });

    // Также убираем оверлей, если палец скользит за пределы карточки
    card.addEventListener('touchmove', (event) => {
        const touch = event.touches[0];
        const cardRect = card.getBoundingClientRect();
        if (
            touch.clientX < cardRect.left ||
            touch.clientX > cardRect.right ||
            touch.clientY < cardRect.top ||
            touch.clientY > cardRect.bottom
        ) {
            overlay.classList.remove('active');
        }
    });
});

    const typingText = document.getElementById('typingText');
    const startBlock = document.querySelector('.start_block');
    const header = document.getElementById('header');

    // Скрытые элементы
    const hiddenElements = document.querySelectorAll('.start_block .hidden-element');

    const text = typingText.textContent;
    typingText.textContent = ''; // Clear text

    let index = 0;
    const typingSpeed = 80; // Speed of typing in milliseconds

    function typeWriter() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Когда набор текста завершен, изменяем класс для высоты
            setTimeout(() => {
                startBlock.classList.add('toHome');
                // Используем setTimeout для небольшого ожидания перед показом элементов
                setTimeout(() => {
                    startBlock.classList.add('show-elements');
                    // Показываем header после завершения анимации
                    header.classList.add('show');
                }, 0); // Ждем полсекунды перед показом элементов
            }, 50); // Ждем 1 секунду перед скрытием startBlock
        }
    }

    typeWriter();
    

    const fadeElements = document.querySelectorAll('.aboutme_block');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementMidpoint = rect.top + (rect.height / 2);

            // Проверяем, достигла ли нижняя граница экрана середины элемента
            if (window.scrollY + windowHeight >= elementMidpoint) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    // Проверка видимости при загрузке страницы
    checkVisibility();

    // Проверка видимости при прокрутке страницы
    window.addEventListener('scroll', checkVisibility);
// Находим все карточки с классом .case-card
document.querySelectorAll('.case-card').forEach(function(card) {
    card.addEventListener('click', function() {
        var popupId = card.getAttribute('case-id'); // Получаем ID попапа из case-id
        var popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.add('open'); // Показываем соответствующий попап
            document.body.classList.add('no-scroll'); // Блокируем прокрутку основного контента
        }
    });
});

// Находим все кнопки закрытия попапов
document.querySelectorAll('.close-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var popup = button.closest('.popup');
        if (popup) {
            stopAllVideos();
            popup.scrollTop = 0;
            popup.classList.remove('open'); // Закрываем попап
            document.body.classList.remove('no-scroll'); // Восстанавливаем прокрутку основного контента// Сбрасываем положение скролла попапа
        }
    });
});

// Закрытие попапа при клике на затемнённую область
document.querySelectorAll('.popup').forEach(function(popup) {
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            stopAllVideos();
            popup.scrollTop = 0;
            popup.classList.remove('open'); // Закрываем попап
            document.body.classList.remove('no-scroll'); // Восстанавливаем прокрутку основного контента
             // Сбрасываем положение скролла попапа
        }
    });
});

// Функция для прокрутки к началу попапа
function scrollToTop(popup) {
    if (popup) {
        popup.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Добавляем обработчик события клика на кнопку "Прокрутка к началу"
document.querySelectorAll('#scrollToTopBtn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Находим открытый попап
        var openPopup = document.querySelector('.popup.open');
        if (openPopup) {
            scrollToTop(openPopup); // Прокручиваем к началу активного попапа
        }
    });
});

// Функция для остановки всех видео
function stopAllVideos() {
    document.querySelectorAll('.popup .popup-images video').forEach(function(video) {
        video.pause(); // Останавливаем воспроизведение
        video.currentTime = 0; // Сбрасываем видео на начало (опционально)
    });
}

document.getElementById('copyBtn').addEventListener('click', function() {
    // Текст, который нужно скопировать
    const email = 'vladlen.burtsev@inbox.ru';
    
    // Копируем текст в буфер обмена
    navigator.clipboard.writeText(email).then(function() {
        // Показываем попап
        const popup = document.getElementById('copy-popup');
        popup.style.left = `${copyBtn.offsetLeft + copyBtn.offsetWidth}px`;
        popup.style.top = `${copyBtn.offsetTop}px`;
        popup.classList.add('show');

        // Скрываем попап через 3 секунды
        setTimeout(function() {
            popup.classList.remove('show');
            
            // Ждем завершения перехода перед тем, как скрыть элемент
        }, 1500);
    });
});

document.getElementById('emailBtn').addEventListener('click', function() {
    // Адрес электронной почты
    const email = 'vladlen.burtsev@inbox.ru';
    
    // Формируем ссылку mailto
    const mailtoLink = `mailto:${email}`;
    
    // Открываем почтовое приложение
    window.location.href = mailtoLink;
});

