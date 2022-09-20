window.addEventListener('scroll',e=>{
    if (window.scrollY < window.innerHeight) {
        const slope = -0.0056;
        const convertHeightToPercentage = 100 * window.scrollY / window.innerHeight;
        const op = Math.abs((convertHeightToPercentage * -0.01));
        if (convertHeightToPercentage > 70) {
            document.querySelector('.section-1 .header').style.opacity = '0';
        } else {
            document.querySelector('.section-1 .header').style.opacity = '1';
        }
        document.querySelector('.section-2').style.background = `RGBa(255,255,255,${op})`;
    }
});

const root = document.querySelector(':root');
let time = 0;
setInterval(()=>{
    window.requestAnimationFrame(()=>{
        time++;
        const convertTimeToHue = Math.round(97 * Math.sin(time / 180) + 168);
        root.style.setProperty('--changingHue',convertTimeToHue);
    });
},200);

document.querySelectorAll('.project-container').forEach(project=>{
    project.addEventListener('mouseover',()=>{
        project.classList.add('open');
    });
    project.addEventListener('mouseleave',()=>{
        project.classList.remove('open');
    });
});
