package cn.kgc.demo.pojo;

import lombok.Data;

import java.util.Date;

@Data
public class Sale {
    private Integer id;

    private Double price;//销售单价

    private Integer quantity;//销售数量

    private Double totalprice;//销售总价

    private Date saledate;//销售日期

    private Integer userid;//用户ID

    private Integer productid;//产品ID

    private Product product;//产品信息

    private Users users;//用户名称

}