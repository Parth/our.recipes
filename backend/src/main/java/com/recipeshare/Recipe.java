package com.recipeshare;

import com.google.gson.JsonObject;

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

	public JsonObject getJSON() {
		JsonObject json = new JsonObject();

		try {
			json.addProperty("name", name);
			json.addProperty("prepTime", prepTime);
			json.addProperty("url", url);
			json.addProperty("author", author);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return json;
	}

	public String toString() {
		return this.getJSON().toString();
	}
}
