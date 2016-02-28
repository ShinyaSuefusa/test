package test;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class WebAPIController {

	@RequestMapping(path="/data", method=RequestMethod.GET)
	public Data data() {
		Data dt = new Data();
		dt.setValue("datadesu");
		return dt;
	}
}
