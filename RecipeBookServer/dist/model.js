"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
// var mongoose = require('mongoose'); 
let Recipe = class Recipe {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Recipe.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Recipe.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Recipe.prototype, "recipeTitle", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Recipe.prototype, "ingredients", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Recipe.prototype, "howToPrepare", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Recipe.prototype, "timeToPrepareInMinutes", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Recipe.prototype, "calories", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "nutritionalValue", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Recipe.prototype, "additionalInfo", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], Recipe.prototype, "glutenFree", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], Recipe.prototype, "vegan", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], Recipe.prototype, "diabeticFriendly", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], Recipe.prototype, "riskOfAllergies", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Boolean)
], Recipe.prototype, "isFavorite", void 0);
Recipe = __decorate([
    typeorm_1.Entity()
], Recipe);
exports.Recipe = Recipe;
let connection;
function getRecipeRepository() {
    return __awaiter(this, void 0, void 0, function* () {
        if (connection === undefined) {
            connection = yield typeorm_1.createConnection({
                type: 'sqlite',
                database: 'recipebooksqldb',
                synchronize: true,
                entities: [
                    Recipe
                ],
            });
        }
        return connection.getRepository(Recipe);
    });
}
exports.getRecipeRepository = getRecipeRepository;
//   const connectionString = 'mongodb+srv://gustavo_adami:algonquin123@recipebook-of5pu.azure.mongodb.net/test?retryWrites=true&w=majority';
// export async function getRecipeRepository(): Promise<Repository<Recipe>> {
//     if (connection===undefined) {
//         connection = await createConnection(
//             {
//             type: 'mongodb',
//             url: connectionString
//             // database: 'recipebookdb',
//             // synchronize: true,
//             // entities: [
//             //     Recipe
//             // ],
//         });
//         connection.connect();
//         console.log('Connected to ' + connection + ' + ');
//         return connection.getRepository(Recipe);
//     }
// }
// var dBConnOptions = {
//     useNewUrlParser: true
// }
// mongoose.connect(connectionString, dBConnOptions); 
// const connection = createConnection({
//     type: "mongodb",
//     // useNewUrlParser: true,
//     url: "mongodb://admin:password@testcluster0-shard-00-00-1cmyo.mongodb.net:27017,testcluster0-shard-00-01-1cmyo.mongodb.net:27017,testcluster0-shard-00-02-1cmyo.mongodb.net:27017/test?ssl=true&replicaSet=TestCluster0-shard-0&authSource=admin&retryWrites=true",
//     ssl: true,
//     authSource: "admin",
//     replicaSet: "TestCluster0-shard-0"
// })
// connection.getRepository(Recipe);
// const uri = 'mongodb+srv://gustavo_adami:algonquin123@recipebook-of5pu.azure.mongodb.net/test?retryWrites=true&w=majority';
// const client = new MongoClient(connectionString, { , useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("recipebookdb").collection("recipe");
//   // perform actions on the collection object
//   client.close();
// });
