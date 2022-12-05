# Panda Gin

Panda Gin is a custom e-commerce website for a Belgian organic gin. It is characterized by minimalistic approch, smooth animations and user-friendly interactions.

## Technologies

-   Typescript,
-   React (incl. hooks, custom hooks, Context Api, portals, functional components),
-   React Router Dom,
-   React Helmet,
-   React Hook Form,
-   Axios,
-   SASS,
-   Framer Motion,
-   JWT
-   RWD techniques

## Project structure

Inside the repository, you'll find the following folder structure

```
PROJECT_ROOT
├── public              # static assets
├── backend             # backend files repository
└── src
    ├── api             # API enpoints and axios instance
    ├── assets          # Images and svg used in project
    ├── common          # Custom functions and functionalities frequently used in multiple places
    ├── components      # Folders with React components definition, their typing and stylling
    ├── context         # React context and reducer files
    ├── data            # Aggregated datasets used in project
    ├── pages           # Project page files
    └── sass            # Variables and global styles

```

## How to run this app

1. Clone or download repository
2. Enter the repository root folder
3. Run following command in terminal:

```
npm install && npm run start
```

4. Open second terminal instance, enter backend folder and run command:

```
npm install && npm run start:dev
```

5. In the repository root folder rename .env.exmaple file into .env and inside that file use fallowing environment variable:

```
REACT_APP_API_URL = http://localhost:9595/
```

6. Enjoy

## Login and registration

To login as admin use the fallowing credentials

Login:

```
admin@admin.com
```

Password:

```
admin
```

You can also register as new user

## Screenshots

## Final note

All rights belong to Panda Gin,
the head office (9 a.m. to 5 p.m.)
31 Drève de la Meute,
1410 Waterloo, Belgium.
If you are intrested in buying their products visit: https://www.panda-gin.com/.
Project made only for educational purposes.
