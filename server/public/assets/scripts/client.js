
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
    success: getPeople
  });
  $('#people-form').trigger('reset');

}

function appendDom(peopleArray){
  console.log('inside appendDom after GET call', peopleArray);
  for(var i = 0; i < peopleArray.length; i++){
  $('.unassigned-people').append('<li>'+peopleArray[i].first_name +' '+peopleArray[i].last_name+'</li>')
  }
  appendSelectPeople();
}

function getPeople() {
  $.ajax({
    type: 'GET',
    url: '/people',
    success: appendDom
  });
}


function appendSelectPeople (){
  
}
