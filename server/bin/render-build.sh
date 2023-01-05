set -o errexit

yarn install
yarn db:seed
yarn migrate:latest