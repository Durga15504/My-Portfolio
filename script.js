document.addEventListener("DOMContentLoaded", function () {

  /* Footer Year for all pages */
  const yearEls = ['year', 'year2', 'year3', 'year4', 'year5'];
  const currentYear = new Date().getFullYear();

  yearEls.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = currentYear;
    }
  });

  /* Mobile Navbar Toggle for all pages */
  function setupToggle(buttonId) {
    const btn = document.getElementById(buttonId);
    if (!btn) return;

    btn.addEventListener("click", () => {
      const nav = document.querySelector(".nav");
      if (nav) {
        nav.classList.toggle("nav-open");
      }
    });
  }

  ['navToggle', 'navToggle2', 'navToggle3', 'navToggle4', 'navToggle5']
    .forEach(setupToggle);


  /* CONTACT PAGE ONLY */

  if (typeof emailjs !== "undefined") {

    emailjs.init("e9BkRGN3mRwWjK3Pm");

    const form = document.getElementById("contactForm");
    const msg = document.getElementById("successMsg");

    if (form) {

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        msg.style.display = "block";
        msg.style.color = "#333";
        msg.innerText = "Sending message...";

        emailjs.send("service_durga", "template_bdl0dwb", {

          from_name: document.getElementById("name").value,
          from_email: document.getElementById("email").value,
          subject: document.getElementById("subject").value,
          message: document.getElementById("message").value

        })

        .then(function () {

          msg.style.color = "green";
          msg.innerText = "✅ Your message has been sent successfully!";
          form.reset();

          setTimeout(() => {
            msg.style.display = "none";
          }, 5000);

        })

        .catch(function (error) {

          console.log("EmailJS Error:", error);

          msg.style.color = "red";
          msg.innerText = "❌ Failed to send message. Please try again.";

        });

      });

    }

  }

});