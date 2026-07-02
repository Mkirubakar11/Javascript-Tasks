function* couponGenerator() {
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}

let coupon = couponGenerator();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);