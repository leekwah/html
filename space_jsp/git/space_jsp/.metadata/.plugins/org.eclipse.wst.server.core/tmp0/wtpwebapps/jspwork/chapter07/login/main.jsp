<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%-- getParameter()에 id를 넣으면 s_id의 값인 hong이 나온다--%>
<%
    request.setCharacterEncoding("utf-8");
    String s_id = request.getParameter("id");
    String s_name = request.getParameter("name");
%>
<%= s_name %>님 안녕하세요! <br>
저희 홈페이지에 방문해주셔서 감사합니다.<br>
즐거운 시간 되세요.<br>