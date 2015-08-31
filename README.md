# MEANI Starter app
 
 MEANI fullstack integrates ionic framework and google material design(ionic material) into angular-fullstack yeoman generated app to share controller and services between the webapp and ionic app. It has full login/social login functionality for both apps, dashboard page, slide menu, ui-calendar integration and  cucumber protractor tests.


## Installation
```bash
sudo npm install
```
```bash
bower install 
```
 
## Usage

```bash
grunt serve
```

## Note
I'm actively developing it so there are still things to do, refactor and DRY out. My goal is to create a fully test covered(BDD+TDD) working app that shares the same frontend controller/services between web and ionic apps. By the way, Express server recognises the device type to redirect after auth, so if you socially login using the ionic app on chrome it won't redirect you to ionic app's dashboard. It works on iphone and android simulators though. 
 