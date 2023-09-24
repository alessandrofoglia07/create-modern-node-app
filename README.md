<div align="center">

<br>

# **Modern** Node.js express.js API template

This modern template is a **complete** Node.js express.js API template with **all** the bells and whistles you need to get started with your next Node.js express.js API project fast.

</div>

<br>

## Table of contents

-   [Features](#features)
-   [Getting started](#getting-started)
    -   [Download as a zip file](#download-as-a-zip-file)
    -   [Clone using git](#clone-using-git)
    -   [Create a new repository on GitHub using this template](#create-a-new-repository-on-github-using-this-template)
-   [Next steps](#next-steps)
-   [Commands](#commands)
    -   [Default commands](#default-commands)
    -   [Docker commands](#docker-commands)
-   [License](#license)

<br>

## Features

This template includes the following features:

<div style="width: 100%">

-   <div style="display: flex; align-items: center; transform: translateY(30%)"><img style="width: 10%; border: none!important; margin-right: 10px; margin-bottom: 20px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fexpress-js-icon-20.png&f=1&nofb=1&ipt=9d84d6621033bfc9910d7c6516d81ce415f6203d6540c7851d3fc9bb7d612f00&ipo=images">

    **[express.js](https://expressjs.com/)** - Fast, unopinionated, minimalist web framework for Node.js
    </div>

-   <div style="display: flex; align-items: center; transform: translateY(30%)"><img style="width: 10%; border: none!important; margin-right: 10px; margin-bottom: 20px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgrm-project-template-bucket.s3.ap-northeast-2.amazonaws.com%2Flesson%2Fles_PLRpp_1533201113362%2F82a795ce49206487e89f0f9c0c319c0d6ec916c78a29368a8fd7f8cec4683e74.png&f=1&nofb=1&ipt=9d1048ec1311436347cbfc136eb020e056df7c275b376a4bdd6807edda2d6e43&ipo=images">

    **[mongoose.js](https://expressjs.com/)** - Elegant MongoDB object modeling for Node.js
    </div>

-   <div style="display: flex; align-items: center; transform: translateY(30%)"><img style="width: 10%; border: none!important; margin-right: 10px; margin-bottom: 20px" src="https://raw.githubusercontent.com/alessandrofoglia07/modern-vite-react-app/main/public/logos/ts-logo.png">

    **[Typescript](https://www.typescriptlang.org/)** - A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
    </div>

-   <div style="display: flex; align-items: center; transform: translateY(30%); margin-top: -20px"><img style="width: 10%; border: none!important; margin-right: 10px; margin-bottom: 20px" src="https://raw.githubusercontent.com/alessandrofoglia07/modern-vite-react-app/main/public/logos/pnpm-logo.png">

    **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager.
    </div>

-   <div style="display: flex; align-items: center; transform: translateY(15%)"><img style="width: 10%; border: none!important; margin-right: 10px; margin-bottom: 20px" src="https://raw.githubusercontent.com/alessandrofoglia07/modern-vite-react-app/main/public/logos/docker-logo.png">

    **[Docker](https://www.docker.com/)** - A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
    </div>

-   <div style="display: flex; align-items: center; transform: translateY(25%)"><img style="width: 10%; border: none!important; margin-right: 10px; margin-bottom: 20px" src="https://raw.githubusercontent.com/alessandrofoglia07/modern-vite-react-app/main/public/logos/eslint-logo.svg">

    **[ESLint](https://eslint.org/)** - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
    </div>

-   <div style="display: flex; align-items: center; transform: translateY(25%)"><img style="width: 10%; border: none!important; margin-right: 10px; margin-bottom: 20px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandslogos.com%2Fwp-content%2Fuploads%2Fimages%2Flarge%2Fprettier-logo.png&f=1&nofb=1&ipt=1c224c986059edaabb2b01cdb02367258fff0b442aa645a1a65d69fe36dfd35b&ipo=images">

    **[Prettier](https://prettier.io/)** - An opinionated code formatter that enforces a consistent code style across your entire codebase.
    </div>

</div>

<br>
<br>

## Getting started

To get started with this template, you can either download the template as a zip file, clone it using git or create a new repository on GitHub using this template.

### Download as a zip file

Click on the `Code` button at the top of the page and then click on `Download ZIP`. Once the download is complete, extract the zip file and open the folder in your favorite code editor.

### Clone using git

Open your terminal and run the following command:

```bash
git clone https://github.com/alessandrofoglia07/modern-node-express-app.git my-app
```

Once the project is cloned, open the folder in your favorite code editor.

### Create a new repository on GitHub using this template

Click on the `Use this template` button at the top of the page. Once the repository is created, clone it using git and open the folder in your favorite code editor.

<br>

## Next steps

Once you have downloaded or cloned the template, you need to install the dependencies. To do so, run the following command:

```bash
pnpm install
```

Note: If you don't have pnpm installed, you can install it by running the following command:

```bash
npm install -g pnpm
```

Once the dependencies are installed, you can start the development server by running the following command:

```bash
pnpm dev
```

<br>

## Commands

This template includes the following commands:

### Default commands

### `pnpm dev`

Runs the server in the development mode on [http://localhost:5000](http://localhost:5000) by default.

### `pnpm build`

Builds the app for production to the `dist` folder.

### `pnpm start`

Runs the server in the production mode.

### `pnpm lint`

Runs ESLint on the `src` folder.

### `pnpm lint:fix`

Runs ESLint on the `src` folder and fixes the errors.

### `pnpm format`

Runs Prettier on the `src` folder and fixes the errors.

### `pnpm format:check`

Runs Prettier on the `src` folder and checks for errors.

### Docker commands

### `pnpm docker-build:dev`

Builds the app for development using Docker.

### `pnpm docker-build:prod`

Builds the app for production using Docker.

### `pnpm docker-run:dev-win`

Runs the server in development mode using Docker on Windows on [http://localhost:5000](http://localhost:5000) by default.

### `pnpm docker-run:dev-linux`

Runs the server in development mode using Docker on Linux on [http://localhost:5000](http://localhost:5000) by default.

### `pnpm docker-run:prod`

Runs the server in production mode using Docker on [http://localhost:5000](http://localhost:5000) by default.

#### You can customize these commands in the `package.json` file. You can edit the environment variables in the `.env` file and the Dockerfiles.

<br>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<br>

<div align="center">
    Made with 💜 by <a href="https://github.com/alessandrofoglia07" style="color: white; text-decoration: underline;">Alexxino</a>
</div>
