import './styles.css';
import menu from './menu.json'
import itemsTemplate from './templates/gallery.hbs'

const markup = itemsTemplate(menu)
console.log(markup)


const refs = {
    bodyRef: document.querySelector('body'),
    toggleRef: document.querySelector('#theme-switch-toggle'),
    menuRef: document.querySelector('.js-menu'),
}

const { bodyRef, toggleRef, menuRef } = refs;

toggleRef.addEventListener('change', handleThemeSwitch)
document.addEventListener('DOMContentLoaded', handlePageReload)

menuRef.insertAdjacentHTML('beforeend', markup)

function handleThemeSwitch() {
    bodyRef.classList.contains('dark-theme') ? bodyRef.classList.replace('dark-theme', 'light-theme') : bodyRef.classList.add('dark-theme') || bodyRef.classList.replace('light-theme', 'dark-theme')

    bodyRef.classList.contains('dark-theme') ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
}

function handlePageReload() {
    localStorage.getItem('theme') === 'dark' ? bodyRef.classList.add('dark-theme') : bodyRef.classList.add('light-theme')

    localStorage.getItem('theme') === 'dark' ? toggleRef.setAttribute('checked', 'true') : toggleRef.removeAttribute('checked')
}