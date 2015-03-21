# MobileApp

How to setup development environment?

Follow the below instruction to setup local development. (https://www.npmjs.com/package/ionic)

1> Node installation 
   Download and install from https://nodejs.org/download/
   
2> Ionic installation
  C:\Users\yourname> npm install -g ionic

3> Cordova Installation
   C:\Users\yourname> npm install -g cordova

4> To create new ionic project
 C:\Users\yourname> ionic start myapp [template]
 
Where Named template starters:

tabs (Default)
sidemenu
maps
salesforce
tests
complex-list
blank

5> After adding new project add platform
C:\Users\yourname> cd myapp
C:\Users\yourname> ionic platform ios android

6> Testing in browser
C:\Users\yourname> ionic serve [options]

7> To build your App
C:\Users\yourname> ionic build ios

8> Emulating your app
Deploys the Ionic app on specified platform emulator. This is simply an alias for run --emulator.

C:\Users\yourname> ionic emulate ios [options]

9> Running your app
Deploys the Ionic app on specified platform devices. If a device is not found it'll then deploy to an emulator/simulator.

C:\Users\yourname> ionic run ios [options]
