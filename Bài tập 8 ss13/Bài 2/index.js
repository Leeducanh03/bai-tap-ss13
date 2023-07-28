let string = "245468";
let arr = [];
for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) % 2 == 0 && string.charAt(i + 1) % 2 == 0) {
        arr.push(string.charAt(i));
    } else {
        let temp = "";
        for (let j = i + 1; j < string.length; j++) {
            temp += string.charAt(j);
            if (string.charAt(j) % 2 == 0 && string.charAt(j + i) % 2 == 0) {
                i = j;
                break;
            }
        }
        arr.push(temp);
    }
}
console.log(arr);