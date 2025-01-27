const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]
/**
 * Thử thách nhỏ: gọi hàm `getLastItem` (và console.log giá trị trả về)
 * trên từng mảng trong 3 mảng ở trên. Di chuột qua các giá trị khác nhau để xem
 * Intellisense nói gì về kiểu dữ liệu của từng giá trị.
 */
/**
 * Thử thách: tìm cách khai báo rõ ràng kiểu trả về
 * của hàm!
 */

function getLastItem<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1]
}

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))