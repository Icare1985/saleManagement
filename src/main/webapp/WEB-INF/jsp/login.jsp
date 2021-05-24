<%--
Created by IntelliJ IDEA.
User: yzh
Date: 2021/5/22
Time: 23:47
To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
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
    <title>登录</title>
    <link rel="stylesheet" href="statics/lib/layui/css/layui.css">
    <link rel="stylesheet" type="text/css" href="statics/css/back/login.css" />
</head>

<body >
<div class="qiqiu1 qiqiu">
    <img src="http://qt6nn5f1q.hn-bkt.clouddn.com/q2.png" />
    <div class="text">韦氏集团</div>
</div>
<div class="qiqiu2 qiqiu">
    <img src="http://qt6nn5f1q.hn-bkt.clouddn.com/q3.png" />
    <div class="text">韦氏集团</div>
</div>
<div class="qiqiu3 qiqiu">
    <img src="http://qt6nn5f1q.hn-bkt.clouddn.com/q4.png" />
    <div class="text">韦氏集团</div>
</div>
<div class="qiqiu4 qiqiu">
    <img src="http://qt6nn5f1q.hn-bkt.clouddn.com/q5.png" />
    <div class="text">韦氏集团</div>
</div>
<div class="qiqiu5 qiqiu">
    <img src="http://qt6nn5f1q.hn-bkt.clouddn.com/q6.png" />
    <div class="text">韦氏集团</div>
</div>

<div class="qiqiu6 qiqiu">
    <img src="http://qt6nn5f1q.hn-bkt.clouddn.com/q2.png" />
    <div class="text">韦氏集团</div>
</div>


<div class="login" style="height: 300px;">
    <h1>用户后台登录</h1>
    <!--拦截后的提示-->
    <input type="hidden" id="loginUIMsg" value="${loginUIMsg }">
    <form class="layui-form" action="" lay-filter="example">
        <div class="layui-form-item">
            <input id="userName" class="layui-input" name="username" placeholder="用户名"
                   lay-verify="required" type="text" autocomplete="off">
        </div>
        <div class="layui-form-item">
            <input id="pwd" class="layui-input" name="password" placeholder="密码"
                   lay-verify="required" type="password" autocomplete="off">
        </div>
        <button class="layui-btn login_btn" lay-submit="" lay-filter="login">登录</button>
    </form>
</div>

<script src="statics/lib/layui/layui.js"></script>
<script src="statics/js/login.js"></script>
</body>
</html>