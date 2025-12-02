# Migration Notes

### Local Cloud SQL

Download Cloud SQL Proxy from [here](https://cloud.google.com/sql/docs/mysql/connect-admin-proxy#mac-m1)

```bash
mkdir /var/cloudsql
chmod 777 /var/cloudsql
./cloud_sql_proxy -dir=/var/cloudsql
```

Host in .env file should be `/var/cloudsql/ingredifind:europe-west1:ingredifind-db`

#### Connecting psql command line

```bash
psql "sslmode=disable host=/var/cloudsql/ingredifind:europe-west1:ingredifind-db user=backend dbname=ingredifinddb"
```

Password is stored [here](https://console.cloud.google.com/security/secret-manager/secret/backend-secrets/versions?project=ingredifind)

## Dump and restore

```bash
pg_dump -h ingredifind-database.cakbecw82xts.eu-west-3.rds.amazonaws.com -U postgres -f dump.sql --create ingredifind_backend
```

Replace `ingredifind_database` with `ingredifinddb`
Replace `OWNER TO postgres` with `OWNER TO backend`

```bash
psql "sslmode=disable host=/var/cloudsql/ingredifind:europe-west1:ingredifind-db user=backend dbname=postgres" --file dump.sql
```
