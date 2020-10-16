<h1 align="center">
    <img alt="Happy" title="Happy" src="https://res.cloudinary.com/stefanosaffran/image/upload/v1602883624/Omnistack/f1f2i0cfpgo26fn4kjht.svg" />
</h1>

<h2 align="center">
   📚 NextLevelWeek 3.0 📚
</h2>

<p align="center">
  <img alt="Project programing languages count" src="https://img.shields.io/github/languages/count/StefanoSaffran/happy?color=15C3D6&labelColor=000000">
   <img alt="Repository size" src="https://img.shields.io/github/repo-size/StefanoSaffran/happy?color=15C3D6&labelColor=000000">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/StefanoSaffran/happy?color=15C3D6&labelColor=000000">
  <img alt="Made by Stefano" src="https://img.shields.io/badge/made%20by-StefanoSaffran-%20?color=15C3D6&labelColor=000000">
  <img alt="Project top programing language" src="https://img.shields.io/github/languages/top/StefanoSaffran/happy?color=15C3D6&labelColor=000000">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=15C3D6&labelColor=000000" alt="PRs welcome!" />
  <img alt="GitHub license" src="https://img.shields.io/github/license/StefanoSaffran/happy?color=15C3D6&labelColor=000000">
</p> 

<p align="center">
  <a href="#computer-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-built-with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Get in touch</a>
</p>
<p align="center">
  <a href="https://insomnia.rest/run/?label=Happy%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FStefanoSaffran%2Fhappy%2Fmain%2FInsomnia_2020-10-16" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<br>



## :computer: Project 

 Happy is an application that aims helping to bring together people and orphanages to make many children's day happier.

<p align="center">
  <img alt="Happy" src="https://res.cloudinary.com/stefanosaffran/image/upload/v1602883582/Omnistack/om7i9zmtfjusiiszszch.png" width="100%">
</p>

 ## :rocket: Built with

This project was developed with the following technologies:

<details>
  <summary>Server</summary>

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [Typescript](https://www.typescriptlang.org/)
-   [TypeORM](https://typeorm.io/)
-   [SQLite](https://www.sqlite.org/index.html)
-   [TS-Node-Dev](https://www.npmjs.com/package/ts-node-dev)
-   [Cors](https://www.npmjs.com/package/cors)
-   [Yup](https://github.com/jquense/yup)
-   [VS Code](https://code.visualstudio.com/)

</details>

<details>
  <summary>Web</summary>

-   [React](https://pt-br.reactjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Axios](https://www.npmjs.com/package/axios)
-   [React Icons](https://react-icons.netlify.com/#/)
-   [Yup](https://github.com/jquense/yup)
-   [Leaflet](https://leafletjs.com/)
-   [React Leaflet](https://react-leaflet.js.org/)
-   [VS Code](https://code.visualstudio.com/)

</details>

<details>
  <summary>Mobile</summary>

-   [React](https://pt-br.reactjs.org/)
-   [React Native](https://reactnative.dev/)
-   [Expo](https://expo.io/learn)
-   [Typescript](https://www.typescriptlang.org/)
-   [React Navigation](https://reactnavigation.org/)
-   [Axios](https://www.npmjs.com/package/axios)
-   [Expo Google Fonts](https://github.com/expo/google-fonts)
-   [React Native Maps](https://github.com/react-native-maps/react-native-maps)
-   [VS Code](https://code.visualstudio.com/)

</details>

## :information_source: How to run

### Requirements

To run the application you will need:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/) 

### Backend

Now clone the repository and install the dependencies.
```bash
# to clone the repository
$ git clone https://github.com/StefanoSaffran/happy.git

# go into the server folder
$ cd happy/server

#install the backend dependencies
$ yarn

```

```bash
# run migrations
$ yarn typeorm migration:run

# run api
$ yarn dev:server
```

### Frontend

```bash
# in another tab of the terminal install the web dependencies and run it 
$ cd web
$ yarn
$ yarn start
```

### Mobile

The Application was developed using Expo. It is a free and open source toolchain built around React Native to facilitate the process of running and testing applications. [Click here](https://expo.io/learn) to get start with Expo.

```bash
# install the dependencies
cd mobile
yarn
```

In order to run the application on your device, you need to change the ip config.

[api.ts](https://github.com/StefanoSaffran/happy/blob/master/mobile/src/services/api.ts)
```javascript
  baseURL: 'http://192.168.1.5:3333',
```
replace 192.168.1.5 with your machine's ip.

Now with everything on place, run the application.

```bash
# to run the app
yarn start
```

Expo will open a page in your browser, scan the QRcode on the page and wait for the app to load.

> The Application was developed and tested on Android Studio Emulator.

## 🔖 Layout

In the links below you will find the layout of the web and mobile project. You need to have an account at [Figma] (http://figma.com/) to access it.

- [Layout Web](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web)
- [Layout Mobile](https://www.figma.com/file/X27FfVxAgy9f5IFa7ONlph/Happy-Mobile)


## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/StefanoSaffran/happy/blob/master/LICENSE) for more information

## :mailbox_with_mail: Get in touch!

<a href="https://stefanosaffran.com" target="_blank" >
  <img alt="Website - Stefano Saffran" src="https://img.shields.io/badge/Website--%23F8952D?style=social">
</a>&nbsp;&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/stefanosaffran/" target="_blank" >
  <img alt="Linkedin - Stefano Saffran" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:stefanoas@gmail.com" target="_blank" >
  <img alt="Email - Stefano Saffran" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 

---

Made with :coffee: and ❤️ by Stefano Saffran.



