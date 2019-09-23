$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((obj) => {
    console.log(obj.users[0].name)
    for ( in users) {
    console.log(user)
      //$("<div>").text(user.name).appendTo($("test"));
    }
  });
  
/*   $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  }); */
});
