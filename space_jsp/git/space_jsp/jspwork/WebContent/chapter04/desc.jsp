<%--
  Created by IntelliJ IDEA.
  User: kwah
  Date: 2022/08/10
  Time: 4:11 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>desc</title>
</head>
<body>
    <center><h3>[선언부(declartation)에 대한 예제]</h3></center>
    <hr>
    <%!
        String str = "안녕하세요";
        int a = 5, b = -5;
        public int abs(int n) {
            if(n<0) {
                n = -n;
            }
            return n;
        }
    %>
    <%
        System.out.println(str+"<br>");
        System.out.println(a + "의 절대값은 : "+ abs(a) +"<br>");
        System.out.println(b + "의 절대값은 : "+ abs(b) +"<br>");
    %>
</body>
</html>
