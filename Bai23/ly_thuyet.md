**`void` trong TypeScript**
`void` được sử dụng để chỉ ra rằng một hàm không trả về giá trị nào. 
Nó thường dùng trong các hàm mà mục đích chính là thực thi một hành động, chẳng hạn như ghi log hoặc cập nhật trạng thái.

#### Ví dụ:
```typescript
function logMessage(message: string): void {
  console.log(message);
}

// Hàm này không trả về giá trị
logMessage("Hello, TypeScript!"); // Kết quả: Hello, TypeScript!
```

- Nếu bạn cố gắng gán một giá trị trả về từ một hàm `void`, TypeScript sẽ báo lỗi:
```typescript
const result = logMessage("This is a message"); // Lỗi: Type 'void' is not assignable to type 'string'.
```
