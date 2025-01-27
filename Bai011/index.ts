type Person = {
    name: string
    age: number
    isStudent: boolean
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
}

/**
* Thử thách: tạo một mảng các đối tượng người và
* nhập thủ công dưới dạng một mảng các kiểu Người
*/

let people: Person[] = [person1, person2]
