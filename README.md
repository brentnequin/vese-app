# VESE App

## Local Development

### Requirements

* Python 3.9 w/ Pip
* Poetry
* Yarn

### Setup Instructions

From the project root, setup the local *backend* environment by running:

```sh
poetry shell
poetry install
```

Then setup the local *frontend* environment by running:

```sh
yarn install
```

### Running the frontend server

To start running a local instance of the *frontend* (Nuxt) server, run the following in the project root:

```sh
yarn dev
```

### Running the backend server

To start running a local instance of the *backend* (Django) server, run the following in the project root:

```sh
poetry run python api/manage.py runserver
```

## Heroku Setup

### Backend (api)
* [python-poetry-buildpack](https://github.com/moneymeets/python-poetry-buildpack.git)
* heroku/python
* [heroku-community/multi-procfile](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-multi-procfile)

### Frontend (client)
* heroku/nodejs
* [heroku-community/multi-procfile](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-multi-procfile)
