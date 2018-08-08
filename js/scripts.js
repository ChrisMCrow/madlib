$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var animalInput= $("input#animal").val();
    var foodInput = $("input#food").val();
    var numberInput = $("input#number").val();
    var adjectiveInput = $("input#adjective").val();
    var nounPluralInput = $("inpute#nounPlural").val();
    var nounInput = $("input#noun").val();
    var partOfBodyInput = $("input#partOfBody").val()

    $(".animal").text(animalInput);
    $(".food").text(foodInput);
    $(".number").text(numberInput);
    $(".adjective").text(adjectiveInput);
    $(".nounplural").text(nounPluralInput);
    $(".noun").text(nounInput);
    $(".partofbody").text(partOfBodyInput);

    $("#story").show();

    event.preventDefault();
  })
})
