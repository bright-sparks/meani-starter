# MEANI Starter app
 
 MEANI fullstack integrates ionic framework and google material design(ionic material) into angular-fullstack yeoman generated app to share controller and services between the webapp and ionic app. It has full login/social login functionality for both apps, dashboard page, slide menu, ui-calendar integration and  cucumber protractor tests.


## Installation
```bash
npm install
```
```bash
bower install 
```
 
## Usage

```bash
grunt serve
```

## Usage
I'm actively developing it so there are still things to do and a lot more to DRY out. My goal is to share all code between webapp and ionic app except the templates, app.js and index.html.  I'll be developing it until it has to be private.
By the way Express server recognises the device type, so if you socially login using the ionic app on chrome it won't redirect you to ionic app's dashboard. It works on iphone and android simulators though. 
 