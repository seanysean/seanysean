window.addEventListener('scroll',e=>{
    //debugger;
    //const advancedMath = ((window.scrollY * 100) / window.innerHeight) / 100;
    if (window.scrollY < window.innerHeight) {
        const slope = -0.0056;
        const convertHeightToPercentage = 100 * window.scrollY / window.innerHeight;
        const op = Math.abs((convertHeightToPercentage * -0.01));
        console.log(convertHeightToPercentage);
        if (convertHeightToPercentage > 50) {
            document.querySelector('.section-1 .header').style.opacity = '0';
        } else {
            document.querySelector('.section-1 .header').style.opacity = '1';
        }
        document.querySelector('.section-2').style.background = `RGBa(255,255,255,${op})`;
    } else {

    }
});