# `@bluebird-parking/seed`

> Package for seeding the Bluebird Parking database on GCP.

## Summary

This package and CLI is used as apart of the ETL process for Bluebird Parking seed data. It can:
- Create a Firestore Database
- Populate a Firestore Database with Seed Data
- Teardown a Firestore Database removing Seed Data

This package supports both being imported as a module; exposing a public API and being used as a CLI.

## Environment

- Google Cloud Platform
- Locally with the following environment variables:
  - GOOGLE_CLOUD_PROJECT=your_google_cloud_project
  
### Source Data

Data is sourced from a collection of government backed XML files containing over 20,000 car parks
across the UK. 

This data should be held within a Google Storage bucket called: `gs://bluebird-source-data`. 

## Installation

`npm install @bluebird-parking/seed`

## Dependencies

- Google Cloud Platform
- esm

## Development Dependencies

- @tomchinery/eslint-config
- @tomchinery/prettier
- @types/jest
- eslint
- jest
- prettier
- ts-jest
- typescript

## Contributing

This project is setup with Google Cloudbuild which will run on every branch and commit. 

### Unit Tests 

Please ensure each commit has unit tests and meets 100% test coverage threshold otherwise
the build will fail. 

There are two commands for unit testing:
- `npm run test` - which runs the test suite with coverage reports.
- `npm run test.watch` - which watches all files and runs the test suite with coverage reports on file changes.

### Linting

Please ensure each commit has no lint warnings or errors otherwise the build will fail. 

There is one command for linting:
- `npm run lint` - which runs ESLint and Prettier (fixing what can be fixed).

### Building

Please ensure each commit successfully builds otherwise the build will fail.

There is one command for building:
- `npm run build` - which compiles and builds the project.

### Conventional Commits

Please ensure each commit successfully complies with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) othervise the build will fail.

There are two methods in which conventional commits are enforced:
- A Commit Pre-Hook step using Husky
- A step on Cloudbuild to verify that a commit conforms to the conventional commit standard



### Deployment and Releases

@TODO: When semantic releases is setup on Cloudbuild.

## TODO:

- [] Setup Semantic Releases on CI/CD
- [] Document the following noted ENV_VARS:
  - [] Note: Should use the env_var for $GOOGLE_CLOUD_PROJECT.
  - [] Note: Should use env_var for DATA BUCKET URL
  - [] Note: Should use env_var for DATA/FIRESTORE DATABASE to load/remove data from

## License

See [LICENSE.md](https://github.com/Bluebird-Parking/bluebird-parking-seed/blob/master/LICENSE).

