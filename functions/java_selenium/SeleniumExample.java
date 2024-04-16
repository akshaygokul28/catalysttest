import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.openqa.selenium.chrome.ChromeDriver;
import com.catalyst.browserlogic.SeleniumHandler;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class SeleniumExample implements SeleniumHandler {
	private static final Logger LOGGER = Logger.getLogger(SeleniumExample.class.getName());

	JSONObject responseData = new JSONObject();
	static String GET = "GET";
	static String POST = "POST";

	@Override
	@SuppressWarnings("unchecked")
	public void runner(HttpServletRequest request, HttpServletResponse response,ChromeDriver driver) throws Exception {
		try {
			//Fetches the endpoint and method to which the call was made
			String url = request.getRequestURI();
			String method = request.getMethod();
			driver.get("https://www.google.com");
			responseData.put("message", "Title of the page "+driver.getTitle());

			//Sends the response back to the Client
			response.setContentType("application/json");
			response.getWriter().write(responseData.toString());
			response.setStatus(200);
		} catch (Exception e) {
		//The actions are logged. You can check the logs from Catalyst Logs.
			LOGGER.log(Level.SEVERE, "Exception in SeleniumExample", e);
			responseData.put("error", "Internal server error occurred. Please try again in some time.");
			response.getWriter().write(responseData.toString());
			response.setStatus(500);
		}

	}


}
