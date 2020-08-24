
## Getting the Project Up and running

1. In the project root directory `E-Cell Website/` <br>
    run <br>
    ```npm i```
2. in the client directory `E-Cell Website/client/` <br>
    run <br>
    ```npm i```
3. Start the development react server (hosting development frontend) + express server (hosting backend) by running this in project root directory `E-Cell Website/` <br>
    ```npm run dev``` <br>

    OR <br>

    run both servers manually in two different terminals. (from project root directory) <br>
    ```npm run client``` <br>
    ```npm run server```

4. Also, start the mongoDB server for connecting server with database.

5. (OPTIONAL) To run the project in production mode. (as will be deployed) <br>
    - build the react project (in `E-Cell Website/client/`) <br>
        run : ```npm run build``` <br>
        > a new build/ folder will be created in the client directory.
    - add this line to out `.env` file
        > NODE_ENV=production

    - finally in the project root directory run <br>
        ```npm run server```



## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run server`

runs only the express server.[http://localhost:5000](http://localhost:5000)


### `npm run client`

runs only the react-app server.[http://localhost:3000](http://localhost:3000)

### `npm build` (in /client)

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
