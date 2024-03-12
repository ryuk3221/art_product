//меню табы
const menuTabs = document.querySelectorAll('.drawer-menu__tab-item');
//табы в выпадающем списке
const subMenuTabs = document.querySelectorAll('.drawer-menu__tabcontent-item');
//Кнопка открытия меню
const menuBtn = document.querySelector('.header-mid__btn');
//окно с меню
const menu = document.querySelector('.drawer-menu');


let isOpenMobileMenu = false;

//Функционал выпадающих списков 1-ого уровня
menuTabs.forEach(tab => {
  tab.onmouseover = (event) => {
    const { target } = event;
    const parent = target.closest('.drawer-menu__tab-item');
    //Извлекаю id, далее по этому id буду отображать соответствующий выпадающий список
    const id = parent.id;
    //Удаляю активный класс у существующего элемента с активным классом
    if (document.querySelector('.drawer-menu__tab-item--active')) {
      document.querySelector('.drawer-menu__tab-item--active')
        .classList.remove('drawer-menu__tab-item--active');
    }
    //и добавляю активный класс на тот элемент на который навели
    target.closest('.drawer-menu__tab-item').classList.add('drawer-menu__tab-item--active');

    //скрываю уже открытый выпадающий список
    if (document.querySelector('.drawer-menu__tabcontent--open')) {
      document.querySelector('.drawer-menu__tabcontent--open')
        .classList.remove('drawer-menu__tabcontent--open');
    }

    //Нахожу нужный выпадающий список и отображаю 
    document.querySelector(`[data-tabContent="${id}"]`).classList.add('drawer-menu__tabcontent--open');

    //Скрываю выпадающий список 2-ого уровня
    if (document.querySelector('.sub-tabcontent--open')) {
      document.querySelector('.sub-tabcontent--open')
        .classList.remove('sub-tabcontent--open');
    }

    //Удаляю активный класс у существующего элемента с активным классом
    if (document.querySelector('.drawer-menu__tabcontent-item--active')) {
      document.querySelector('.drawer-menu__tabcontent-item--active')
        .classList.remove('drawer-menu__tabcontent-item--active');
    }
  };
});

//Функционал выпадающих списков 2-ого уровня
subMenuTabs.forEach(tab => {
  tab.onmouseover = (event) => {
    const { target } = event;
    const parent = target.closest('.drawer-menu__tabcontent-item');
    let id;

    if (parent.id) {
      id = parent.id;
    }

    //Удаляю активный класс у существующего элемента с активным классом
    if (document.querySelector('.drawer-menu__tabcontent-item--active')) {
      document.querySelector('.drawer-menu__tabcontent-item--active')
        .classList.remove('drawer-menu__tabcontent-item--active');
    }

    //и добавляю активный класс на тот элемент на который навели
    parent.classList.add('drawer-menu__tabcontent-item--active');

    if (document.querySelector('.sub-tabcontent--open')) {
      document.querySelector('.sub-tabcontent--open')
        .classList.remove('sub-tabcontent--open');
    }

    document.querySelector(`[data-subTabContent="${id}"]`)
      .classList.add('sub-tabcontent--open');
  };
});

menuBtn.onclick = (event) => {
  menu.classList.toggle('drawer-menu--open');
  menuBtn.classList.toggle('header-mid__btn--active');
  if (menu.classList.contains('drawer-menu--open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};



//Sticky header

let lastScroll = 0;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset; 

window.addEventListener('scroll', () => {
  
  if (scrollPosition() >= 168) {
    let top = scrollPosition();
      if (top > lastScroll && !header.classList.contains('header--hide')) {
        //scroll down
        header.classList.add('header--hide');
      }
      else if (top < lastScroll && header.classList.contains('header--hide')) {
        header.classList.remove('header--hide');
        //scroll up
      }
    
    lastScroll = scrollPosition();
  }
});

//кнопка для открытия каталога мобильнйо версии
const mobileBtnCatalog = document.querySelector('.header-mid__btn--mobile');
const mobileTabsWrapper = document.querySelector('.drawer-mobile__tabs-wrapper');
const mobileTabsBtn = document.querySelector('.drawer-mobile__close'); 

mobileBtnCatalog.onclick = (event) => {
  mobileTabsWrapper.classList.add('drawer-mobile__tabs-wrapper--visible');
  if (mobileTabsWrapper.classList.contains('drawer-mobile__tabs-wrapper--visible')) {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  }
};

mobileTabsBtn.onclick = (event) => {
  mobileTabsWrapper.classList.remove('drawer-mobile__tabs-wrapper--visible');
};

const mobileTabsItems = document.querySelectorAll('.drawer-mobile__tab');


const openTabContent = (event) => {
  const { target } = event;
  const id = target.closest('.drawer-mobile__tab').dataset.tabmobile;
  const currentTabContent = document.querySelector(`[data-tabMobileContent="${id}"]`);
  currentTabContent.classList.add('drawer-menu-content-open');
  document.body.style.overflow = 'hidden';
  document.body.style.touchAction = 'none';
};

mobileTabsItems.forEach(el => {
  el.onclick = openTabContent;
});

const tabContentBtn = document.querySelectorAll('.drawer-mobile__tabs-content-btn');

tabContentBtn.forEach(btn => {
  btn.onclick = (event) => {
    document.querySelector('.drawer-menu-content-open').classList.remove('drawer-menu-content-open');
  };
});

const mobileSubTabs = document.querySelectorAll('.drawer-mobile__tabs-content-item');

mobileSubTabs.forEach(el => {
  el.onclick = (event) => {
    const { target } = event;
    const id = target.closest('.drawer-mobile__tabs-content-item').dataset.subtabmobile;
    const currentTabContent = document.querySelector(`[data-drawerlinks="${id}"]`);
    currentTabContent.classList.add('drawer-menu-subcontent-open');
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  };
});



document.querySelector('.drawer-mobile__close').onclick = () => {
  document.body.style.overflow = 'scroll';
  document.body.style.touchAction = 'auto';
  document.querySelector('.drawer-mobile__tabs-wrapper--visible').classList.remove('drawer-mobile__tabs-wrapper--visible');
  document.querySelector('.drawer-menu-content-open').classList.remove('drawer-menu-content-open');
};

document.querySelector('.drawer-mobile__tabs-content-close').onclick = () => {
  document.body.style.overflow = 'scroll';
  document.body.style.touchAction = 'auto';
  document.querySelector('.drawer-mobile__tabs-wrapper--visible').classList.remove('drawer-mobile__tabs-wrapper--visible');
  document.querySelector('.drawer-menu-content-open').classList.remove('drawer-menu-content-open');
};


document.querySelectorAll('.tabs-subcontent-head__btn-back').forEach(el => {
  el.onclick = (event) => {
    document.querySelector('.drawer-menu-subcontent-open').classList.remove('drawer-menu-subcontent-open');
  };
});


document.querySelector('.tabs-subcontent-head__btn-close').onclick = (event) => {
  document.body.style.overflow = 'scroll';
  document.body.style.touchAction = 'auto';
  document.querySelector('.drawer-mobile__tabs-wrapper--visible').classList.remove('drawer-mobile__tabs-wrapper--visible');
  document.querySelector('.drawer-menu-content-open').classList.remove('drawer-menu-content-open');
  document.querySelector('.drawer-menu-subcontent-open').classList.remove('drawer-menu-subcontent-open');
};



//Выдвижное меню, первый уровень
const drawerMenuSlide1 = document.querySelector('.drawer-mobile__tabs-wrapper');
//Выдвижное меню, первый уровень
const drawerMenuSlide2 = document.querySelector('.drawer-mobile__tabs-content-wrapper');
//Выдвижное меню, первый уровень
const drawerMenuSlide3 = document.querySelector('.drawer-mobile__tabs-subcontent');


let x1;
let y1;
let x2;
let y2;
let deltaX;
let deltaY;

drawerMenuSlide1.addEventListener('touchstart', (event) => {
  const touches = event.touches[0];
  x1 = touches.clientX;
  y1 = touches.clientY;
});


drawerMenuSlide1.addEventListener('touchend', (event) => {
  const touches = event.changedTouches[0];
  x2 = touches.clientX;
  y2 = touches.clientY;
  deltaX = x2 - x1;
  deltaY = y2 - y1;

  if (deltaX > 0 && deltaX > 50) {
    const slide = event.target.closest('.drawer-mobile__tabs-wrapper--visible');
    slide.classList.remove('drawer-mobile__tabs-wrapper--visible');
    document.body.style.overflow = 'scroll';
    document.body.style.touchAction = 'auto';
  }

  x1 = null;
  y1 = null;
  x2 = null;
  y2 = null;
});

drawerMenuSlide2.addEventListener('touchstart', (event) => {
  const touches = event.touches[0];
  x1 = touches.clientX;
  y1 = touches.clientY;
});

drawerMenuSlide2.addEventListener('touchend', (event) => {
  const touches = event.changedTouches[0];
  x2 = touches.clientX;
  y2 = touches.clientY;
  deltaX = x2 - x1;
  deltaY = y2 - y1;

  if (deltaX > 0 && deltaX > 50) {
    const slide = event.target.closest('.drawer-menu-content-open');
    slide.classList.remove('drawer-menu-content-open');
  }

  x1 = null;
  y1 = null;
  x2 = null;
  y2 = null;
});

drawerMenuSlide3 .addEventListener('touchstart', (event) => {
  const touches = event.touches[0];
  x1 = touches.clientX;
  y1 = touches.clientY;
});

drawerMenuSlide3 .addEventListener('touchend', (event) => {
  const touches = event.changedTouches[0];
  x2 = touches.clientX;
  y2 = touches.clientY;
  deltaX = x2 - x1;
  deltaY = y2 - y1;

  if (deltaX > 0 && deltaX > 50) {
    const slide = event.target.closest('.drawer-menu-subcontent-open');
    slide.classList.remove('drawer-menu-subcontent-open');
  }

  x1 = null;
  y1 = null;
  x2 = null;
  y2 = null;
});

//Мобильное меню навгации
const menuNav = document.querySelector('.mobile-nav');

const menuNavBtn = document.querySelector('.header-mid__mobile-menu-btn');

menuNavBtn.onclick = () => {
  menuNav.classList.add('mobile-nav--open');
};

document.querySelector('.mobile-nav__close').onclick = () => {
  menuNav.classList.remove('mobile-nav--open');
};


const search = document.querySelector('.search');
const searchBtn = document.querySelector('.header-mid__search-btn');


searchBtn.onclick = (event) => {
  search.classList.toggle('search--open');
  console.log(true);
}


document.querySelector('.search-close').onclick = () => {
  search.classList.toggle('search--open');
};


window.addEventListener('click', (event) => {
  if (!event.target.closest('.search')) {
    document.querySelector('.search').style.display = 'none';
  }
});