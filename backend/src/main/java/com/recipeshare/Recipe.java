package com.recipeshare;

import com.google.gson.JsonObject;

public class Recipe {
	private String name;
	private int prepTime;

	public Recipe(String name, int prepTime) {
		this.name = name;
		this.prepTime = prepTime;
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

	public JsonObject getJSON() {
		JsonObject json = new JsonObject();

		try {
			json.addProperty("name", name);
			json.addProperty("prepTime", prepTime);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return json;
	}

	public String toString() {
		return this.getJSON().toString();
	}
}
