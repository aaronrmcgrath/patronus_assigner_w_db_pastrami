
$(document).ready(function(){
  console.log('This works, quack!');
  $('#people-form').on('submit', postPeople);





});


function postPeople(event){
  event.preventDefault();
  var formData = {};
  var formArray = $('form').serializeArray();
  $.each(formArray, function(index, element){
  formData[element.name] = element.value;

  $.ajax({
    type:'POST',
    url: '/people',
    data: formData,
    success: appendDom
    });
  });
}

function appendDom(person){
  console.log('Submit works!');
}
