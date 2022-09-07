<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    Cookie[] cookies = request.getCookies();

    for(int i=0; i<cookies.length; i++){
        out.println(i+"번째 쿠키 "+cookies[i].getName()+" 삭제<br>");
        cookies[i].setMaxAge(0);
        cookies[i].setPath("/");
        response.addCookie(cookies[i]);
    }
%>