# PiquedInterest
Welcome to PicquedInterest! This is a clone of pinterest.com where the user has ability to create, update, delete a pin and leave comments on a specific pin.

## Live Site Link
[PiquedInterest](https://piquedinterest.herokuapp.com/)

## Features
1. User Authentication
* User can log in, signup, and log out of the site
* User can also log in as a demo user

2. Pin
* Users can see all the pins when they log in.
* Logged-in users can create, edit and delete a pin

3. Comments
* Logged-in users can create, edit and delete a comment on a specific pin.
* They can only edit and delete on comments posted by them

## Technologies Used
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" style="width:60px;" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" style="width:60px;" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" style="width:60px;" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" style="width:60px;" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" style="width:60px;" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" style="width:60px;" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html5" title="html5" width="60" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3" title="css3" width="60" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" title="javascript" width="60" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" style="width:60px;" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style="width:60px;" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" style="width:60px;" />

## Setting Up the Project
1. Clone this repistory

    ```bash
    https://github.com/spursforever/PiquedInterest.git
    ```

2. Install the project's backend dependencies at root directory

    ```bash
    pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
    ```

    ```bash
    pipenv install psycopg2-binary
    ```

3. Navigate to react-app direct and install the project's frontend dependencies

    ```bash
    npm install
    ```

4. Add an .env file in root file containing the variables from the .env.example file

5. Create user and database based on what you setup in .env file
   ```bash
   psql -c "CREATE USER <database_username> PASSWORD '<password>' CREATEDB"
   ```
   ```bash
   psql -c "CREATE DATABASE <database_name> WITH OWNER <database_username>"
   ```

6. Use the following commands to apply the provided database migrations and seeder.

    ```bash
   pipenv shell
   ```  

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

8. You can now test the application. (Please make sure to flask run on root directory and npm start on react-app directory!!!)
   ```bash
   flask run
   ```

    ```bash
    npm start
    ```

9. You can sign in via Demo User or create an account yourself

## Home Page
![image](https://user-images.githubusercontent.com/94093737/181853316-9dae209d-227f-416c-af95-5fd11de5fd7e.png)
![image](https://user-images.githubusercontent.com/94093737/181853383-5ff0f3a0-2321-4207-b0fa-d607f71d4f54.png)

## All Pins Page
![image](https://user-images.githubusercontent.com/94093737/181853412-1c8f9499-e302-4cd0-9f0a-8d7eb63779f3.png)

## Pin Detail Page
![image](https://user-images.githubusercontent.com/94093737/181853435-59570876-16d6-4e6f-9a01-83e871255d14.png)

## Future Features
* Search
* AWS
* Board
* Follow

## Helpful commands

|    Command            |    Purpose    |
| -------------         | ------------- |
| `pipenv shell`        | Open your terminal in the virtual environment and be able to run flask commands without a prefix |
| `pipenv run`          | Run a command from the context of the virtual environment without actually entering into it. You can use this as a prefix for flask commands  |
| `flask db upgrade`    | Check in with the database and run any needed migrations  |
| `flask db downgrade`  | Check in with the database and revert any needed migrations  |
| `flask seed all`      | Just a helpful syntax to run queries against the db to seed data. See the **app/seeds** folder for reference and more details |
| `heroku login -i`      | Authenticate your heroku-cli using the command line. Drop the -i to authenticate via the browser |
| `heroku authorizations:create` | Once authenticated, use this to generate an Oauth token |
| `heroku run -a <app name>` | Run a command from within the deployed container on Heroku |
