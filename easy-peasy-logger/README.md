<h1 align="center">EasyPeasyLogger</h1>

<p align="center">
  <b>The world's easy-peasy, the most fun javascript logger.</b></br>

</p>

<p align="center">
		<a href="https://npmcharts.com/compare/@costlydeveloper/**easy-peasy-logger**?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@costlydeveloper/easy-peasy-logger.svg" height="20"/></a>
    <a href="https://www.npmjs.com/package/@costlydeveloper/easy-peasy-logger"><img alt="NPM Version" src="https://img.shields.io/npm/v/@costlydeveloper/easy-peasy-logger.svg" height="20"/></a>
    <a href="https://github.com/costlydeveloper/easy-peasy-logger/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/costlydeveloper/easy-peasy-logger.svg" height="20"/></a>
    <a href="https://github.com/costlydeveloper/easy-peasy-logger/graphs/commit-activity"><img alt="Maintained" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" height="20"/></a>
    <a href="https://costlydeveloper.github.io/easy-peasy-logger/"><img alt="undefined" src="https://awesome.re/badge.svg" height="20"/></a>
</p>

<div align="center">
      <a style="padding-right: 10px" href="https://www.npmjs.com/package/@costlydeveloper/easy-peasy-logger" rel="noopener">
        <img width="60px" src="https://raw.githubusercontent.com/costlydeveloper/easy-peasy-logger/main/docs/assets/npm.png" alt="Npm repo" />
      </a>
      <a style="padding-left: 10px" href="https://github.com/costlydeveloper/easy-peasy-logger" rel="noopener">
          <img
          src="https://raw.githubusercontent.com/costlydeveloper/easy-peasy-logger/main/docs/assets/GitHub-Mark-32px.png"
          alt="GitHub repo"
        />
      </a>
    </div>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

#### You are welcome to contribute to this lib ❤️

### What is the purpose of Easy Peasy Logger?

The main goal is to make different color logs when you debug a large feature or multiple files, it becomes easier and faster to notice the log result instead of traditional file and line reading from the browser console.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## Installation

```
npm install @costlydeveloper/easy-peasy-logger
```

ES6 import

`import { Log } from '@costlydeveloper/easy-peasy-logger';`

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## Documentation

Are you lazy to read the documentation? Ok, go to the code generator: [HERE](https://costlydeveloper.github.io/easy-peasy-logger/).

### Examples

**E.g. 1:** different color logs it becomes easier and faster to notice the log result.

```js
const user = { user: '123' }; // mock data

Log.green('EXAMPLE')();
Log.red('EXAMPLE')(user);
Log.blue('EXAMPLE')(user);
Log.purple('EXAMPLE')(user);
Log.yellow('EXAMPLE')(user);
```

![eg4.png](https://raw.githubusercontent.com/costlydeveloper/easy-peasy-logger/main/docs/assets/eg4.png)

---

**E.g. 2:** if you need more colors, make a custom color:

```js
Log.customColor('#B19F88', 'My note...')('Log anything here..');
```

![customcolor.png](https://raw.githubusercontent.com/costlydeveloper/easy-peasy-logger/main/docs/assets/custom-color.png)

---

| Predefined color types |
| ---------------------- |
| green                  |
| red                    |
| blue                   |
| purple                 |
| yellow                 |

---

## Additional options

![epl.png](https://raw.githubusercontent.com/costlydeveloper/easy-peasy-logger/main/docs/assets/epl.png)

---

**E.g. 3:** If you need some funny styling for any reason, use additional arguments:

```js
Log.red('My note...', 'U', 20)('Log anything here..');
```

![red.png](https://raw.githubusercontent.com/costlydeveloper/easy-peasy-logger/main/docs/assets/red.png)

---

### Available options

| arguments        | type   | put on        |
| ---------------- | ------ | ------------- |
| B                | string | bold          |
| I                | string | italic        |
| S                | string | strikethrough |
| U                | string | underline     |
| a number e.g. 30 | number | font size     |

---

## Enable / Disable Logs (development mode)

ES6 import:

`import { LogRules } from '@costlydeveloper/easy-peasy-logger';`

Use this feature to disable logs, if you wand to disable all logs, invoke the method in the start of your app:

`LogRules.disableLog();`

Or enable it again in any part of your code:

`LogRules.enableLog();`

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

### License

Licensed under [MIT](https://opensource.org/licenses/MIT).

P.S. ❤️ strike the star on the Github repo! Thank you!
