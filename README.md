# Ionic 2 Playground example

If this is the first time you're using Ionic. You must install the following components:

  - Node JS (https://nodejs.org/en/)
  - Ionic Framework (Install v1 and v2 versions): 
  ```sh
$ npm install -g ionic@beta
```
  - Install Cordova (last version)
```sh
$ npm install -g cordova
```

### Info about documentation:
 - Ionic Framework V2 (use in in this example): http://ionicframework.com/docs/v2/
 - Ionic Framework V1 (Stable version although not used in this example): http://ionicframework.com/getting-started/

### Instructions for using this repository :
 - Clonar el repositorio en el directorio que deseas con:
```sh
$ git clone https://github.com/mugan86/ionic-2-playground.git
```
- Install dependencies
```sh
$ npm install
```
- Install use cordova plugins in this project.

**Geolocation (https://www.npmjs.com/package/cordova-plugin-geolocation)**
```sh
This requires cordova 5.0+ ( current stable 1.0.0 )
cordova plugin add cordova-plugin-geolocation

Older versions of cordova can still install via the deprecated id ( stale 0.3.12 )
cordova plugin add org.apache.cordova.geolocation
```

**Inappbrowser (https://www.npmjs.com/package/cordova-plugin-inappbrowser)**
```sh
This requires cordova 5.0+ ( current stable 1.0.0 )
cordova plugin add cordova-plugin-inappbrowser

Older versions of cordova can still install via the deprecated id ( stale 0.3.12 )
cordova plugin add org.apache.cordova.inappbrowser
```
