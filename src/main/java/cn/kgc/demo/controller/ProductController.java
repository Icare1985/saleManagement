package cn.kgc.demo.controller;

import cn.kgc.demo.pojo.Product;
import cn.kgc.demo.service.BaseService;
import cn.kgc.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("product")
public class ProductController extends BaseController<Product>{

    @Autowired
    private ProductService productService;

    @RequestMapping("modifyProductQuantity")
    @ResponseBody
    public int modifyProductQuantity(Product product){
        return productService.modifyProductQuantity(product);
    }
}
