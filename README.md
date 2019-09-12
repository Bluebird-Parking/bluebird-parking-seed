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

`npm install -g @bluebird-parking/seed`

## Dependencies

- Google Cloud Platform:
  - Cloudbuild
  - Storage
  - KMS
- esm

## Development Dependencies

- @commitlint/cli
- @commitlint/config-conventional
- @tomchinery/eslint-config
- @tomchinery/prettier
- @types/jest
- eslint
- husky
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

Please ensure each commit successfully complies with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) otherwise the build will fail.

There are two methods in which conventional commits are enforced:
- A Commit Pre-Hook step using Husky
- A step on Cloudbuild to verify that a commit conforms to the conventional commit standard

### Deployment and Releases

Semantic Releases are automated on the build of the `master` branch. It will automatically tag the Github repository, generate release notes, and publish a new version of the package to npm.


What's included in each release is 
handled by [Semantic Release](https://github.com/semantic-release/semantic-release) through commit message convention. 

Here is an example of the release type that will be done based on commit messages:

| Commit message                                                                                                                                                                                   | Release type               | Version |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|--------|
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release                          | v1.0.1 |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release              | v1.1.0 |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release             | v2.0.0 |


### Dependencies

Please ensure you keep the dependency list up to date in the `README.md` as this makes it more obvious what packages this module depends on. 

## TODO:

- [] Setup Slack Cloudbuild Notifications
- [] Document Slack Github integration
- [] Document the following noted ENV_VARS:
  - [] Note: Should use the env_var for $GOOGLE_CLOUD_PROJECT.
  - [] Note: Should use env_var for DATA BUCKET URL
  - [] Note: Should use env_var for DATA/FIRESTORE DATABASE to load/remove data from

## License

See [LICENSE.md](https://github.com/Bluebird-Parking/bluebird-parking-seed/blob/master/LICENSE).

