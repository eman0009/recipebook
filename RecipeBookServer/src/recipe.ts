import { NextFunction, Request, Response, Router } from 'express';
import { getRecipeRepository,  Recipe } from './model';
import { isBoolean } from 'util';
// import {getMongoRepository, getMongoManager} from "typeorm";
// import { OktaAuthService } from '@okta/okta-angular';

export const router: Router = Router();

router.get('/recipes', async function(req: Request, res: Response, next: NextFunction){
    try {
        const recipeRepository = await getRecipeRepository();
        const allRecipes = await recipeRepository.find({ where: { userId: req.body.user.email } });

        res.json(allRecipes);
    }
    catch (err) {
        return next(err);
    }
});

router.get('/recipes/:id', async function(req: Request, res: Response, next: NextFunction){
    try {
        const recipeRepository = await getRecipeRepository();
        const recipe = await recipeRepository.findOne(req.params.id);
        res.json(recipe);
    }
    catch (err) {
        return next(err);
    }
});

router.post('/recipes', async function (req: Request, res: Response, next: NextFunction) {
    try {
        const recipeRepository = await getRecipeRepository();
        const recipe = new Recipe();
        recipe.userId = req.body.userId;
        recipe.recipeTitle = req.body.recipeTitle;
        recipe.ingredients = req.body.ingredients;
        recipe.howToPrepare = req.body.howToPrepare;
        recipe.timeToPrepareInMinutes = req.body.timeToPrepareInMinutes;
        recipe.calories = req.body.calories;
        recipe.nutritionalValue = req.body.nutritionalValue;
        recipe.additionalInfo = req.body.additionalInfo;
        recipe.glutenFree = req.body.glutenFree == "true";
        recipe.vegan = req.body.vegan == "true";
        recipe.diabeticFriendly = req.body.diabeticFriendly == "true";
        recipe.riskOfAllergies = req.body.riskOfAllergies == "true";
        recipe.isFavorite = req.body.isFavorite == "true";

        // console.log(`${recipe.userId}\n
        // ${recipe.recipeTitle}\n
        // ${recipe.ingredients}\n
        // ${recipe.howToPrepare}\n
        // ${recipe.timeToPrepareInMinutes}\n
        // ${recipe.calories}\n
        // ${recipe.nutritionalValue}\n
        // ${recipe.additionalInfo}\n
        // ${recipe.glutenFree}\n
        // ${recipe.vegan}\n
        // ${recipe.diabeticFriendly}\n
        // ${recipe.riskOfAllergies}\n
        // ${recipe.isFavorite}\n`);

        const result = await recipeRepository.save(recipe);
        res.send(result);

        // res.sendStatus(200);
    }
    catch (err) {
        return next(err);
    }
});

router.post('/recipes/:id', async function (req: Request, res: Response, next: NextFunction) {
    try {
        const recipeRepository = await getRecipeRepository();
        const recipe = await recipeRepository.findOne({id: req.body.id});
        recipe.userId = req.body.userId;
        recipe.recipeTitle = req.body.recipeTitle;
        recipe.ingredients = req.body.ingredients;
        recipe.howToPrepare = req.body.howToPrepare;
        recipe.timeToPrepareInMinutes = req.body.timeToPrepareInMinutes;
        recipe.calories = req.body.calories;
        recipe.nutritionalValue = req.body.nutritionalValue;
        recipe.additionalInfo = req.body.additionalInfo;
        recipe.glutenFree = JSON.parse(req.body.glutenFree);
        recipe.vegan = JSON.parse(req.body.vegan);
        recipe.diabeticFriendly = JSON.parse(req.body.diabeticFriendly);
        recipe.riskOfAllergies = JSON.parse(req.body.riskOfAllergies);
        recipe.isFavorite = JSON.parse(req.body.isFavorite);

        // console.log(`${recipe.userId}\n
        // ${recipe.recipeTitle}\n
        // ${recipe.ingredients}\n
        // ${recipe.howToPrepare}\n
        // ${recipe.timeToPrepareInMinutes}\n
        // ${recipe.calories}\n
        // ${recipe.nutritionalValue}\n
        // ${recipe.additionalInfo}\n
        // ${recipe.glutenFree}\n
        // ${recipe.vegan}\n
        // ${recipe.diabeticFriendly}\n
        // ${recipe.riskOfAllergies}\n
        // ${recipe.isFavorite}\n`);


        const result = await recipeRepository.save(recipe);

        res.send(result);
    }
    catch (err) {
        return next(err);
    }
});

router.delete('/recipes/:id', async function (req: Request, res: Response, next: NextFunction) {
    try {

        const recipeRepository = await getRecipeRepository();
        const result = await recipeRepository.delete(req.params.id);
        res.send(result);


    }
    catch (err) {
        return next(err);
    }
});