/* eslint-disable func-style */
/* eslint-disable no-undef */
// Generate Orders Table
// const moment = require('moment');
// moment().format();
// // moment(orderObj.created_at).format('MM/DD, h:mm A')

function generateTableRow(orderObj) {
  const $row = $("<tr>").addClass("table-white");
  const $orderNumber = $("<td>").addClass("order_id").append($("<a>").text(orderObj.id).attr("href", `http://localhost:8080/api/orders/${orderObj.id}`));
  const $customerName = $("<td>").text(orderObj.name);
  const $phoneNumber = $("<td>").addClass("phone_number").text(orderObj.phone_number);
  const $timePlaced = $("<td>").text(moment(orderObj.created_at).format('MM/DD, h:mm A'));
  const $button = $("<button>").addClass("button").text("Send SMS");
  buttonMessage($button[0],orderObj.phone_number);
  $row.append($orderNumber, $customerName, $phoneNumber, $timePlaced, $button);
  return $row;
}

const buttonMessage = (btn, phoneNumber) => {
  $(btn).on('click', () => {
    $.ajax({
      method: "POST",
      url: "/api/message",
      data: {
        phoneNumber: `+1${phoneNumber}`,
        message:'Your order is ready for pickup!!'
      }
    }).done((data) => {
      console.log(data);
    });
  });
};

// // Render the new rows in the table
// function renderRows(orderData) {
//   $.each(orderData, function(index, value) {
//     $("tbody").append(generateTableRow(value))
//   })
// };


// //Load the orders from database
// function loadOrders() {

//     });
//   })
// };


$(() => {

  $.ajax({
    method: "GET",
    url: "/api/orders"
  }).done((orderData) => {
    const arrayOrders = orderData.placedOrders;
    arrayOrders.forEach(order => {
      let orderItem = generateTableRow(order);
      $("#new-orders").prepend(orderItem);
    });
  });
});









// $(document).ready(function () {

//   loadOrders();

//   $('tbody').on('click', 'button', function (event) {
//     let phone_number = $(this).parent().find('.phone_number').text();
//     let order_id = $(this).parent().find('.order_id').text();

//     event.preventDefault();

//     $.ajax({
//       method: 'PUT',
//       url: 'http://localhost:8080/restaurants/1/orders/ready',
//       data: { "phone_number": phone_number, "order_id": order_id }
//     })
//       .done(function (data) {
//         console.log('sent');
//       });

//     $(this).parent().remove();
//   });


//   $('.reload').on('click', function (event) {
//     const orderIdCells = $(this).parents().find('.order_id');
//     const order_ids = [];

//     $.each(orderIdCells, function (index, value) {
//       order_ids.push(Number($(value).text()));
//     })

//     $.ajax({
//       method: 'PUT',
//       url: 'http://localhost:8080/restaurants/1/orders/refresh',
//       data: { "order_id": order_ids }
//     })
//       .done(function (data) {
//         renderRows(data);
//         console.log('data', data);
//         console.log('sent');
//       });
//   });

//   setInterval(function () {

//     $.ajax({
//       method: 'PUT',
//       url: 'http://localhost:8080/restaurants/1/orders/refresh',
//       data: { "order_id": order_ids }
//     })
//       .done(function (data) {
//         renderRows(data);
//         console.log('data', data);
//         console.log('sent');
//       });
//   }, 300000);

// });
