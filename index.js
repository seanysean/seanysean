window.addEventListener('scroll',e=>{
    //debugger;
    //const advancedMath = ((window.scrollY * 100) / window.innerHeight) / 100;
    if (window.scrollY < window.innerHeight) {
        const slope = -0.0056;
        const convertHeightToPercentage = 100 * window.scrollY / window.innerHeight;
        const op = Math.abs((convertHeightToPercentage * -0.01));
        console.log(convertHeightToPercentage);
        if (convertHeightToPercentage > 70) {
            document.querySelector('.section-1 .header').style.opacity = '0';
        } else {
            document.querySelector('.section-1 .header').style.opacity = '1';
        }
        document.querySelector('.section-2').style.background = `RGBa(255,255,255,${op})`;
    } else {

    }
});

const hueOffset = 38,
      sectionOne = document.querySelector('.section-1'),
      root = document.querySelector(':root');
let hue = 156;
setInterval(()=>{
    window.requestAnimationFrame(()=>{
        hue++;
        root.style.setProperty('--changingHue',hue);
        //sectionOne.style.backgroundImage = `linear-gradient(hsl(${hue}, 79%, 74%),hsl(${hue + hueOffset}, 38%, 65%))`;
    });
},200);
