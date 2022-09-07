<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>delcaration03</title>
</head>
<body>
    <%!

        String makeItLower(String data) {
            return data.toLowerCase();
        }
    %>
    <%
        String data = "HELLO WORLD";
        out.println(makeItLower(data));
    %>
</body>
</html>
