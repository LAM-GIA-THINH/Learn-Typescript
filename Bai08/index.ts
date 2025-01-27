// Thử thách: cố gắng tìm ra cách di chuyển kiểu đối tượng địa chỉ lồng nhau
// vào một định nghĩa kiểu riêng biệt. Khi thực hiện đúng, sẽ không còn
// lỗi màu đỏ trong trình soạn thảo

type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address: Address
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}