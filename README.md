# calendly-auto-wdio
POC for WebdriverIO for Calendly browser automation


WebdriverIO setup guide

Setup project
mkdir webdriverio-test && cd webdriverio-test
npm init -y

Install CLI
npm i --save-dev @wdio/cli

Generate config file
./node_modules/.bin/wdio config -y

Create Spec Files
mkdir -p ./test/specs

Enable sync mode
npm install —save-dev @wdio/sync

Run Suite
./node_modules/.bin/wdio wdio.conf.js
