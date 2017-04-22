package com.recipeshare;

import com.google.gson.JsonObject;
import com.mongodb.client.MongoDatabase;

public class API {

	public static String getAllRecipes(MongoDatabase database) {
		return RecipeService.getAllRecipes(database).toString();
	}
}
