# Express.js with TypeScript (Scaffolding)

This is just a **minimal** production-ready scaffolding to get started quickly with most Express.js applications with TypeScript, at least on my current use-cases. It covers the most common setup and configuration that I will _probably_ need for most projects, so I don't have to repeat the code constantly. This is obviously my personal approach and it will change a lot with time and experience (which I hope happens frequently). If this scaffolding also fits your needs or inspires you in some way (by copypasting), I leave the entire code at your disposal as a template for your own projects if you wish and... feel free to make any changes you want, that's what it's made for.

All dependencies will be kept updated to their latest version or replaced as needed at my discretion.

---

## Quick Start

1\. Open your terminal or command prompt, hope it is Alacritty with ZSH... **jk**.

2\. Clone the repo:

`git clone https://github.com/DevCorvus/express-scaffolding.git`

3\. Go to the project directory:

`cd express-scaffolding`

4\. Install dependencies:

`npm install`

5\. Run the development environment:

`npm run dev`

All done! (hope so)

> _It's recommended creating a `.env` file with `NODE_ENV` (development) and `PORT` (8000) variables for local development._

---

### Other commands:

Linting and formatting: `npm run lint`

Run tests: `npm test`

Build/Transpile TypeScript files: `npm run build`

Run application with node (before building): `npm run start`

Run application with a process manager (before building): `npm run start:pm2`

---

## Features

- All TypeScript, cuz I love it
- MVC pattern
- Project structure by type (simple but not too scalable)
- Express.js
- Helmet
- CORS
- Redirect over HTTPS in production
- Validation (zod)
- Password encryption utilities (bcrypt)
- Logging (winston)
- Rate limiter (in-memory)
- Process manager (pm2)
- Testing (jest/supertest)
- Linting and formatting (ESlint/Prettier)
- Containerization with Docker and NGINX as a reverse proxy and load balancer (Experimental/Incomplete)
- Some others too lazy to mention...

> Most of them are very basic, generic or half done but they serve their purpose as a good and **quick** starting point.

---

## Project Structure

This is quite redundant because the names are self-explanatory but I was excited to make the table...

| Name                   | Description                                       |
| ---------------------- | ------------------------------------------------- |
| **src/**               | Source files                                      |
| **src/\_\_tests\_\_/** | Directory for non-specific tests                  |
| **src/config/**        | The main config files of the whole Express app    |
| **src/controllers/**   | The controllers of the Express app                |
| **src/core/**          | Core functionality like the actual Express server |
| **src/middlewares/**   | The middlewares of the Express app                |
| **src/routes/**        | The routes of the Express app                     |
| **src/utils/**         | Reusable utilities and library source code        |
| **src/index.ts**       | Entry file of the whole Express app               |

**NOTE: Test files are not transpiled into the build.**

---

I think I'm done here, thanks for reading and hope you have a nice day. Keep coding! ❤️

![Ryan Howard Bj Novak GIF](https://c.tenor.com/c4YEuiMQfBAAAAAd/ryan-howard-bj-novak.gif)

_\- DevCorvus._
