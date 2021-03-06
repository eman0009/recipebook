import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  displayedColumns: string[] = ['id', /*'userId',*/ 'recipeTitle', /*'ingredients', 'howToPrepare',*/ 'timeToPrepareInMinutes', 'calories', /*'nutritionalValue', 'additionalInfo',*/ 'glutenFree', 'vegan', 'diabeticFriendly', 'riskOfAllergies', /*'isFavorite'*/ 'edit', 'delete'];
  dataSource = new MatTableDataSource<any>();

  selectedRecipe: Recipe = new Recipe();
  loading = false;

  constructor(public recipeService: RecipesService){
  }

  ngOnInit() {
    this.refresh();
  }

  async refresh() {
	this.loading = true;
	const data = await this.recipeService.getRecipes();
	this.dataSource.data = data;
	this.loading = false;
  }

	async updateRecipe(){
		if(this.selectedRecipe.id !== undefined){
			await this.recipeService.updateRecipe(this.selectedRecipe);
		} else {
			await this.recipeService.createRecipe(this.selectedRecipe);
		}
		this.selectedRecipe = new Recipe();
		await this.refresh();
	}  

	editRecipe(recipe: Recipe){
		this.selectedRecipe = recipe;
	}

	clearRecipe(){
		this.selectedRecipe = new Recipe();
	}

	async deleteRecipe(recipe: Recipe){
		this.loading = true;
		if(confirm(`Are you sure you want to delete the recipe ${recipe.recipeTitle}? This cannot be undone`)){
			this.recipeService.deleteRecipe(Number.parseInt(recipe.id));
		}
		await this.refresh();
	}



}
