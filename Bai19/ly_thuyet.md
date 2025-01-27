*   **TypeScript cho phép chỉ định kiểu dữ liệu trả về của một hàm một cách rõ ràng**. 
Điều này được thực hiện bằng cách đặt dấu hai chấm (`:`) sau danh sách tham số của hàm và 
trước dấu ngoặc nhọn mở đầu của thân hàm, sau đó là kiểu dữ liệu mong muốn, ví dụ `: User`.
*   **TypeScript có thể tự động suy luận kiểu trả về của hàm**, như trong ví dụ hàm `fetchUserDetails`. 
Tuy nhiên, việc khai báo kiểu trả về một cách tường minh vẫn hữu ích trong nhiều trường hợp.
*   **Một trong những lý do chính để khai báo tường minh kiểu trả về là để hỗ trợ việc tái cấu trúc code**. 
Nếu một nhà phát triển muốn thay đổi kiểu trả về của hàm mà không có khai báo tường minh, TypeScript sẽ không báo lỗi. 
Điều này có thể gây ra lỗi ở những nơi khác trong code sử dụng hàm này.
*   **Nếu kiểu trả về được khai báo rõ ràng, TypeScript sẽ cảnh báo nếu kiểu trả về của hàm không khớp**. 
Ví dụ, nếu hàm được khai báo trả về kiểu `User` nhưng thực tế lại trả về một `string`, TypeScript sẽ báo lỗi. 
Điều này giúp ngăn chặn các lỗi tiềm ẩn và đảm bảo tính nhất quán của code.
*   **Việc thay đổi kiểu trả về của hàm đã được khai báo tường minh buộc nhà phát triển phải thay đổi cả khai báo kiểu trả về**, điều này sẽ nhắc nhở họ phải kiểm tra và cập nhật những chỗ khác trong code sử dụng hàm đó.
*   **Việc khai báo tường minh kiểu trả về giúp code rõ ràng và dễ bảo trì hơn**.
