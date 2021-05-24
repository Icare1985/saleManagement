package cn.kgc.demo.controller;

import cn.kgc.demo.pojo.Sale;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("sale")
public class SaleController extends BaseController<Sale>{
}
