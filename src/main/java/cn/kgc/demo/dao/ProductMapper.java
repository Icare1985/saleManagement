package cn.kgc.demo.dao;

import cn.kgc.demo.pojo.Product;
import org.apache.ibatis.annotations.Update;

public interface ProductMapper extends BaseMapper<Product>{

    int updateProductQuantity(Product product);
}