$(document).ready(function() {
  $(".plus").on("click", function(e) {
    e.preventDefault()
    var val1 = Number($("#num1").val())
    var val2 = Number($("#num2").val())

    $("#answer").val(val1 + val2)
  })
})

$(document).ready(function() {
  $(".minus").on("click", function(e) {
    e.preventDefault()
    var val1 = Number($("#num1").val())
    var val2 = Number($("#num2").val())

    $("#answer").val(val1 - val2)
  })
})

$(document).ready(function() {
  $(".multiply").on("click", function(e) {
    e.preventDefault()
    var val1 = Number($("#num1").val())
    var val2 = Number($("#num2").val())

    $("#answer").val(val1 * val2)
  })
})

$(document).ready(function() {
  $(".divide").on("click", function(e) {
    e.preventDefault()
    var val1 = Number($("#num1").val())
    var val2 = Number($("#num2").val())

    $("#answer").val(val1 / val2)
  })
})
