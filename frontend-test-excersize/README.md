### Intro

- `backend/` contains nodejs application written in Fastify with TypeScript
- `frontend/` contains Angular application
- `design/` contains preview files in PNG


#### Run project

1. Install dependencies in `backend` and `frontend`
2. Run `start` script in both projects

Backend will be available at http://localhost:3000
Swagger at http://localhost:3000/swagger
Frontend at http://localhost:4200


#### What I allowed doing?

- Refactor awful code, make it beautiful and great again
- Creating new components, styles
- Changing everything in Frontend
- Use your favorite package manager
- Use git to commit changes part by part
- Decide what to do, how and in which order


#### What I restricted to do?

- Adding new dependencies



### Tasks


#### General

- Fix proxy config to make interaction between FE and BE work


#### Details screen

- Create API on BE to return single entity by id
- Create new screen according to design files
- Use `@ngrx` for fetching data (actions, effects, reducers)
- Write unit tests for components and state using `@ngrx/spectator`


#### Table

- Adjust page according to design files
- Make paginator react immediately on page selection and load corresponding page
- Add navigation to entity details ("Go to details" button)
- Write unit tests for components and state using `@ngrx/spectator`


#### NodeJS additional

- Add unit tests for [`DataController`](./backend/src/controllers/data.controller.ts)
