<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>response01_process</title>
</head>
<body>
  <%
      request.setCharacterEncoding("utf-8");
      String userid = request.getParameter("id");
      String password = request.getParameter("passswd");

      if (userid.equals("aaa") && password.equals("1234")) {
        response.sendRedirect("response01_success.jsp");
      } else {
        response.sendRedirect("response01_failed.jsp");
      }
  %>
</body>
</html>
