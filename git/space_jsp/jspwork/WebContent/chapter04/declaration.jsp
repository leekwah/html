<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>declaration</title>
</head>
<body>
    <%!
        String str="Hello, Java Server Pages";
        public String getString() {
            return str;
        }
    %>
    <%
          out.println(getString());
    %>
</body>
</html>
