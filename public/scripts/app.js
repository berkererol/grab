$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done(users => { });
  


  /* loginRedirect(); */
});


/* const loginRedirect = function() {
  $("#login-button").click(function() {
    window.location.href = "http://localhost:8080/menu";
  }); */
