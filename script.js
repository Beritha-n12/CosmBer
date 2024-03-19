document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll effect for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth"
        });
      });
    });
  
    // Add hover effect on product items
    const productItems = document.querySelectorAll(".product");
    productItems.forEach(item => {
      item.addEventListener("mouseenter", function() {
        this.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
      });
  
      item.addEventListener("mouseleave", function() {
        this.style.boxShadow = "none";
      });
    });
  
    // Animations for paragraphs and headings
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(paragraph => {
      paragraph.classList.add("animate__animated", "animate__fadeInUp");
    });
  
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach(heading => {
      heading.classList.add("animate__animated", "animate__fadeInDown");
    });
  
    // Add event listener for window resize
    window.addEventListener("resize", function() {
      // Example of responsiveness: Change header color based on window width
      const header = document.querySelector("header");
      if (window.innerWidth < 600) {
        header.style.backgroundColor = "darkblue";
      } else {
        header.style.backgroundColor = "darkgreen";
      }
    });
  });

// Function to handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  // Create an object to store the data
  var formData = {
    name: name,
    email: email,
    message: message
  };
  
  // Convert the object to a JSON string
  var formDataJSON = JSON.stringify(formData);
  
  // Store the data in local storage
  localStorage.setItem("formData", formDataJSON);
  
  // Display a message to the user
  document.getElementById("responseMessage").innerHTML = "Message sent successfully!";
  
  // Reset the form
  document.getElementById("contactForm").reset();
});

  