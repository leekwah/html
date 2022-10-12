<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Cookie</title>
</head>
<body>
<%
  Cookie[] cookies = request.getCookies();
  cookies[0].setMaxAge(0);
  response.addCookie(cookies[0]);

  response.sendRedirect("cookie.jsp");
%>
</body>
</html>
