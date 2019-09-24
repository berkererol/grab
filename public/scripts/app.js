const createMenuItem = function (dish) {
  const $item = $("<article>")
    .addClass("dish")
    .append(
      $("<div>")
        .addClass("dish-visual")
        .append(
          $("<img>")
            .addClass("dish-photo")
            .attr("src", dish.photo_url)
        ),
      $("<div>")
        .addClass("dish-specs")
        .append(
          $("<span>")
            .addClass("dish-preptime")
            .text(dish.preparation_time),
          $("<span>")
            .addClass("dish-name")
            .text(dish.name),
          $("<span>")
            .addClass("dish-description")
            .text(dish.description),
          $("<span>")
            .addClass("dish-ingredients")
            .text(dish.ingredients)
        ),
      $("<div>")
        .addClass("order")
        .append(
          $("<span>")
          .addClass("dish-price")
          .text(`Price : ${dish.price} $` ),
          $("<div>")
            .addClass("box")
            .append(
              $("<select>")
                .append(
                  $("<option>")
                    .text("1"),
                  $("<option>")
                    .text("2"),
                  $("<option>")
                    .text("3"),
                  $("<option>")
                    .text("4"),
                  $("<option>")
                    .text("5")
                )
            ),
          $("<div>")
            .append(
              $("<button>")
                .addClass("addtocart-button")
                .text("Add to Cart")
            )
        )
    )
  return $item;
};


// const renderMenuItems = function (items) {
//   let renderItem = createMenuItem
//   $("#menu-items").prepend()
// }


$(() => {
  $.ajax({
    method: "GET",
    url: "/api/menu-items"
  }).done((obj) => {
    const arrayMenuItems = obj.menuItems;
    arrayMenuItems.forEach( dish => {
      let renderMenuItem = createMenuItem(dish);
      $("#menu-items").prepend(renderMenuItem);
    });

 });


});

