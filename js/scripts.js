$(document).ready(function() {
  $("form#survey").submit(function(event) {
   event.preventDefault();
   var name = $("#name").val();
   var title = $("#title").val();
   var zombieStatus = $("input:radio[name=zombieStatus]:checked").val();
   var dob = $("#born").val();
alert(zombieStatus)
alert(dob)
alert(name)
alert(title)
});
});
