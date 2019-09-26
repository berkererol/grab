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

  $row.append($orderNumber, $customerName, $phoneNumber, $timePlaced, $button);
  return $row;
};

