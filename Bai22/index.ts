type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Order[] = []

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
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}
/**
 * Thử thách (phần 1): thêm kiểu dữ liệu trả về cho hàm getPizzaDetail.
 * 
 * LƯU Ý: rất có thể bạn sẽ nhận được một cảnh báo lớn từ TypeScript khi làm điều này 😅
 * Đừng lo lắng, chúng ta sẽ giải quyết cảnh báo này trong phần tiếp theo!
 */
/**
 * Thử thách (phần 2): khai báo rõ ràng kiểu dữ liệu trả về của hàm này
 * để cho TypeScript biết rằng giá trị trả về có thể là một đối tượng Pizza
 * hoặc undefined.
 */
export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}

// addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 })
// addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 })
// addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 })

// placeOrder("Chicken Bacon Ranch")
// placeOrder("Pepperoni")
// completeOrder(1)
// placeOrder("Anchovy")
// placeOrder("Veggie")
// completeOrder(2)

// console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)