# Ingredifind & Docker

## How to user Docker in testing environment:

### Install Docker

If you have not done so already, install and run docker. Here is the [link to download][https://docs.docker.com/get-docker/].

If you are using Linux / Ubuntu, follow post installation steps [here](https://docs.docker.com/engine/install/linux-postinstall/)

### Setup

We depend on some external files that are not present in the repo. You can download them as (requires [gcloud cli](https://cloud.google.com/sdk/docs/install#mac)):

```bash
gsutil cp gs://igfd-artifacts/GeoLite2-Country.mmdb backend/geoip-db/
```

Or you can download this file form [this](https://console.cloud.google.com/storage/browser/_details/igfd-artifacts/GeoLite2-Country.mmdb;tab=live_object?project=ingredifind) link.

Create a file at `backend/.env`. A sample of this file is present at [backend/cloudbuild/test.env](../backend/cloudbuild/test.env).

### Running Docker

Make sure docker is running before doing the following command.

```bash
$ docker compose up --build
```

To selectively run some services, or if you are just working on the FE, and don't need to run Stripe webhooks / admin endpoints, etc,
choose a subset of services as defined by the profiles in `docker-compose.yml`.

```bash
docker compose up --build --detach                     # Run the db + backend.
docker compose --profile=frontend up --build --detach  # Run the db + backend & serve the frontend.
docker compose --profile=admin up --build --detach     # Run the db + backend + pg admin + django admin.
docker compose --profile=admin --profile=frontend --profile=stripe up --build --detach  # Run the db + backend + pg admin + django admin + stripe + frontend
```

### Stopping Docker

`docker compose down`

## Setup Connections in PG Admin

-   Login to localhost:5050
-   Setup a master password - this is saved in the docker volume `ingredifind_pgadmin-data`
-   Import Servers as Tools > Import/Export Servers
-   Choose the file /home/pgadmin_docker_compose_servers.json
-   The password to connect to the postgres db is blank.

## Other admin operations

#### Clean up and start form a fresh PG database

`docker volume rm ingredifind_psql-data`

#### Clean up all resources created by the docker compose file

`docker compose down -v`

This deletes all the volumes (data stored by the database containers, pgadmin settings, etc.)
