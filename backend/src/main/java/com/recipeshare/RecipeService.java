package com.recipeshare;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import org.bson.Document;

import com.mongodb.Block;
import com.mongodb.util.JSON;
import com.mongodb.BasicDBObject;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoCollection;

public class RecipeService {
	public static JsonArray getAllRecipes(MongoDatabase database) {
		MongoCollection<Document> collection = database.getCollection("recipes");
		JsonArray array = new JsonArray();

		collection.find().forEach((Block<Document>) document -> {
			Gson gson = new Gson();
			Recipe recipe = gson.fromJson(document.toJson(), Recipe.class);
			array.add(recipe.toJson());
		});
		return array;
	}

	public static JsonObject submitRecipe(Recipe recipe, MongoDatabase database) {
		Gson gson = new Gson();
		MongoCollection<Document> collection = database.getCollection("recipes");

		String json = gson.toJson(recipe);
		collection.insertOne(Document.parse(json));
		return recipe.toJson();
	}
}
