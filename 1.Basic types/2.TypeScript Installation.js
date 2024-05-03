/*
--------- change node version two ways-------------------------- 
=> bangla system: uninstall previous version, download latest version you want to install
=> using NVM(Node version Manager): go to and download https://github.com/coreybutler/nvm-windows
* download nvm and install
* version: nvm --version
* install any version: nvm install 18.20.2
* all versions list: nvm list
* switch version: nvm use 16.20.2

--------- install typescript globally into machine-------------------------- 
=> go to typescript website then download section, 
* npm i -g typescript. check version: tsc --version
* now transpiler is available into machine, now typescript is converted into JavaScript code
note: node cannot run typescript code. don't try: node test.ts in terminal
* so call typescript compiler: tsc index.ts, here tsc means typescript compiler
* don't put .ts file and .js file into same location.
* configure .js output file location, in vs code terminal: tsc --init 
*/
