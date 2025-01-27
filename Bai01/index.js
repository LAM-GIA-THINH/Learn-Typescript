const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

// const cashInRegister = 100
// const orderQueue = []

/**
 * Thử thách: Thêm một hàm tiện ích "addNewPizza" nhận một đối tượng pizza
 * và thêm nó vào thực đơn.
 */

// function addNewPizza(pizzaObj) {
//     menu.push(pizzaObj)
// }

/**
 * Thử thách: Viết một hàm tiện ích khác, "placeOrder", hàm này nhận tham số là tên pizza và:
 * 1. Tìm đối tượng pizza tương ứng trong thực đơn.
 * 2. Thêm doanh thu vào quỹ tiền mặt (cashInRegister).
 * 3. Thêm một "đối tượng đơn hàng" mới vào hàng chờ đơn hàng (orderQueue)
 *    (ví dụ: { pizza: selectedPizzaObjectFromStep1, status: "ordered" }).
 * 4. Trả về đối tượng đơn hàng mới (phòng khi cần sử dụng sau này).
 */

// function placeOrder(pizzaName) {
//     const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
//     cashInRegister += selectedPizza.price
//     const newOrder = { pizza: selectedPizza, status: "ordered" }
//     orderQueue.push(newOrder)
//     return newOrder
// }

/**
 * Thử thách: Viết một hàm tiện ích khác, "completeOrder", hàm này nhận tham số là orderId,
 * tìm đơn hàng tương ứng trong hàng chờ đơn hàng (orderQueue), và đánh dấu trạng thái của nó là "completed".
 * Để cẩn thận hơn, hãy trả về đơn hàng được tìm thấy từ hàm này.
 * 
 * Lưu ý: Bạn cần đảm bảo rằng chúng ta đang thêm ID vào các đơn hàng khi tạo đơn hàng mới.
 * Bạn có thể sử dụng một biến toàn cục `nextOrderId` và tăng giá trị của nó mỗi lần tạo đơn hàng mới
 * để mô phỏng việc quản lý ID thực sự do cơ sở dữ liệu thực hiện.
 * Bạn có thể gặp 1 số lỗi nhưng đừng lo
 */

const cashInRegister = 100
const nextOrderId = 1
const orderQueue = []

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)