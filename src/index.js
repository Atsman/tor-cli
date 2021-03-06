#!/usr/bin/env node

'use strict';

const commander = require('commander');
const actions = require('./actions');
const packageJson = require('../package.json');

commander
  .version(packageJson.version);

// custom functions

commander
  .command('socks-info [network]')
  .description('show socks-info for network')
  .action(network => actions.socksInfo(network));

commander
  .command('enable-socks-proxy [network]')
  .description('enables socks proxy')
  .action(network => actions.enableSocksProxy(network));

commander
  .command('disable-socks-proxy [network]')
  .description('disables socks proxy')
  .action(network => actions.disableSocksProxy(network));

// signals

commander
  .command('signal-newnym')
  .alias('sn')
  .description('switch to clean circuits')
  .action(() => actions.newnym());

// commands

commander
  .command('getInfo [keys...]')
  .description('get information that is not stored in configuration file')
  .action(keys => actions.getInfo(keys));

commander.parse(process.argv);

