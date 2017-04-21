package com.recipeshare;

import org.json.JSONObject;

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

	public JSONObject getJSON() {
		JSONObject json = new JSONObject();

		try {
			json.put("name", name);
			json.put("prepTime", prepTime);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return json;
	}

	public String toString() {
		return this.getJSON().toString();
	}
}
