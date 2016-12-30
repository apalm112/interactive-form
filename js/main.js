/* Treehouse Project-03: Build an Interactive Form */

// TODO: When JavaScript is switched off or unavailable, all the form fields that need to be filled out should be visible. For example, the “Your Job Role” text field should be visible on the page when JavaScript is switched off.

/* Global Variables */
var getActivitiesFieldset = document.getElementsByClassName('activities');


// DONE: Set focus on first text field on page load w/ jQuery.
function setInitialFocus() {
  var $setPageLoadFocus = $('#name');
  $setPageLoadFocus.focus();
}

function createOtherJobTextarea() {
  // DONE: A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.  Give the field an id of “other-title,” and add the placeholder text of "Your Job Role" to the field.
  // TODO: Fix error thrown to console when else clause conditional runs while there is No input text to remove.
  // TODO: Fix margins on newTextArea to fit better onto the form.
  let getSelectJobRole = document.getElementById('title');
  let newTextArea = document.createElement('input');
  newTextArea.setAttribute('id', 'other-title');
  newTextArea.setAttribute('placeholder', 'Your Job Role');
  $('#title').change(function(){
    if (getSelectJobRole.value === 'other') {
        getSelectJobRole.after(newTextArea);
    } else {
        getSelectJobRole.nextElementSibling.remove();
    }
  });
}


const tShirtInfo = () => {
  // DONE: For the T-Shirt color menu:  only display the color options that match the design selected in the "Design" menu.
  const getDesignSelect = document.getElementById('design');
  // const $getDesignSelect = $('design');

  const getColorSelect = document.getElementById('color');
  // const $getColorSelect = $('color');

  $('#design').change(function() {
    // TODO: Change color select option value when attribute is disabled to corresponding color restrictions, i.e.--if tomato is selected & then theme is switched to js puns, automagically make the color select option change.
    if (getDesignSelect.value === 'js puns') {
      //  then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
      for (let idx=3; idx<6; idx++) {
        getColorSelect[idx].style.display = 'none';
      }
      for (let idx=0; idx<3; idx++) {
        getColorSelect[idx].style.display = 'block';
      }
    } else if (getDesignSelect.value === 'heart js') {
        // then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
        for (let idx=0; idx<3; idx++) {
          getColorSelect[idx].style.display = 'none';
        }
        for (let idx=3; idx<6; idx++) {
          getColorSelect[idx].style.display = 'block';
        }
    } else {
      for (let idx=0; idx<getColorSelect.length; idx++) {
        getColorSelect[idx].style.display = 'block';
      }
    }
  });
};

const registerForActivities = () => {
  // DONE: Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox.
  // DONE: And visually indicate that the workshop in the competing time slot isn't available.  When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
  // getActivitiesFieldset[0].childNodes[5].before('TIME CONFLICT!');

  // var getActivitiesFieldset = document.getElementsByClassName('activities');

  $('.activities').change(function() {
    if (getActivitiesFieldset[0].childNodes[5].children[0].checked) {
      // If A checked, disable C:
      getActivitiesFieldset[0].childNodes[9].children[0].disabled = true;
      getActivitiesFieldset[0].childNodes[9].style.backgroundColor = 'rgba(255,30,30, .8)';
      addStrikeThrough(9);
    }
    if (getActivitiesFieldset[0].childNodes[9].children[0].checked) {
      // If C checked, disable A:
      addStrikeThrough(5);
      getActivitiesFieldset[0].childNodes[5].children[0].disabled = true;
      getActivitiesFieldset[0].childNodes[5].style.backgroundColor = 'rgba(255,30,30, .8)';
    }
    if (getActivitiesFieldset[0].childNodes[7].children[0].checked) {
      // If B checked, disable D:
      getActivitiesFieldset[0].childNodes[11].children[0].disabled = true;
      getActivitiesFieldset[0].childNodes[11].style.backgroundColor = 'rgba(255,30,30, .8)';
      addStrikeThrough(11);
    }
    if (getActivitiesFieldset[0].childNodes[11].children[0].checked) {
      // If D checked, disable B:
      getActivitiesFieldset[0].childNodes[7].children[0].disabled = true;
      getActivitiesFieldset[0].childNodes[7].style.backgroundColor = 'rgba(255,30,30, .8)';
      addStrikeThrough(7);
    }
    // Reverse disabled = true;
    if (!getActivitiesFieldset[0].childNodes[5].children[0].checked) {
      // If A unchecked, enable C:
      getActivitiesFieldset[0].childNodes[9].children[0].disabled = false;
      getActivitiesFieldset[0].childNodes[9].style.backgroundColor = '#85b5ca';

    }
    if (!getActivitiesFieldset[0].childNodes[9].children[0].checked) {
      // If C unchecked, enable A:
      getActivitiesFieldset[0].childNodes[5].children[0].disabled = false;
      getActivitiesFieldset[0].childNodes[5].style.backgroundColor = '#85b5ca';

    }
    if (!getActivitiesFieldset[0].childNodes[7].children[0].checked) {
      // If B unchecked, enable D:
      getActivitiesFieldset[0].childNodes[11].children[0].disabled = false;
      getActivitiesFieldset[0].childNodes[11].style.backgroundColor = '#85b5ca';

    }
    if (!getActivitiesFieldset[0].childNodes[11].children[0].checked) {
      // If D unchecked, enable B:
      getActivitiesFieldset[0].childNodes[7].children[0].disabled = false;
      getActivitiesFieldset[0].childNodes[7].style.backgroundColor = '#85b5ca';
    }
});
  // TODO: As a user selects activities, a running total should display below the list of checkboxes.
  // For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.
  // Append a label to this fieldtest & update its innerText w/ total.

  // TODO: Refactor function w/ jQuery to seperate CSS from JS.
}

function addStrikeThrough(num) {
  // Function adds class='strike-through' to inputs to implement CSS rule change.
  // Sets variable to traverse & manipulate labels & inputs.
  // var getActivitiesFieldset = document.getElementsByClassName('activities');
  // Create new span to hold innerText to implent a CSS rule.
  var newSpan = document.createElement('span');
  newSpan.innerText = getActivitiesFieldset[0].childNodes[num].innerText;
  // Variable is a copy of the input, to replace it
  // add class='strike-through' to it.
  var jsLibs = getActivitiesFieldset[0].childNodes[num].firstChild;
  jsLibs.setAttribute('class', 'strike-through');
  // Remove the innerText now that a copy is in the span.
  getActivitiesFieldset[0].childNodes[num].innerText = '';
  // Append the span.
  getActivitiesFieldset[0].childNodes[num].append(newSpan);
  // Prepend the input.
  getActivitiesFieldset[0].childNodes[num].prepend(jsLibs);
}






const paymentInfoSection = () => {
  // TODO: Display payment sections based on the payment option chosen in the select menu
  // The "Credit Card" payment option should be selected by default, display the #credit-card div, and hide the "Paypal" and "Bitcoin information.
  // When a user selects the "PayPal" payment option, the Paypal information should display, and the credit card and “Bitcoin” information should be hidden.
  // When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.
  //
}


const formValidation = () => {
  // TODO:
  // If any of the following validation errors exist, prevent the user from submitting the form:
  // Name field can't be blank
  // Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
  // Must select at least one checkbox under the "Register for Activities" section of the form.
  // If the selected payment option is "Credit Card," make sure the user has supplied a credit card number, a zip code, and a 3 number CVV value before the form can be submitted.
  // Credit card field should only accept a number between 13 and 16 digits
  // The zipcode field should accept a 5-digit number
  // The CVV should only accept a number that is exactly 3 digits long

}

const formValidationMessages = () => {
  // TODO: Provide some kind of indication when there’s a validation error. The field’s borders could turn red, for example, or a message could appear near the field or at the top of the form
  // There should be an error indication for the name field, email field, “Register for Activities” checkboxes, credit card number, zip code, and CVV

}


// STRETCH GOALS:
const hideColorOptions = () => {
  // TODO: Hide the "Color" label and select menu until a T-Shirt design is selected from the "Design" menu.

}


const errorMessageInfo = () => {
// TODO: Program at least one of your error messages so that more information is provided depending on the error. For example, if the user hasn’t entered a credit card number and the field is completely blank, the error message reads “Please enter a credit card number.” If the field isn’t empty but contains only 10 numbers, the error message reads “Please enter a number that is at least 16 digits long.”

}


const realTimeValidationError = () => {
// TODO:Program your form so that it provides a real-time validation error message for at least one text input field. Rather than providing an error message on submit, your form should check for errors and display messages as the user begins typing inside a text field. For example, if the user enters an invalid email address, the error appears as the user begins to type, and disappears as soon as the user has entered a complete and correctly formatted email address.

}


$(document).ready(function() {
  setInitialFocus();
  createOtherJobTextarea();
  tShirtInfo();
  registerForActivities();
});
