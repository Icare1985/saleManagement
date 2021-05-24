package cn.kgc.demo.service.impl;

import cn.kgc.demo.dao.ProductMapper;
import cn.kgc.demo.pojo.Product;
import cn.kgc.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = false)
public class ProductServiceImpl extends BaseServiceImpl<Product> implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    @Override
    public int modifyProductQuantity(Product product) {
        return productMapper.updateProductQuantity(product);
    }
}
