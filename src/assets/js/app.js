import gsap from 'gsap';
const bar = document.querySelector('.loading__bar--inner');
const counter_num = document.querySelector('.loading__counter--number');
let c = 0;

// Pour montrer la barre de chargement en %
let barInterval = setInterval(() => {
    // On incrémente la barre de 1%:
    bar.style.width = c + '%';
    // On incrémente le compteur de 1%:
    counter_num.innerHTML = c + '%';
    c++;
    // Si la barre est à 100%, on arrête l'interval:
    if (c === 101) {
        clearInterval(barInterval);
        // On cache la barre de chargement sur la droite:
        gsap.to ('.loading__bar', {
            duration: 5,
            rotation: "90deg",
            left: "1000%",
        });
        gsap.to ('.loading__text, .loading__counter', {
            duration: 0.5,
            opacity:0,
        });
        gsap.to ('.loading__box', {
            duration: 1,
            height: "500px",
            borderRadius: "50%",
        });
        gsap.to ('.loading__svg', {
            duration: 5,
            opacity: 1,
            rotation: "360deg",
            
        });
        gsap.to ('.loading__box', {
            delay: 2,
            border: "none",
        });
        gsap.to ('.loading', {
            delay: 1,
            duration: 2,
            zIndex: 1,
            background: "linear-gradient(#3f87a6,#f69d3c )",
        });
        gsap.to ('.loading', {
            delay: 2,
            duration: 2,
            //zindex: 1,
            background: "linear-gradient(#3200ab,#4e0384 )",
        });
        gsap.to ('.loading', {
            delay: 4,
            duration: 2,
            //zindex: 1,
            background: "linear-gradient(#1b1b1b,#3200ab)",
        });
        gsap.to ('.loading', {
            delay: 4,
            duration: 2,
            background: "black",
            display: "none",
            onComplete: function() {
                document.querySelector('.loading').style.zIndex = 0;
            }
        });
        
        
    }

    }, 20);


    
    
