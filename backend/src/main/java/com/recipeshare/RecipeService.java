package com.recipeshare;

import com.google.gson.JsonArray;
import com.mongodb.client.MongoDatabase;

public class RecipeService {
	public static JsonArray getAllRecipes(MongoDatabase database) {
		Recipe recipe1 = new Recipe("Chicken Noodle Soup", 10, "http://clv.h-cdn.co/assets/cm/15/10/1600x800/54f4a5bf1042a_-_chicken-noodle-soup-recipe.jpg", "Parth Mehrotra");
		Recipe recipe2 = new Recipe("Aloo Paratah", 2, "http://media.indiatimes.in/media/content/2015/Jan/aloo-paratha-big-image-2-itimes_1422605809_725x725.jpg", "Parth Mehrotra");
		JsonArray ret = new JsonArray(); 
		ret.add(recipe1.toJSON());
		ret.add(recipe2.toJSON());
		return ret;
	}
}
