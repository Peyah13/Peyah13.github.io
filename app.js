mediumZoom('.profilpic',{
    margin:30,
    scrollOffset: 0,
    background: 'rgba(25, 18, 25, .9)'
});

mediumZoom('.preview',{
    margin:30,
    scrollOffset: 0,
    background: 'rgba(25, 18, 25, .9)'
});

const year = document.querySelector('#current-year')
year.innerHTML= new Date().getFullYear()







