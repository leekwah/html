<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<head>
  <title>Implicit Objects</title>
</head>
<body>
  <%
    String value = request.getQueryString();
    out.println("전송된 요청 파라미터 : " + value);
  %>
</body>
</html>