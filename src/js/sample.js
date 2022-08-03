// leftMenuCountent
const leftMenu = document.querySelector('.leftMenu');

const javaScript = `javascript.html" class="a">JavaScript</a>`,
      java = `java.html" class="a">Java</a>`,
      python = `python.html" class="a">Python</a>`,
      php = `php.html" class="a">PHP</a>`,
      cPlusPlus = `c_c-plyus.html" class="a">C/C++</a>`,
      cSharp = `c_sharp.html" class="a">C#</a>`,
      webDesigne =`web-design.html" class="a">Веб-дизайн</a>`,
      qA =`qa.html" class="a">QA</a>`,
      htmlCss =`html_css.html" class="a">HTML/CSS</a>`;


    if (leftMenu.classList.contains('leftMenuDeep1')) {
        leftMenu.innerHTML = `
        <h3>Навигация</h3>
            <a href="others/${javaScript}
            <a href="others/${java}
            <a href="others/${python}
            <a href="others/${php}
            <a href="others/${cPlusPlus}
            <a href="others/${cSharp}
            <a href="others/${webDesigne}
            <a href="others/${qA}
            <a href="others/${htmlCss}
        `;

    } else if (leftMenu.classList.contains('leftMenuDeep2')) {
        leftMenu.innerHTML = `
        <h3>Навигация</h3>
            <a href="${javaScript}
            <a href="${java}
            <a href="${python}
            <a href="${php}
            <a href="${cPlusPlus}
            <a href="${cSharp}
            <a href="${webDesigne}
            <a href="${qA}
            <a href="${htmlCss}
        `;
        
    } else if (leftMenu.classList.contains('leftMenuDeep3')) {
        leftMenu.innerHTML = `
        <h3>Навигация</h3>
            <a href="../../${javaScript}
            <a href="../../${java}
            <a href="../../${python}
            <a href="../../${php}
            <a href="../../${cPlusPlus}
            <a href="../../${cSharp}
            <a href="../../${webDesigne}
            <a href="../../${qA}
            <a href="../../${htmlCss}
        `;
    }

// Присвоение ноера, для каждого елемента таблицы
const listItems = document.querySelectorAll("td a");

listItems.forEach((item, i) => {
    item.innerHTML = `${i + 1}. ${item.innerHTML}`;
});

// Шаблоны для списков
const orderList = document.querySelectorAll("li");

const unOrderList = document.querySelector("ul"),
      compilationList = document.querySelector(".compilation__list");

function checkUnOrderList () {
    if (unOrderList && !compilationList) {
        orderList[0].innerHTML = `${'<b>Название книги: </b>'} ${orderList[0].innerHTML}`;
        orderList[1].innerHTML = `${'<b>Автор: </b>'} ${orderList[1].innerHTML}`;
        orderList[2].innerHTML = `${'<b>Издание: </b>'} ${orderList[2].innerHTML} г.`;
        orderList[3].innerHTML = `${'<b>Размер: </b>'} ${orderList[3].innerHTML} MB`;
    }   
}
checkUnOrderList ();

// Бургер 
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    leftMenu.classList.toggle('active');
});

// Огриничени длинны строки описания елементов подборки 
if (document.querySelector('.compilations') || document.querySelector('.all')) {

    const compilations = document.querySelector('.compilations'),
          pCompilations = compilations.querySelectorAll('p b'),
          allList = document.querySelector('.all'),
          pAllList = allList.querySelectorAll('p b');

    pCompilations.forEach (item => {
        if (item.innerHTML.length > 35) {
            item.innerHTML = `${item.innerHTML.substring(0, 35)}...`;
        }   
    });

    pAllList.forEach (item => {
        if (item.innerHTML.length > 35) {
            item.innerHTML = `${item.innerHTML.substring(0, 35)}...`;
        }   
    });
}

// Tabs 
const tabs = document.querySelectorAll('.tabBlock'),
tabsContent = document.querySelectorAll('[data-tab_content]'),
tabsParent = document.querySelector('.wrapperTab');

function hideTabsContent () {
    tabsContent.forEach (item => {
        item.classList.add('hide');
        item.classList.remove('tabBlock_active');
    });
    tabs.forEach (item => {
        item.classList.remove('tabBlock_active');
    });
}

function showTabsContent (i = 0) {
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabBlock_active');
}

if (document.querySelector('.compilations')) {
    hideTabsContent();
    showTabsContent();
    
    tabsParent.addEventListener('click', (e) => {
        if (e.target.classList.contains('tabBlock')) {
            tabs.forEach ((item, i) => {
                if (e.target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
}

// scroll-top
if (document.querySelector('.scroll-top')) {

    const scrollTop = document.querySelector('.scroll-top');
    
    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
    
    window.addEventListener('scroll', () => {
        
        if (document.documentElement.scrollTop <= 300) {
            scrollTop.style.display = 'block';
            scrollTop.style.transform = 'translateX(150%)';
            scrollTop.style.transition = '0.2s';
        } else {
            scrollTop.style.display = 'block';
            scrollTop.style.transform = 'translateX(0px)';
            scrollTop.style.transition = '0.2s';
        }
    });
}

// futter

const footer = document.querySelector('footer');

footer.innerHTML = 
    `
    <div class="footer-section">
    <a href="https://adwasar.github.io/libr_it/others/about.html">О проекте</a>
    <a href="mailto:Adwasarik@gmail.com">E-mail автора</a>
    </div>
    `;
    









