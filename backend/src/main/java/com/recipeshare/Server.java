package com.recipeshare;

import static spark.Spark.*;

import com.mongodb.client.MongoDatabase;
import com.mongodb.MongoClient;


public class Server {
	public static void main(String args[]) {
		MongoClient mongoClient = new MongoClient("localhost", 8123);
		MongoDatabase db = mongoClient.getDatabase("recipeshare");

		get("/recipes", (req, res) -> {
			res.header("Access-Control-Allow-Origin", "*");
			return API.getAllRecipes(db);
		});
	}
}
