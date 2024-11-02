const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

menuToggle.addEventListener('click', () => {
    if (menuToggle.classList.contains('active')) {
        menuToggle.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>'; // X icon
    } else {
        menuToggle.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
    }
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  // CONTACT US FORM
//   document.getElementById("contactForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let phone = document.getElementById("phone").value.trim();
//     let message = document.getElementById("message").value.trim();

//     if (name === "" || email === "" || phone === "" || message === "") {
//         alert("Please fill in all fields.");
//         return;
//     }

//     if (!validateEmail(email)) {
//         alert("Please enter a valid email address.");
//         return;
//     }

//     if (!validatePhone(phone)) {
//         alert("Please enter a valid phone number.");
//         return;
//     }

//     alert("Form submitted successfully!");
//     document.getElementById("contactForm").reset();
// });

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
}


 // FAQ Toggle Script
//  document.querySelectorAll('.faq-question').forEach(item => {
//     item.addEventListener('click', () => {
//         const answer = item.nextElementSibling;
//         answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
//     });
// });

 // JavaScript for toggling FAQ answers
 const faq = document.querySelectorAll('.faq-question')
 console.log(faq)
 faq.forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    }); 
  });

