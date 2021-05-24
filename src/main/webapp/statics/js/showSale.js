layui.use('table',function (){

    var table = layui.table;
    var $=layui.$;
    var layer=layui.layer;
    var form=layui.form;
    var laydate=layui.laydate;
    var currentPage = 1; //创建全局变量，指定当前页是第1页
    var selectJson={};//全局变量 初始化为空；查询后赋值，使其根据查询数据加载页面

    //页面信息显示
    loadSaleList();

    //加载商品名称下拉列表
    loadProductName();

    /************************* 自定义函数**************************************/
    //员工信息页面加载：用于第一次进入页面 和 查询后显示的页面
    function loadSaleList(){
        table.render({
            elem:'#demo' //表示跟表格容器的id进行绑定
            ,height:400
            ,url:'/sale/loadDataByParams'/*数据接口*/
            ,page:true/*开启分页*/
            ,limit:2
            ,limits:[5,10,15,20]
            ,where:selectJson //where表示把值传递到后端
            ,toolbar: '#toolbarDemo'
            ,defaultToolbar: ['filter', 'exports', 'print',
                { //自定义头部工具栏右侧图标。如无需自定义，去除该参数即可
                    title: '提示'
                    ,layEvent: 'LAYTABLE_TIPS'
                    ,icon: 'layui-icon-tips'
                }]
            ,cols:[[
                {field: 'id', title: 'ID', width:100, sort: true}
                ,{field: 'productname', title: '商品', width: 100,
                    templet:'<div>{{ d.product.productname }}</div>'}
                ,{field: 'price', title: '商品单价', width:100}
                ,{field: 'quantity', title: '数量', width:100, }
                ,{field: 'totalprice', title: '总价', width:90,sort: true}
                ,{field: 'saledate', title: '销售日期', width: 170,sort: true}
                ,{field: 'realname', title: '销售员', width: 80,
                    templet:'<div>{{ d.users.realname }}</div>'}
            ]]
            /*渲染完毕之后的回调函数*/
            ,done: function(res, curr, count){
                //得到当前页码
                console.log(curr);
                //给currentPage赋值
                currentPage = curr;
            }
        });
    }

    //条件查询
    form.on('submit(btnSelect)', function(data){
        console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
        selectJson=data.field;//赋值，然后调用loadEmpList()方法：
        loadSaleList();
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    });

    /*加载商品名称的下拉列表*/
    function loadProductName(){
        $.post(
            "product/loadAll",
            function (productList){
                var optionStr="<option value=''>--请选择商品--</option>";
                $(productList).each(function (){
                    optionStr+="<option value='"+this.id+"'>"+this.productname+"</option>"
                })
                //把生成好的选项加载到下拉列表中
                $("#selProductId").append(optionStr);
                form.render('select')//刷新下拉列表
            },"json"
        ).error(function (){
            layer.msg("请求数据异常！")
        })
    }

});