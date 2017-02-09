# remote-data-storage-ui

>An Angular2 project to serve as a core with base router to navbar functionality

Have a Core Module with logger navbar and various other things to start projects quickly

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Quick Start
Follow instructions and navigate to localhost:4200 
#### 
```sh
$ npm install -g angular-cli
$ git clone 
$ cd nav
$ npm install
$ ng serve
```
### Prerequisites

* [Nodejs](https://nodejs.org/en/download/package-manager/) - Needed for development environment
* [Angular2 CLI](https://cli.angular.io/) - Easy usage for setting up barebone angular projects components services


## Running

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Mock WebSocket
Discuss mock action queue socket
```
Give the example
```
#### Mock Backend
```
Give the example
```
#### Configuring
Discuss configs
```
Give the example
```

#### Adding Component| Service| Directive or Template

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Deployment

Deployment will be handled by loading js files /project to FMC and pointing the current GWT project there.


## Testing

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Static Analysis
####  Coverage

Explain what these tests test and why

```
Give an example
```

#### Lint

Explain what these tests test and why

```
Give an example
```


## Lodash

Great js/ts utility library. Provides a nice functional interface for working with objects
```js
var users = [
  { 'user': 'barney' },
      { 'user': 'fred' }
          ];

_.map(users, 'user');
// => ['barney', 'fred']

```

## Styling

Using scss for our style sheets. To learn more see the link at the bottom of the readme

Quick Example of nested styling with scss
```scss
$somevar: 10px;
div{
  width:$somevar;
    &>div.inner{
           ul{
	            li{}
		       }
		         }
			 }

```

Material2 is installed as well for basic ui styles.
This really makes responsiveness easier to accomplish.


## Versioning
1.0.0.beta...
Versioning will be handled via npm-bump.

```sh
npm install -g npm-bump
npm-bump major|minor|patch
```

## Authors

* *smoore2386** - ..


## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
To get more help on  `Angular2`  go check out the [Angular2](https://angular.io/)
To get more help on `scss`  go check out the [sass-lang](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html)
To get more help on `lodash` check out [lodash](https://lodash.com/).