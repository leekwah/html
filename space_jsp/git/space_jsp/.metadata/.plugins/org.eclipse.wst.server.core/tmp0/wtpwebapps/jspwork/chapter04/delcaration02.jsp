<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>delcaration02</title>
</head>
<body>
<%! int sum(int a, int b){
    return a+b;
}
%>
<!-- <% %>은 변수 선언은 되지만, 메소드 선언은 안된다. -->
<%
    int c= 3;
    out.println("2 + 3 = "+sum(2,3));
%>
</body>
</html>
