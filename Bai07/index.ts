/**
* Thử thách: Tạo một kiểu đối tượng Pizza. Nó phải bao gồm một thuộc tính `name`
* và một thuộc tính `price`.
*/
type Pizza = {
    name: string
    price: number
}

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]
/**
* Thử thách: dạy TS rằng pizzaObj được cho là một kiểu Pizza.
* Sau đó, giống như trước, hãy xem qua mã để xem có bất kỳ cảnh báo TS mới nào không
* cần xử lý (😉), và khắc phục các sự cố đó
*/
let cashInRegister = 100
let nextOrderId = 1
const orderQueue = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)