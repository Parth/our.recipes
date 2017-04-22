package com.recipeshare;

import static spark.Spark.*;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mongodb.client.MongoDatabase;
import com.mongodb.MongoClient;

import java.util.Map;

public class Server {
	public static void main(String args[]) {
		MongoClient mongoClient = new MongoClient("localhost", 8123);
		MongoDatabase db = mongoClient.getDatabase("recipeshare");

		get("/recipes", (req, res) -> {
			res.header("Access-Control-Allow-Origin", "*");
			return API.getAllRecipes(db);
		});

		post("/submit", (req, res) -> {
			res.header("Access-Control-Allow-Origin", "*");
			Gson gson = new GsonBuilder().create();
			String json = gson.toJson(req.params());
			StatusCode status = new StatusCode();
			return API.submitRecipe(db, json, status);
		});
	}
}
