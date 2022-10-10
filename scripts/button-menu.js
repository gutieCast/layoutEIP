const body = document.querySelector('body');
        const nav = document.querySelector('.nav-menu');
        const btn = document.querySelector('#menu-button-toggle');
    
    
    const navMobileToggle = () => {
        body.classList.toggle('nav-open');
        addMenu();
    }
    
    btn.addEventListener('click', event => {
        event.preventDefault;
        navMobileToggle();
    });

    
    const addMenu = () => {
        nav.appendChild(ul);
    }