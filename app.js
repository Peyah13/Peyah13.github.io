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

// Swap image source between static and gif on hover
document.querySelectorAll('.logo-gif').forEach(img => {
  const pngSrc = img.src;
  const gifSrc = pngSrc.replace('.png', '.gif'); // Convert .png to .gif
  
  img.dataset.gifSrc = gifSrc;
  img.dataset.pngSrc = pngSrc;
  
  // Start with static png image
  img.src = pngSrc;
  
  // On hover, show animated gif
  img.parentElement.addEventListener('mouseenter', () => {
    img.src = img.dataset.gifSrc;
  });
  
  // On hover out, show static png
  img.parentElement.addEventListener('mouseleave', () => {
    img.src = img.dataset.pngSrc;
  });
});







