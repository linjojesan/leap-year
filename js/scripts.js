//frontend
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("#input").val());
    var result = isLeapYear(year);

    if (!isNaN(year)) {
      if (result) {
        $("#result").text(year + " was/is/will be a leap year");
      } else {
        $("#result").text(year + " was/is/will not be a leap year");
      }
    } else {
      $("#result").text('Please enter a number');
    }



  });
});

//backend
var isLeapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }

}
