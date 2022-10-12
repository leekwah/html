<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>response03</title>
</head>
<body>
    <%
      response.sendError(404, "요청 페이지를 찾을 수 없습니다.");
    %>
</body>
</html>
