$(document).ready(function() {
  var divCount =  $('div[class="counter"]:contains(\'<= 48\')');
  var ofOlde = [];
  for (var i = 0; i < divCount.length; i++) {
  ofOlde.push(divCount);
    console.log(ofOlde);
}
  if(divCount.length === 0) {
    console.log("There are no users with this many posts!");
  }
});
