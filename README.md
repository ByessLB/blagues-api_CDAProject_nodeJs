# Projet Backend : Carambar&Co

**Nom du Projet :** blagues-api

## Technologies Utilisées :

- **Backend :** Node.js
- **Framework :** Express.js
- **Base de Données :** SQLite
- **ORM :** Sequelize
- **Documentation :** Swagger
- **Developement :** Nodemon

## Structure du Projet :

- **config/**
    - **config.json :** configuration de la base de données pour différents environnements.
    - **swagger.js :** Configuration de Swagger pour la documentation de l'API.
- **controllers/**
    - **blaguesController.js :** Contrôleurs pour les opérations CRUD sur les blagues.
- **migrations/**
    - Fichier de migration pour créer et gérer les tables de la base de données.
- **models/**
    - **blague.js :** Modèle Sequelize pour les blagues.
    - **index.js :** Initialisation de Sequelize et des modèles.
- **routes/**
    - **blagues.js :** Définition des routes pour les opérations CRUD sur les blagues.
- **seeders/**
    - Dichier pour insérer des données initiales dans la base de données.
- **env :** Fichier de configuration des variables d'environnement.
- **app.js :** Point d'entrée de l'application.
- **database.sqlite :** Fichier de la base de données SQLite.

## Liens Projet

- **GitHub-pages :** https://byesslb.github.io/blagues-api_CDAProject_frontend_ReactJs/

- **render.com :** https://blagues-api.onrender.com

Ajouter une blague :
- **postman :** (POST) https://blagues-api.onrender.com/api/ajouterBlague

voir liste blagues:
- **postman :** (GET) https://blagues-api.onrender.com/api/blagues

voir une blague:
- **postman :** (GET) https://blagues-api.onrender.com/api/blagues/{id}

voir une blague aléatoire:
- **postman :** (GET) https://blagues-api.onrender.com/api/random