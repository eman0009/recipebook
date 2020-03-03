import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from "@angular/router";

import { RecipesListService } from './recipes-list.service';
import { Recipe } from './recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userId', 'recipeTitle', /*'ingredients', 'howToPrepare',*/ 'timeToPrepareInMinutes', 'calories', /*'nutritionalValue', 'additionalInfo',*/ 'glutenFree', 'vegan', 'diabeticFriendly', 'riskOfAllergies', /*'isFavorite'*/ 'edit', 'delete'];
  dataSource = new MatTableDataSource<any>();

  selectedRecipe: Recipe = new Recipe();
  loading = false;

  constructor(public recipeService: RecipesListService, private router: Router){
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

  createRecipe(){
    this.router.navigateByUrl('/newrecipe');
  }

	editRecipe(recipe: Recipe){
    this.selectedRecipe = recipe;
    console.log('Recipe Selected ' + this.selectedRecipe);
	}

	clearRecipe(){
		this.selectedRecipe = new Recipe();
	}

	// async deleteRecipe(recipe: Recipe){
	async deleteRecipe(id: number){
		this.loading = true;
		if(confirm(`Are you sure you want to delete the recipe ? This cannot be undone`)){
    // if(confirm(`Are you sure you want to delete the recipe ${recipe.recipeTitle}? This cannot be undone`)){
      // this.recipeService.deleteRecipe(Number.parseInt(recipe.id));
			this.recipeService.deleteRecipe(id);

		}
		await this.refresh();
  }

  getRecord(recipe : Recipe){
    return recipe;
  }





}

