<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    Cookie info = new Cookie("testCookie", "FirstCookie");
    info.setMaxAge(365*24*60*60);
    info.setPath("/");
    response.addCookie(info);
%>
<html>
<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
</head>
<body>
<h2>쿠키를 처음 설정하는 중입니다.....</h2>
</body>
</html>