<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>include</title>
</head>
<body>
    <%@include file="header.jsp"%>
    현재시간 : <%= java.util.Calendar.getInstance().getTime()%>
</body>
</html>
