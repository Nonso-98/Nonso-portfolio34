 
     
   let menuicon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  
  if (menuicon && navbar) {
      menuicon.onclick = () => {
          menuicon.classList.toggle('bx-x');
          navbar.classList.toggle('active');
      };
  }
  


 let sections = document.querySelectorAll('saction');
 let navlinks = document.querySelector('header nav a');

 window.onscroll= () => {
    sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height =sec.offsetHeight;
    let id = sec.getAttribute('id');


    if(top >= offset && top < offset + height ){
      navlinks.forEach(links => {
       links.classList.remove('active');
        // document.querySelector('header nav a[href*=' + id + ']').classlist.add('active'); 
      });
      let activeLink = document.querySelector(`header nav a[href*='${id}']`);
      if (activeLink) {
          activeLink.classList.add('active');
      }


    };

    });
     
      let header = document. querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);

          menuicon.classList.remove('bx-x');
          navbar.classList.remove ('active'); 
    };

     ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });
  


    ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .skill-box, .contact form', { origin:'bottom' }); 
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

    const typed =new Typed('.muitiple-text',{
       strings:['Full-Stack Software Engineer Developer','Biomedical Laboratory scientist',
       'Set Dressing and Prop-Master ', 'up coming actor' ],
       typeSpeed: 100,
      typeSpeed: 100,
       backDelay: 1000,
       loop: true
    });
      
    
