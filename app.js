const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTrans() {
    // button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currBtn = document.querySelectorAll('.active-btn');
            currBtn[0].className = currBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // sections active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {

            // animate buttons
            /*
            sectBtns.forEach((btn) => {
                console.log("remove active");
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
            */

            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            // add active to element
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // toggle theme 
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })

}

PageTrans();