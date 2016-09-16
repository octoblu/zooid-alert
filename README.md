# zooid-alert

[![Build Status](https://travis-ci.org/octoblu/zooid-alert.svg?branch=master)](https://travis-ci.org/octoblu/zooid-alert)
[![Test Coverage](https://codecov.io/gh/octoblu/zooid-alert/branch/master/graph/badge.svg)](https://codecov.io/gh/octoblu/zooid-alert)
[![Dependency status](http://img.shields.io/david/octoblu/zooid-alert.svg?style=flat)](https://david-dm.org/octoblu/zooid-alert)
[![devDependency Status](http://img.shields.io/david/dev/octoblu/zooid-alert.svg?style=flat)](https://david-dm.org/octoblu/zooid-alert#info=devDependencies)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

[![NPM](https://nodei.co/npm/zooid-alert.svg?style=flat)](https://npmjs.org/package/zooid-alert)

## Install
```
npm install --save zooid-alert
```

## Props
| Prop        | Type    | Default | Description                          |
| ------------| --------| --------| -------------------------------------|
| children    | node    |         | Alert message. |
| className   | string  |         | Additional CSS classes to merge into the component |
| dismissible | boolean | false   | Add a close button when truthy |
| type        | enum    | info    | Type of alert. Options: **info**, **warning**, **error**, **success** |

## Example
```js
import Alert from 'zooid-alert'
```
