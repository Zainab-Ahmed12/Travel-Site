function submitForm() {
    let formData = {
        fname: document.forms["myForm"]["fname"].value,
        email: document.forms["myForm"]["email"].value,
        number: document.forms["myForm"]["number"].value,
        guests: document.forms["myForm"]["guests"].value,
        places: document.forms["myForm"]["places"].value,
        address: document.forms["myForm"]["address"].value,
        arrivalDate: document.forms["myForm"]["arrivalDate"].value,
        departureDate: document.forms["myForm"]["departureDate"].value,
    };
    console.log('FORM', formData);
  }



  //sticky header
  window.onscroll = function() {myFunction()};

  // Get the navbar
  var navbar = document.getElementById("navbar");

  var sticky = navbar.offsetTop;

  function myFunction() {
  if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      var scroll = window.pageYOffset;
      if (scroll > 50) {
          // green
          navbar.style.backgroundColor = 'rgba(0, 151, 20, 0.477)';
      }else if(scroll < 50){
          navbar.style.backgroundColor = 'transparent';
      }
      
  } else {
      navbar.classList.remove("sticky");
      
  }
  }