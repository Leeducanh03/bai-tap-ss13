let str = prompt("Nhập tên con vật muốn dịch sang Tiếng Việt:");
let eng = ["cat", "dog", "bear", "bee", "monkey"];
let viet = ["mèo", "chó", "gấu", "ong", "khỉ"];
let kq = [];
let flag = false;
for (i = 0; i < eng.length; i++) {
    if (str == eng[i]) {
        kq.push(viet[i]);
        flag = true;
    }
}
if (flag == false) {
    kq.push("Không có dữ liệu");
}
console.log(kq.join(""));

