## Create Project
```sh
$ docker compose build
$ docker compose run --rm app yarn create next-app task-manager-by-actions --ts\ && mv task-manager-by-actions/* . && mv task-manager-by-actions/.* . && rm -r task-manager-by-actions
```

## Prisma
```sh
$ docker compose up
$ yarn add -D prisma
$ npx prisma init
$ npx prisma db push
$ npx prisma generate
```