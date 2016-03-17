
$(document).ready(function(){
  console.log('This works, quack!');
  $('#people-form').on('submit', postPeople);

  $('#patronus-form').on('submit', postPatronus);

});

//PEOPLE FUNCTIONS AND CALLS
function postPeople(event){
  event.preventDefault();

  console.log('made it into postPeople function');

  var formData = {};
  console.log('form data', formData);

  var formArray = $('#people-form').serializeArray();
  $.each(formArray, function(index, element){
    formData[element.name] = element.value;
  });
  console.log('form data', formData);

  $.ajax({
    type:'POST',
    url: '/people',
    data: formData,
    success: getPeople
  });
  $('#people-form').trigger('reset');

}

function appendDom(peopleArray){
  console.log('inside appendDom after GET call', peopleArray);
  for(var i = 0; i < peopleArray.length; i++){
  $('.unassigned-people').append('<li>'+peopleArray[i].first_name +' '+peopleArray[i].last_name+'</li>')
  }
  appendSelectPeople(peopleArray);
}

function getPeople() {
  $.ajax({
    type: 'GET',
    url: '/people',
    success: appendDom
  });
}


function appendSelectPeople(peopleArray){
  for(var i = 0; i < peopleArray.length; i++){
  $('.select-person').append('<option>'+peopleArray[i].first_name +' '+peopleArray[i].last_name+'</option>');
}
}


// PATRONUSES FUNCTIONS AND CALLS
function postPatronus(event){
  event.preventDefault();

  console.log('made it into postPatronus function');

  var formData = {};
  console.log('form data', formData);

  var formArray = $('#patronus-form').serializeArray();
  $.each(formArray, function(index, element){
    formData[element.name] = element.value;
  });
  console.log('form data', formData);

  $.ajax({
    type:'POST',
    url: '/patronus',
    data: formData,
    success: getPatronus
  });
  $('#patronus-form').trigger('reset');

}

function appendDom(patronusArray){
  console.log('inside appendDom after GET call', patronusArray);
  for(var i = 0; i < patronusArray.length; i++){
  $('.unassigned-patronus').append('<li>'+patronusArray[i].first_name +' '+patronusArray[i].last_name+'</li>')
  }
  appendSelectPatronus(patronusArray);
}

function getPatronus() {
  $.ajax({
    type: 'GET',
    url: '/patronus',
    success: appendDom
  });
}
