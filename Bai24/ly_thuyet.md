### **Utility Types trong TypeScript**
Utility Types là các kiểu dữ liệu được xây dựng sẵn trong TypeScript, giúp bạn thao tác với các kiểu khác một cách dễ dàng hơn. 
Một số utility types thông dụng:

#### a. **`Partial`**
`Partial<Type>` biến tất cả các thuộc tính trong kiểu `Type` thành tùy chọn (`optional`).

##### Ví dụ:
```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

const updateUser = (id: number, userData: Partial<User>): void => {
  console.log(`Updating user ${id}`, userData);
};

// Bạn chỉ cần cung cấp các thuộc tính cần thay đổi
updateUser(1, { name: "John Doe" }); // Không cần khai báo đủ các thuộc tính
```

#### b. **`Required`**
Ngược lại với `Partial`, `Required<Type>` biến tất cả các thuộc tính thành bắt buộc.

```typescript
type UserOptional = {
  id?: number;
  name?: string;
};

const user: Required<UserOptional> = {
  id: 1,
  name: "Alice",
}; // Bắt buộc phải khai báo tất cả thuộc tính
```

#### c. **`Readonly`**
`Readonly<Type>` biến tất cả các thuộc tính thành chỉ đọc, tức là không thể thay đổi sau khi khởi tạo.

```typescript
type User = {
  id: number;
  name: string;
};

const user: Readonly<User> = { id: 1, name: "Alice" };
// user.id = 2; // Lỗi: Cannot assign to 'id' because it is a read-only property
```

#### d. **`Pick`**
`Pick<Type, Keys>` chỉ chọn một vài thuộc tính từ kiểu `Type`.

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

type UserPreview = Pick<User, "id" | "name">;

const user: UserPreview = {
  id: 1,
  name: "Alice",
};
```

#### e. **`Omit`**
`Omit<Type, Keys>` loại bỏ một vài thuộc tính khỏi kiểu `Type`.

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

type UserWithoutEmail = Omit<User, "email">;

const user: UserWithoutEmail = {
  id: 1,
  name: "Alice",
};
```

---
