const tabList = document.querySelector('.section-tabs');
const tabs = Array.from(tabList.querySelectorAll('a'));
const panels = Array.from(document.querySelectorAll('.tab-panel'));

tabList.setAttribute('role', 'tablist');
tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panels[index].id);
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
    panels[index].tabIndex = 0;
});

function showTab() {
    const selected = tabs.find(tab => tab.hash === window.location.hash) || tabs[0];
    tabs.forEach((tab, index) => {
        const active = tab === selected;
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
        panels[index].hidden = !active;
    });
}

function activateTab(tab) {
    if (window.location.hash !== tab.hash) {
        window.history.pushState(null, '', tab.hash);
    }
    showTab();
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', event => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        activateTab(tab);
    });
    tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (event.key === ' ') next = index;
        if (next === undefined) return;
        event.preventDefault();
        tabs[next].focus();
        activateTab(tabs[next]);
    });
});

window.addEventListener('hashchange', showTab);
window.addEventListener('popstate', showTab);
showTab();
