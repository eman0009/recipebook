import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { JsonPipe } from '@angular/common';
import { json } from 'express';
import { element } from 'protractor';
// import {MatInputModule} from '@angular/material/input';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ingredientToSearch : string;
  loading = false;
  recipesFound = [];

  displayedColumns: string[] = ['title', 'calories', 'cautions', 'dietLabels', 'healthLabels', 'totalTime'];
  dataSource = new MatTableDataSource<any>();

  constructor(public homeService: HomeService, public dialog: MatDialog){
  }

  ngOnInit() {

  }

  async searchRecipeByIngredient(ingredient : string){
    console.log("Home Component ingredient: " + ingredient);
    this.loading = true;
    var recipesFoundJson = await this.homeService.searchRecipeByIngredient(ingredient);

      // var recipeJsonString = JSON.stringify(recipesFoundJson.hits);
      // var recipeJsonFim = JSON.parse(recipeJsonString);

      recipesFoundJson.hits.forEach(element => {
        this.recipesFound.push(element.recipe);
        console.log(element.recipe);


      });
      console.log(this.recipesFound);
      this.dataSource.data = this.recipesFound;

        // PAREI AQUI. MOSTRAR JSON NO TEXTAREA
        /**
         * Create Recipes based on the model.
         *  */


      this.loading = false;

  }

  recipeInformation(){
    alert('Recipe from Edaman - details');
  }

  showDialog(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      height: '200px'
    });
    setTimeout(() => {
      dialogRef.close();
    }, 10000);
  }



}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./home.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
  ) { }

  ngOnInit() {
  }

}
