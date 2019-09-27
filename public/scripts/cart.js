const createMenuItem = function (dish) {
  const $item = $(`<article data-id="${dish.id}" >`)
    .data('restaurant-id', dish.restaurant_id)
    .data('food-category-id', dish.food_category_id)
    .addClass("dish")
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
            .text(`${dish.preparation_time} min. preparation time`),
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
            .text(`${dish.price} $`),
          $("<div>")
            .addClass("box")
            .append(
              $("<select>").addClass("menu-item-qty").attr('id', `${dish.id}`)
                .append(
                  $("<option value='1'>")
                    .text("1"),
                  $("<option value='2'>")
                    .text("2"),
                  $("<option value='3'>")
                    .text("3"),
                  $("<option value='4'>")
                    .text("4"),
                  $("<option value='5'>")
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
    );
  return $item;
};


$(document).ready(function () {
  $('#phoneNumber').mask('(000) 000-0000');
  let dishes;
  let totalCartValue = 0;
  let cart = {
    items: [],
    finalPrice: 0,
    comment: '',
    phoneNumber: ''
  };

  $.ajax({
    method: "GET",
    url: "/api/menu-items"
  }).done((obj) => {
    const arrayMenuItems = obj.menuItems;
    dishes = arrayMenuItems;

    arrayMenuItems.forEach(dish => {
      let renderMenuItem = createMenuItem(dish);
      $("#menu-items").prepend(renderMenuItem);
    });


    $('.addtocart-button').click(function (event) {

      const dishId = $(event.target).parent().parent().parent()[0].dataset.id;
      const currentClickedDish = dishes.filter((dish) => parseInt(dish.id) === parseInt(dishId))[0];
      const quatity = $(`#${parseInt(currentClickedDish.id)}`).val();
      $('#cart-item-display').prepend(`<div class="item">
      <div class="left-col-items">
          <span>${currentClickedDish.name}</span>
          <span>Quantity: ${quatity}</span>
      </div>
      <div class="right-col-items">
        <span>
          $${currentClickedDish.price}
        </span>
      </div>
      </div> `);
      lclStorage(currentClickedDish, quatity);
      getTotalCart(currentClickedDish.price, quatity);

    });
  });



  const getTotalCart = function (value, qty) {
    totalCartValue += value * qty;
    cart.finalPrice = totalCartValue;
    $('#total-amount').text(totalCartValue);
  };


  const lclStorage = function (data, quatity) {
    cart.items.push({ id: data.id, name: data.name, quatity: quatity, restaurantID: data.restaurant_id });
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  };

  const clearCart = function () {
    totalCartValue = 0;
    $('#total-amount').text(0);
    $('#cart-item-display').empty();
    cart = {
      items: [],
      finalPrice: 0,
      comment: '',
      phoneNumber: ''
    };
    $('#phoneNumber').val('');
    $('#comment').val('');
  };
  const messageSendToDB = function () {
    $('#placeOrder').click(function () {
      cart.phoneNumber = $('#phoneNumber').val();
      console.log($('#phoneNumber').cleanVal());
      cart.comment = $('#comment').val();
      $.ajax({
        method: "POST",
        url: "/api/orders",
        data: cart
      }).done((obj) => {
        console.log('clear');
        clearCart();
      })
        .fail(function () {
          console.log("error");
        });

    });

  };
  messageSendToDB();
  $('.reset').click(clearCart);

  // When user scrolls down 500px from the top of the document, scroll up button will appear.
  $(document).on("scroll", function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      $("#scroll-up-btn").css("display", "block");
    } else {
      $("#scroll-up-btn").css("display", "none");
    }
  });

  // When the scroll up button is pressed, the user is brought to the top of the document.
  $("#scroll-up-btn").on("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

});



