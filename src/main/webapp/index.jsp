<%--
Created by IntelliJ IDEA.
User: yzh
Date: 2021/5/22
Time: 16:02
To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() +
            ":" + request.getServerPort() + path + "/";
%>
<head>
    <base href="<%=basePath%>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1,
maximum-scale=1">
    <title>跳转页面</title>
    <!--根据此路径重定向到管理平台首页-->
    <c:redirect url="model/loginUI"/>
</head>
<body>
</body>
</html>