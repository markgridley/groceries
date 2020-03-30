$(document).ready(function() {
  $("form#groceries").submit(function(event) {
  event.preventDefault();
  
  var groceries = ["list1", "list2", "list3", "list4", "list5"];
  var inputtedGroceries = [];
  var inputtedGroceries2 =inputtedGroceries.map(function(inputtedGroceries) {
    return inputtedGroceries.toUpperCase
  });
  
  groceries.forEach(function(grocery) {
    var userInput = $("input#" + grocery).val();
    inputtedGroceries.push(userInput)
    inputtedGroceries2.push(inputtedGroceries)
  });
  
  inputtedGroceries.sort();
  // inputtedGroceries2.toUpperCase();
    
    inputtedGroceries.forEach(function(inputtedGrocery) {
      $('.output').append("<li>" + inputtedGrocery + "</li>")
    });

    
      // $("." + grocery).text(userInput);
      // // groceries.sort(function(a, b){return b-a});
      // // $('userInput').toUpperCase();
      // $(".output").append("<li>" + userInput + "</li>")

  });
});