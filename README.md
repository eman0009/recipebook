# RecipeBook

RecipeBook is the Angular client.
RecipeBookServer is the application server.

First, you need to install Node and npm (https://nodejs.org/en/download/)

## Build
Once Node and npm are installed, clone the repo.
Open Command Prompt and navigate to directory where you cloned the repo.

You have to run this command in both directories: RecipeBook and RecipeBookServer. Navigate to one directory, run command, navigate to second directory, run command.

Run `npm i` to download the project dependencies.

You should be able to start the application.

Navigate to RecipeBookServer\src and run `npx tsc` to compile the project.
Now run `node ..\dist\server.js` to start the application server.

Open another Command Prompt and navigate to RecipeBook.
Run `ng serve -o` to compile and start the Angular client.
Your browser should open automatically at `http://localhost:4200/` (Port that Angular listens to). Angular will automatically reload if you change any of the source files and save.

If you make changes in the application server code, it will NOT refresh automatically like Angular. 

Stop the terminal where it is running `CTRL+C` and run the compile command, then start the server again.

## Errors
In case of errors in the Build process, check in the Command Prompts for missing npm packages. You might need to install then manually. 
For example: package "typeorm"

Go to `https://www.npmjs.com/` and search the package name stated in the error message. You will find the command to install it in the website. 
For package "typeorm", it would be `npm i typeorm`.

## Database
SQLite database file is in RecipeBookServer\src

## Need help?

Used this tutorial `https://developer.okta.com/blog/2018/10/30/basic-crud-angular-and-node` as a starting point and adapted it to Recipe Book.

