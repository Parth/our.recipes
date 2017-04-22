package com.recipeshare;

import com.google.gson.JsonArray;
import com.mongodb.client.MongoDatabase;

public class RecipeService {
	public static JsonArray getAllRecipes(MongoDatabase database) {
		Recipe test = new Recipe("Chicken Noodle Soup", 10);
		JsonArray ret = new JsonArray(); 
		ret.add(test.getJSON());
		ret.add(test.getJSON());
		return ret;
	}
}
