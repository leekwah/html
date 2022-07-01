var price = Number(prompt("구매 금액은 얼마입니까?"));

    if (price < 20000) {
      document.write("현재금액 " + price + "원 입니다. - '주문금액이 부족합니다.'")
    } else if (price< 50000) {
      var price = price+2500;
      document.write("현재금액 " + price + "원 입니다. - '배송비 2500원이 추가됩니다.'")
    } else {
      document.write(("현재금액 " + price + "원 입니다. - '무료배송입니다.'")) 
    }