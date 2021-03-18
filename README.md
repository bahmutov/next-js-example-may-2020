# Next.js
Example [![ci status][ci image]][ci url] [![badges status][badges image]][badges url] [![renovate-app badge][renovate-badge]][renovate-app] ![cypress version](https://img.shields.io/badge/cypress-6.8.0-brightgreen) ![next version](https://img.shields.io/badge/next-10.0.9-brightgreen)

- Next.js
- Jest
- Cypress.io

## Database Setup

Copy the `.env.example` file to `.env` and add the database connection information.

You'll also need PostgreSQL for this.

### PostgreSQL Installation instructions

Follow the instructions from the PostgreSQL step in [UpLeveled's System Setup Instructions](https://github.com/upleveled/system-setup/blob/master/readme.md).

Run the following queries inside of `psql` to set up the database and the user:

```sql
CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
```

Then, to connect to the database using this new user, quit `psql` and reconnect:

```sh
\q
psql -U <user name> <database name>
```

[ci image]: https://github.com/bahmutov/next-js-example-may-2020/workflows/ci/badge.svg?branch=master
[ci url]: https://github.com/bahmutov/next-js-example-may-2020/actions
[badges image]: https://github.com/bahmutov/next-js-example-may-2020/workflows/badges/badge.svg?branch=master
[badges url]: https://github.com/bahmutov/next-js-example-may-2020/actions
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
