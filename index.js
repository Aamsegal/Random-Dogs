'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
    $('.dog-Image-Container').append(
        `<img src="${responseJson.message}" class="dog-Image" alt="Pupper Image">`
    )
  /*display the results section
  $('.results').removeClass('hidden');*/
}

function watchForm() {
  $('form').submit(event => {
    $("#dog-Image-Container").html("");
    event.preventDefault();
    let dogNumber = $('#dog-Number').val();
    for (let i = 0; i < dogNumber; i++) {
        getDogImage();
    }
  });
}

$(function() {
  console.log('App loaded! Gimme dem puppers');
  watchForm();
});