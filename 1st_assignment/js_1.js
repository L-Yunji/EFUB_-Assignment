const order = {
    주문번호 : 20210401,
    주문자id : "efubFront",
    주문자이름: "이펍",
    배송주소 : "서울특별시 서대문구 이화여대길 52" 
};

for (let key in order) {
    console.log(`${key}:${order[key]}`);
}