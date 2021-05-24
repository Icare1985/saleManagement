<%--
Created by IntelliJ IDEA.
User: yzh
Date: 2021/5/22
Time: 17:20
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
    <title>查看库存</title>
    <!--引入layui的样式文件-->
    <link rel="stylesheet" href="statics/lib/layui/css/layui.css">
    <!--引入layui的js文件-->
    <script src="statics/lib/layui/layui.js"></script>
</head>
<body>
<div class="layui-col-xs-offset4 layui-col-xs-8">
    <h2 >查看库存</h2>
</div>
<%--表单查询条件--%>
<form class="layui-form" action="" style="margin-top: 20px;margin-bottom: -20px;">

    <div class="layui-form-item">
        <label class="layui-form-label">排序方式</label>
        <div class="layui-input-inline">
            <select name="productid" id="selProductId" lay-verify="required"></select>
        </div>
    </div>
        <div class="layui-inline">
            <div class="layui-input-inline">
                <button type="submit" class="layui-btn" lay-submit="" lay-filter="btnSelect">
                    <i class="layui-icon">&#xe615;</i>提交</button>
            </div>
        </div>
    </div>
</form>

<%--导入信息查询的js--%>
<script src="statics/js/showInventory.js"></script>
<%--table标签选择器--%>
<table id="demo" lay-filter="test" ></table>
</body>
</html>