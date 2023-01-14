let arr = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16, Infinity];

let finite = arr.forEach((num) => {
    console.log(isFinite(num));
    if (isFinite(num)) {
        console.log(`Angka ${num} is NOT Infinite`);
    } else {
        console.log(`Angka ${num} is Infinite`);
    }
})