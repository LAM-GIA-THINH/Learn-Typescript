type UserRole = "guest" | "member" | "admin"

type User = {
    username: string
    role: UserRole
}

const users: User[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" }
];
// Như đã đề cập trong các ý chính trước đó, việc khai báo tường minh kiểu trả về 
// (ví dụ : User trong hàm fetchUserDetails) giúp TypeScript kiểm tra tính nhất quán của code. 
// Nếu chúng ta cố gắng trả về một giá trị không đúng kiểu (ví dụ một string thay vì một User), 
// TypeScript sẽ báo lỗi. Điều này giúp chúng ta tránh được các lỗi tiềm ẩn và làm cho code dễ bảo trì hơn.
function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    //return user.username
    return user
}
