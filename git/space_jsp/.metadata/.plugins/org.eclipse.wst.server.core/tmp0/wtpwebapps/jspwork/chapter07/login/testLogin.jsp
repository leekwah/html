<%@ page import="java.net.URLEncoder" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String s_id = "hong";
    String s_pw = "1234";
    // String s_name = "gildong";
    String s_name = "홍길동";

    if (s_id.equals(request.getParameter("id")) && s_pw.equals(request.getParameter("pw"))) {
        // response.sendRedirect("main.jsp?id="+s_id);
        // response.sendRedirect("main.jsp?name="+s_name); 한글 값이 ???로 나온다.
        response.sendRedirect("main.jsp?name="+ URLEncoder.encode(s_name, "UTF-8"));
        // URLEncoder.encode( , "UTF-8")를 사용하면, 한글이 나오게 된다.
    } else {
        response.sendRedirect("login.html");
    }
%>