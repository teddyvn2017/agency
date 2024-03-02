$(document).ready(function(){


        
        const burger = document.getElementById('humberger-icon');
        const navMenu = document.getElementById('nav-menu');
        
        // burger.addEventListener("click", showMenu, false); 
        
        // function showMenu() {
            //     navMenu.classList.toggle('show-menu');
            //     burger.classList.toggle('humberger-open');
            // }
            
            if (burger) {
                burger.addEventListener('click', () => {
                    // console.log('show menu');
                    navMenu.classList.toggle('show-menu');
                    burger.classList.toggle('humberger-open');
                })
            }
            
            
            
    });
// });
// const burger = document.getElementById('humberger-icon');

// document.querySelector('.humberger__icon').addEventListener('click', function() {
//     console.log('Button clicked!');
//     burger.classList.toggle('humberger-open');
//   });

