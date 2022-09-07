<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
  <meta charset = "UTF-8">
  <title>Title</title>
</head>
<body bgcolor="yellow">
  <center><h3>[param 액션 태그에 대한 예제]</h3></center>
  <hr>
    이 파일은 yellow2.jsp 입니다.<br>
  <hr>
    현재 웹 브라우저에 나타난 웹 페이지는 <%= request.getParameter("url") %>로 부터 이동되었습니다.<hr>
  <%= request.getParameter("url")%>에서 넘어온 메시지 : <%= request.getParameter("news") %>
</body>
</html>
