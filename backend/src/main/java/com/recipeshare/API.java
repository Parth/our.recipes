package com.recipeshare;

import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

import com.mongodb.client.MongoDatabase;

public class API {
	public static String getAllRecipes(MongoDatabase database) {
		return RecipeService.getAllRecipes(database).toString();
	}

	public static String submitRecipe(MongoDatabase database, String json, StatusCode code) {
		Gson gson = new Gson();
		Recipe recipe = gson.fromJson(json, Recipe.class);
		return RecipeService.submitRecipe(recipe, database).toString();
	}
}
