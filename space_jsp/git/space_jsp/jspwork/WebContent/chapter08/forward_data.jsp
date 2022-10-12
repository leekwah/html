<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>forward_data</title>
</head>
<body>
    <%
        int num = Integer.parseInt(request.getParameter("num"));
        for(int i=1;i<=9;i++)
        {
            out.println(num+"*"+i+"="+num*i+"<br>");
        }
    %>
</body>
</html>
