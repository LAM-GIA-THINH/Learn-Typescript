*   Khi tạo các kiểu đối tượng trong Typescript, bạn có thể định nghĩa một số thuộc tính là **tùy chọn**. 
Ví dụ, bạn có thể đặt thuộc tính `address` của kiểu `person` là tùy chọn. Để thực hiện điều này, 
bạn sử dụng dấu chấm hỏi (`?`) sau tên thuộc tính trong định nghĩa kiểu.

*   Việc sử dụng các thuộc tính tùy chọn mang lại **tính linh hoạt**, nhưng đồng thời làm **giảm tính an toàn kiểu**.

*   Khi một thuộc tính là tùy chọn, bạn cần phải **cẩn thận** khi sử dụng nó trong các hàm. 
Ví dụ, nếu bạn có một hàm `displayInfo` lấy một đối tượng `person` làm tham số, 
và bạn cố gắng truy cập thuộc tính `address.street` của nó, bạn có thể gặp lỗi nếu thuộc tính `address` không được xác định.

*   Có thể sử dụng **optional chaining** (ví dụ, `person.address?.street`) để tránh các lỗi khi truy cập các thuộc tính tùy chọn. 
Tuy nhiên, điều này không giải quyết được hoàn toàn vấn đề vì nó có thể dẫn đến kết quả không mong muốn như "Joe lives at undefined" thay vì một thông báo lỗi.

*   Việc thêm các thuộc tính tùy chọn là **hợp lệ** và **thường được sử dụng** trong Typescript, nhưng bạn cần phải cân nhắc **sự đánh đổi** giữa tính linh hoạt và tính an toàn kiểu.
