export class Recipe {
    id?: string;
    userId?: string;
    recipeTitle: string;
    ingredients: string;
    howToPrepare: string;
    timeToPrepareInMinutes: number;
    calories: number;
    nutritionalValue: string;
    additionalInfo: string;
    glutenFree: boolean;
    vegan: boolean;
    diabeticFriendly: boolean;
    riskOfAllergies: boolean;
    isFavorite: boolean;
}
