# Client Side App for TODOlist server: https://github.com/ronanamsterdam/todolist

- Sample React shocasing deployment of a complete web-facing microservice like app on KintoHub (https://www.kintohub.com/) 

- Forked and modified from: https://github.com/reduxjs/redux/tree/master/examples/todomvc

- under the hood: 
    + React with Redux on front-end 
    + Nodejs on backend 
    + MongoDb
    
## To deploy on kinto:
 1. Create new Dynamic Web App using "Create from existing repo" and locate this repo 
 2. Provide env vars in kinto UI as specified in .env.example file (to get auth token -> you need to create and deploy new deployment with create app -> from there just follow instructions)
 3. Create new or add your Web App to existing deployment
 4. Deploy -> your app will be available within 1-2mins -> the url is provided in text box nex yo your WebApp name in environment deployment result
 
## To run locally:
 1. Make sure https://github.com/ronanamsterdam/todolist is running locally and has MongoDb connection
 2. `npm install`
 3. `npm start`
 
## To run remote:
 1. Make sure you've set REMOTE_OVERRIDE_CONNECTION_STRING in your deployment env
 2. `npm install && npm build`
 3. `npm start` 

## Available Scripts

In the project directory, you can run:

### `npm dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm start`

Runs the app in prod mode using simple static server on port 3000.<br>

 - be sure to run `npm run build` before that

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Docs to read:
  - https://docs.kintohub.com/docs/mongo-db
  - HKJS meetup slides: https://slides.com/romanfromrome/microservices-your-react-todo-app
  - HKJS video: https://www.youtube.com/watch?v=R8-n2tPtS18
