export const preloader = () => {
    const body = document.querySelector('body')
    // main contents
    const header = document.createElement('header')
          header.classList.add('w-full', 'h-auto', 'bg-red-800')
    const navbar = document.createElement('navbar')
          navbar.classList.add('w-full', 'h-24', 'bg-gray-400', 'flex', 'justify-between')
    const main = document.createElement('main')
    const card = document.createElement('div')
          card.classList.add('w-96', 'h-full', 'bg-blue-500')
    const p = document.createElement('p')
    const circles = document.createElement('div')
    navbar.append()
    header.append(navbar, card)
    body.append(header, main)
    
}