<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>response02</title>
</head>
<body>
    <p>이 페이지는 5초마다 새로고침 됩니다.</p>
    <%
        response.setIntHeader("Refresh", 5);
    %>
    <p><%=new java.util.Date()%></p>
</body>
</html>
