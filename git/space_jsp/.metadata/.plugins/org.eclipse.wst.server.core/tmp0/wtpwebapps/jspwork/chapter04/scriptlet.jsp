<%@ page import="java.util.Date" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>scriptlet</title>
</head>
<body>
    <%
      Date now = new java.util.Date();
      out.println("Today : " + now);
    %>
</body>
</html>
