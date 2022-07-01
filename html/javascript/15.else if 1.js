var month = prompt("현재는 몇 월입니까?", "0");

    if (month >= 9 && month <= 11) {
      document.write("독서의 계절이네요!")
    } else if (month >= 6 && month <= 8)  {
      document.write("여행하기 좋은 여름이네요!")
    } else if (month >= 3 && month <= 5)  {
      document.write("햇살 따뜻한 봄이네요!")
    } else {
      document.write("겨울이네요!")
    }