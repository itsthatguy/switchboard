# Switchboard Multi-Service Chat Client

[![Build Status](https://travis-ci.org/itsthatguy/switchboard.svg?branch=master)](https://travis-ci.org/itsthatguy/switchboard)

Switchboard is built using a modular adapter system that allows you to integrate custom chat protocols with relative ease. Simply follow the 'Adapter Interface Requirements'. Switchboard and the client will handle the rest.

> NOTE: native desktop support for mac/windows/linux.

## Protocol adapter list

- ~~IRC (done)~~
- Slack (not-started)
- Flowdock (not-started)
- Campfire (not-started)
- others... (not-started)

### Install requirements
```shell
npm install
bower install
```

### Running things
```shell
# Running without nw.js (many features will break)
$(npm bin)/gulp serve # starts the app in the browser

# Running in nw.js
$(npm bin)/gulp watch
npm start # starts the app in webkit (use with gulp watch)
```

### Running the IRC server locally
```shell
$(npm bin)/ircdjs
```

## Contributing

There's a ton of work to do. Want to help?

### Ways to help:

- Submit feature requests using github issues
- Build adapters
- Give code review/suggestions
- Contact me on twitter: [@itg](http://twitter.com/itg)
