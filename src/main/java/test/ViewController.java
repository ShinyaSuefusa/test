package test;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@EnableAutoConfiguration
public class ViewController {

	@RequestMapping("/")
	public String index() {
		System.out.println("index");
		return "index";
	}
	
	@RequestMapping("/list")
	public String list() {
		System.out.println("list");
		return "list";
	}
		
	@RequestMapping("/page")
	public String page() {
		System.out.println("page");
		return "page";
	}
		
}
