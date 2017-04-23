package com.recipeshare;

import com.google.gson.JsonObject;
import com.google.gson.Gson;
import com.google.gson.JsonParser;

public class Recipe {
	private String title;
	private int prepTime;
	private String url;
	private String author;

	public Recipe(String title, int prepTime, String url, String author) {
		this.title = title;
		this.prepTime = prepTime;
		this.url = url;
		this.author = author;
	}

	public String getTitle() {
		return title;
	}

	public void setTitel(String title) {
		this.title = title;
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

	public JsonObject toJson() {
		JsonParser parser = new JsonParser();
		return parser.parse(this.toString()).getAsJsonObject();
	}
}
