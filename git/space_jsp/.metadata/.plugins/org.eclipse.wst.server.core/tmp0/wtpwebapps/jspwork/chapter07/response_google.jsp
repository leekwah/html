<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>response_google</title>
</head>
<body>
    <%
      response.sendRedirect("http://www.google.com");
    %>
    <%-- sendRedirect(String url)은 설정한 url로 강제 이동하는 것이다. --%>
</body>
</html>
