import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "test",
      "https://discovery-latam-prod.imgix.net/files/wp-content/uploads/2016/04/1461280861-chile.jpg?w=1280&h=720&crop=faces&fit=crop&auto=compress&q=75"
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}
