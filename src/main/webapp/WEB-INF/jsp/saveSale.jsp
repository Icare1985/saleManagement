<%--
Created by IntelliJ IDEA.
User: yzh
Date: 2021/5/22
Time: 17:19
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
    <title>添加销售信息</title>
    <!--引入layui的样式文件-->
    <link rel="stylesheet" href="statics/lib/layui/css/layui.css">
    <!--引入layui的js文件-->
    <script src="statics/lib/layui/layui.js"></script>
</head>
<body>
<blockquote class="layui-elem-quote">添加销售</blockquote>
<form class="layui-form" action="" lay-filter="example">

    <%--隐藏销售员id和销售时间--%>
    <input type="hidden" name="userid" id="userid" value="${loginUsers.id}">
        <input type="hidden" name="saledate" id="saledate">

    <div class="layui-form-item">
        <label class="layui-form-label">商品名称</label>
        <div class="layui-input-inline">
            <select name="productid" id="selProductId" lay-verify="required"></select>
        </div>
    </div>

    <div class="layui-form-item">
            <label class="layui-form-label">销售单价</label>
            <div class="layui-input-inline">
                <input type="text" id="salePrice" name="price" lay-verify="required|number" placeholder="请输入销售单价" autocomplete="off" class="layui-input">
            </div>
    </div>

    <div class="layui-form-item">
            <label class="layui-form-label">销售数量</label>
            <div class="layui-input-inline">
                <input type="text" id="saleQuantity" name="quantity" lay-verify="required|number" placeholder="请输入销售数量" autocomplete="off" class="layui-input">
            </div>
    </div>

    <div class="layui-form-item">
        <div class="layui-input-block">
            <button class="layui-btn" lay-submit="" lay-filter="formAdd">添加</button>
            <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
    </div>

</form>
</body>
<%--导入添加销售的js--%>
<script src="statics/js/saveSale.js"></script>
</html>