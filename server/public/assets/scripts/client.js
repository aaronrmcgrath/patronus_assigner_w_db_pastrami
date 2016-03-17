
$(document).ready(function(){
  console.log('This works, quack!');
  $('#people-form').on('submit', postPeople);





});


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
    success: appendDom
  });
}

function appendDom(person){

function handleServerResponse(response) {
  $.ajax({
    type: 'GET',
    url: '/people',
    success: appendDom
  });
  console.log('Server says: ', response);
}
