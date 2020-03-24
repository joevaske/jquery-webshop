$("document").ready(function() {
  // Phone valid number format +41748987145
  jQuery.validator.addMethod(
    "phoneUS",
    function(phone_number, element) {
      phone_number = phone_number.replace(/\s+/g, "");
      return (
        this.optional(element) ||
        (phone_number.length > 9 && phone_number.match(/^\+[0-9]{11,15}$/))
      );
    },
    "Please specify a valid phone number"
  );
  $.validator.addMethod("alpha", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
  });

  $("form").validate({
    rules: {
      fname: {
        required: true,
        lettersonly: true,
        minlength: 2
      },
      lname: {
        required: true,
        lettersonly: true,
        minlength: 2
      },
      address: {
        required: true,
        minlength: 2
      },
      postcode: {
        required: true,
        number: true,
        minlength: 4
      },
      city: {
        required: true,
        alpha: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        phoneUS: true,
        minlength: 9
      }
    },
    messages: {
      fname: {
        required: "Please enter your name.",
        lettersonly: "Your name can contain only letter characters.",
        minlength: "Please insert more then 2 caracters"
      },
      lname: {
        required: "Please enter your last name.",
        lettersonly: "Your last name can contain only letter characters.",
        minlength: "Please insert more then 2 caracters"
      },

      address: {
        required: "Please enter your address.",
        minlength: "Please insert more then 2 caracters"
      },
      postcode: {
        required: "Please enter your POST/ZIP code.",
        number: "Your zip code can contain only numbers",
        minlength: "Please insert at least 4 numbers"
      },
      city: {
        required: "Please enter your City ot Town name.",
        alpha: "Your last name can contain only letter characters.",
        minlength: "Please insert more then 2 caracters"
      },
      email: {
        required: "Please enter an email address.",
        email: "Please enter a <em>valid</em>email address."
      },
      phone: {
        required: "Please enter an phone number.",
        phoneUS: "Phone number should be like +38766457001",
        minlength: "Please insert more then 9 caracters"
      }
    }
  });
});
