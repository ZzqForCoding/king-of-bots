#! /bin/bash

test -e app.js && rm app.js
test -e app.css && rm app.css
mv *.js app.js
mv *.css app.css
