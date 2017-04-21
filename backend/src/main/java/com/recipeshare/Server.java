package com.recipeshare;

import static spark.Spark.*;

public class Server {
	public static void main(String args[]) {
		Recipe test = new Recipe("Chicken Noodle Soup", 10);
		get("/", (req, res) -> test.toString());
	}
}
