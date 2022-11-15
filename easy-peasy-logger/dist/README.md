<h1 align="center">EasyPeasyLogger</h1>

<p align="center">
  <b>The world's easy-peasy, the most fun javascript logger.</b></br>
</p>

<p align="center">
		<a href="https://npmcharts.com/compare/@costlydeveloper/**easy-peasy-logge**?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@costlydeveloper/easy-peasy-logge.svg" height="20"/></a>
    <a href="https://www.npmjs.com/package/@costlydeveloper/easy-peasy-logge"><img alt="NPM Version" src="https://img.shields.io/npm/v/@costlydeveloper/easy-peasy-logge.svg" height="20"/></a>
    <a href="https://github.com/costlydeveloper/easy-peasy-logge/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/costlydeveloper/easy-peasy-logge.svg" height="20"/></a>
    <a href="https://github.com/costlydeveloper/easy-peasy-logge/graphs/commit-activity"><img alt="Maintained" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" height="20"/></a>
    <a href="https://costlydeveloper.github.io/easy-peasy-logge/"><img alt="undefined" src="https://awesome.re/badge.svg" height="20"/></a>
</p>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## You are welcome to contribute to this lib ❤️

## Installation

```
npm install @costlydeveloper/easy-peasy-logger
```

ES6 import

```
import { Log } from '@costlydeveloper/easy-peasy-logger';
```

## Documentation

Are you lazy to read the documentation? Ok, go to the code generator: [HERE](https://costlydeveloper.github.io/easy-peasy-logger/).

### Use examples

e.g. 1:

```
Log.red('My note...', 'U', 20)('Log anything here..');
```

![red.png](https://raw.githubusercontent.com/costlydeveloper/easy-peasy-logger/main/docs/assets/red.png)

---

e.g. 2:

```
Log.blue('My note...', 20)('Log anything here..');
```

![blue.png](https://raw.githubusercontent.com/costlydeveloper/easy-peasy-logger/main/docs/assets/blue.png)

---

e.g. 3 (custom color):

```
Log.customColor('#B19F88', 'My note...', 'U', 20)('Log anything here..');
```

![customcolor.png](https://raw.githubusercontent.com/costlydeveloper/easy-peasy-logger/main/docs/assets/custom-color.png)

---

e.g. 4:

```
  const user = { user: '123' }; // mock data

    Log.green('EXAMPLE')();
    Log.red('EXAMPLE')(user);
    Log.blue('EXAMPLE')(user);
    Log.purple('EXAMPLE')(user);
    Log.yellow('EXAMPLE')(user);
```

![eg4.png](https://raw.githubusercontent.com/costlydeveloper/easy-peasy-logger/main/docs/assets/eg4.png)

---

### Perdefined color tyes

| color type | color   |
| ---------- | ------- |
| green      | #31A821 |
| red        | #DA5555 |
| blue       | #5560DA |
| purple     | #A955DA |
| yellow     | #EFEC47 |

---

## Additional options

![epl.png](https://raw.githubusercontent.com/costlydeveloper/easy-peasy-logger/main/docs/assets/epl.png)

### Styling the title

| arguments        | type   | put on        |
| ---------------- | ------ | ------------- |
| B                | string | bold          |
| I                | string | italic        |
| S                | string | strikethrough |
| U                | string | underline     |
| a number e.g. 30 | number | font size     |

### Enable / Disable (development mode)

ES6 import:

```
import { LogRules } from '@costlydeveloper/easy-peasy-logger';
```

Use this feature to disable logs, if you wand to disable all logs, invoke the method in the start of your app:

`LogRules.disableLog();`

Or enable it again in any part of your code:

`LogRules.enableLog();`

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

### License

Licensed under [MIT](https://opensource.org/licenses/MIT).

P.S. ❤️ strike the star on the Github repo! Thank you!
