#BEFORE FIRST RUN:

1. install nodejs - `http://nodejs.org/download/`

1. install npm - `curl https://npmjs.org/install.sh | sh`

1. install Grunt CLI - `npm install -g grunt-cli`

1. install nodejs packages - `npm install`


build project - `grunt`

build project and run server - `grunt dev`



#HOW TO DEPLOY SITE

Before deploy you must build website by `grunt` command

Prepare for deploy

1. `brew update`

1. `brew install python3`

1. `pyvenv venv`

1. `. venv/bin/activate`

1. `pip install ghp-import`


Run deploy

1. `ghp-import -p dest`