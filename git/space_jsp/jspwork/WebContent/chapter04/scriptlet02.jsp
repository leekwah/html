<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>scriptlet02</title>
</head>
<body>
<center><h3>[스크립트릿(scriptlet)에 관한 예제]</h3></center>
<hr>
<%
    for (int i = 0; i < 5; i++) {
        //out.println("안녕하세요!");
        //out.print("반가워!");
        %>
        out객체 안쓰고 넣는 방법이다.<br>
<%
    }
%>

</body>
</html>
