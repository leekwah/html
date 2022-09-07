<%@page import="java.util.Calendar"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Implicit Objects</title>
</head>
<body>
<p> 현재 시간은
<%--
짧게 만들었을 때
<%=java.util.Calendar.getInstance().getTime()%>
--%>
    <%
        Calendar calendar = Calendar.getInstance();
        String am_pm;
        int hour = calendar.get(Calendar.HOUR_OF_DAY);
        int minute = calendar.get(Calendar.MINUTE);
        int second = calendar.get(Calendar.SECOND);

        if (calendar.get(Calendar.AM_PM) == 0 ) {
            am_pm = "AM";
        } else {
            am_pm = "PM";
        }

        String CT = hour + ":" + minute + ":" + second + " " + am_pm;
        out.println("현재 시간은 "+CT+"\n");
    %>

    <%
        response.setIntHeader("Refresh",5);
    %>
    <p> <a href="./response_data.jsp"> Google 홈페이지로 이동하기</a>
</body>
</html>

