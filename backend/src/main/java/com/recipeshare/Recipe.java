package com.recipeshare;

import com.google.gson.JsonObject;
import com.google.gson.Gson;
import com.google.gson.JsonParser;

public class Recipe {
	private String name;
	private int prepTime;
	private String url;
	private String author;

	public Recipe(String name, int prepTime, String url, String author) {
		this.name = name;
		this.prepTime = prepTime;
		this.url = url;
		this.author = author;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPrepTime() {
		return prepTime;
	}

	public void setPrepTime(int prepTime) {
		this.prepTime = prepTime;
	}

	public String getURL() {
		return url;
	}

	public void setURL(String url) {
		this.url = url;
	}

	public String getAuthor() {
		return author;
	}
	
	public void setAuthor(String author) {
		this.author = author;
	}

	public String toString() {
		Gson gson = new Gson();
		return gson.toJson(this);
	}

	public JsonObject toJSON() {
		JsonParser parser = new JsonParser();
		return parser.parse(this.toString()).getAsJsonObject();
	}
}
