<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>forward</title>
</head>
<body>
    <h4>[구구단 출력하기]</h4>
    <jsp:forward page="forward_data.jsp">
        <jsp:param name="num" value="5"/>
    </jsp:forward>
</body>
</html>
