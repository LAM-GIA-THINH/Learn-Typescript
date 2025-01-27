type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<User>

let nextUserId = 1

const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" }
];

function updateUser(id: number, updates: UpdatedUser) {
    const foundUser = users.find(user => user.id === id)
    if (!foundUser) {
        console.error("User not found!")
        return
    }
    Object.assign(foundUser, updates)
}

// updateUser(1, { username: "new_john_doe" });
// updateUser(4, { role: "contributor" });
//Kiểu Omit
// Omit nhận vào một kiểu dữ liệu (type) và một chuỗi (hoặc hợp nhất các chuỗi) là tên thuộc tính, 
// sau đó trả về một kiểu dữ liệu mới với những thuộc tính đó bị loại bỏ.
// type Person = {
//     name: string;
//     age: number;
//     address: string;
//   };
  
//   type PersonWithoutAddress = Omit<Person, 'address'>;
  
//   const person: PersonWithoutAddress = {
//     name: 'John Doe',
//     age: 30,
//     // address: '123 Main St' // Lỗi vì address đã bị loại bỏ
//   };
  
//   console.log(person);
function addNewUser(newUser: Omit<User, "id" | "user">): User {
// Tạo một biến mới tên là `user`, thêm thuộc tính `id` vào nó
// và trải rộng (spread) tất cả các thuộc tính của đối tượng `newUser`. Hãy suy nghĩ
// về cách bạn nên đặt kiểu dữ liệu cho đối tượng `user` này.
// Đẩy đối tượng mới vào mảng `users`, và trả về đối tượng đó
// từ hàm ở cuối
    const user: User = {
        id: nextUserId++,
        ...newUser
    }
    users.push(user)
    return user
}

// example usage:
addNewUser({ username: "joe_schmoe", role: "member" })

console.log(users)