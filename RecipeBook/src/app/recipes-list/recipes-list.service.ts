import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import { Recipe } from './recipe';

const baseUrl = 'http://localhost:4201';

@Injectable({
  providedIn: 'root'
})
export class RecipesListService {

	constructor(public oktaAuth: OktaAuthService, private http: HttpClient) {
	}

	private async request(method: string, url: string, data?: any) {
		const token = await this.oktaAuth.getAccessToken();

		console.log('request ' + JSON.stringify(data));
		const result = this.http.request(method, url, {
			body: data,
			responseType: 'json',
			observe: 'body',
			headers: {
			Authorization: `Bearer ${token}`
			}
		});

		return new Promise<any>((resolve, reject) => {
			result.subscribe(resolve as any, reject as any);
		});
	}

	getRecipes(){
		return this.request('get', `${baseUrl}/recipes`);
	}

	getRecipe(id: string) {
		return this.request('get', `${baseUrl}/recipes/${id}`);
	}

	createRecipe(recipe: Recipe) {
		console.log('createRecipe ' + JSON.stringify(recipe));
		return this.request('post', `${baseUrl}/recipes`, recipe);
	}

	updateRecipe(recipe: Recipe) {
		console.log('updateRecipe ' + JSON.stringify(recipe));
		return this.request('post', `${baseUrl}/recipes/${recipe.id}`, recipe);
	}

	deleteRecipe(id: number) {
		return this.request('delete', `${baseUrl}/recipes/${id}`);
  }

  getRecord(id: number){
    console.log(id + ' cell clicked');
  }

}
