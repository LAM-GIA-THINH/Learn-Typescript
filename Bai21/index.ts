// "Khi nào tôi nên sử dụng any?"

// "Tóm tắt: ĐỪNG 😏"

// "Một trường hợp sử dụng hợp lệ: khi bạn đang trong quá trình chuyển đổi code base từ JavaScript
//  sang TypeScript và không có thời gian ngay lập tức để viết tất cả các kiểu dữ liệu phức tạp, 
//  vì vậy bạn chỉ cần một cách để 'tạm thời làm việc với TypeScript'."
let value: any = 1
value.toUpperCase()
value = "Hi"
value.map()