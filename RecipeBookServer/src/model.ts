import {Entity, PrimaryGeneratedColumn, Column, createConnection, Connection, Repository, PrimaryColumn, Generated } from 'typeorm';
// var mongoose = require('mongoose'); 

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  recipeTitle: string;

  @Column()
  ingredients: string;

  @Column()
  howToPrepare: string;

  @Column()
  timeToPrepareInMinutes: number;

  @Column({ nullable: true })
  calories: number;

  @Column({ nullable: true })
  nutritionalValue: string;

  @Column({ nullable: true })
  additionalInfo: string;

  @Column('boolean')
  glutenFree: boolean;

  @Column('boolean')
  vegan: boolean;

  @Column('boolean')
  diabeticFriendly: boolean;

  @Column('boolean')
  riskOfAllergies: boolean;

  @Column('boolean')
  @Column({ nullable: true })
  isFavorite: boolean;

  
}

let connection:Connection;


export async function getRecipeRepository(): Promise<Repository<Recipe>> {
    if (connection===undefined) {
      connection = await createConnection({
        type: 'sqlite',
        database: 'recipebooksqldb',
        synchronize: true,
        entities: [
            Recipe
        ],
      });
    }
    return connection.getRepository(Recipe);
  }

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
