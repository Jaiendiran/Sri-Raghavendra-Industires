// To prevent last load
// if ('scrollRestoration' in history) {
//   history.scrollRestoration = 'manual';
// }

// Google Maps Integration
function initMap() {
    let uluru = {lat: 13.125279, lng: 79.997621};

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });

    let marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
}

// back to top button
let btn = $('#backToTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

// Form Vlaidation

function validateForm() {
  // email validation
  if (isEmpty(document.getElementById('data_4').value.trim())) {
    alert('Email is required!');
    return false;
  }

  if (!validateEmail(document.getElementById('data_4').value.trim())) {
    alert('Email must be a valid email address!');
    return false;
  }

  // Phone numbr validation
  if (isEmpty(document.getElementById('data_5').value.trim())) {
    alert('Phone number is required!');
    return false;
  }

  // city validation
  if (isEmpty(document.getElementById('data_7').value.trim())) {
    alert('City is required!');
    return false;
  }

  return true;
}

function isEmpty(str) { return (str.length === 0 || !str.trim()); }
function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
  return isEmpty(email) || re.test(email);
}

// Modal

