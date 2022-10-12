<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>expr01</title>
</head>
<body>
    <center><h3>[표현식(expression)에 관한 예제]</h3></center>
<hr>
<%!
    String str = "안녕하세요!";
    int a = 5, b = -5;
    public int abs(int n) {
        if (n < 0) {
            n = -n;
        }
        return n;
    }
%>
    <br>
    표현식으로 바로 변수 or 메소드를 출력
    <br>
<%= str %>


<br>
<%= a %>의 절대값은 => <%= abs(a) %>
    <br>
<%= b %>의 절대값은 => <%= abs(b) %>
</body>
</html>
