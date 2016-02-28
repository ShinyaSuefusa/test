package test;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@EnableAutoConfiguration
public class ViewController {

	@RequestMapping("/view")
	public String view(
		@RequestParam(value="name", required=false, defaultValue="World")
		String name, Model model) {
		model.addAttribute("name", name);
		return "view";
	}
}
