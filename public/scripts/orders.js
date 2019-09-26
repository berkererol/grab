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


