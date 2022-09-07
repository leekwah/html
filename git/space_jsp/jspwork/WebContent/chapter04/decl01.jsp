<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>decl01</title>
</head>
<body>
<%!
    int value = 337;
    public int getInt() {
        return value;
    }
%>
<%
    out.println(getInt());
%>
</body>
</html>
