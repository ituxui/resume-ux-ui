// Глобальные переменные для хранения позиции прокрутки
let lastScrollX = 0;
let lastScrollY = 0;

const keys = {37: 1, 38: 1, 39: 1, 40: 1};
function preventDefault(e: Event) {
    const modal = document.querySelector('.modal');
    const target = e.target as Node;
    if (modal && modal.contains(target)) {
        return; // Разрешаем прокрутку внутри модального окна
    }
    e.preventDefault();
}

function handleScroll(event: Event) {
  const modal = document.querySelector('.modal');
  const target = event.target as Node;

  // Проверяем, находится ли событие внутри модального окна
  if (modal && modal.contains(target)) {
    return; // Разрешаем прокрутку внутри модального окна
  }

  // Если прокрутка происходит на основном экране, возвращаем ее к предыдущей позиции
    window.scrollTo({
    top: lastScrollY,
    left: lastScrollX,
    behavior: 'smooth'
    });
}


type KeyCodes = keyof typeof keys;

function preventDefaultForScrollKeys(e: { keyCode: KeyCodes }) {
  if (keys[e.keyCode]) {
    preventDefault(e as unknown as Event);
    return false;
  }
}



// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  // @ts-expect-error some error
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch(e: any) { console.log('supportsPassive', e)}

const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
export function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile

  // @ts-expect-error some error
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);

  // Сохраняем текущую позицию прокрутки перед блокировкой
  lastScrollX = window.scrollX;
  lastScrollY = window.scrollY;

  // Блокируем прокрутку основного экрана
  window.onscroll = handleScroll;
}
// call this to Enable
export function enableScroll() {

  window.onscroll=function(){};

  window.removeEventListener('DOMMouseScroll', preventDefault, false);

  // @ts-expect-error some error
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  // @ts-expect-error some error
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  // @ts-expect-error some error
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
