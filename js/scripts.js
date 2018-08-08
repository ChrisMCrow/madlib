$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var animalInput= $("input#animal").val();
    var foodInput = $("input#food").val();
    var numberInput = $("input#number").val();
    var adjectiveInput = $("input#adjective").val();
    var nounPluralInput = $("input#nounplural").val();
    var nounInput = $("input#noun").val();
    var partOfBodyInput = $("input#partofbody").val()

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
