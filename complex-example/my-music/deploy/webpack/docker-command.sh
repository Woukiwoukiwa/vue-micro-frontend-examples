#!/bin/bash

if test -d node_modules;
then
    echo node modules exists;
else
    echo install node modules
    yarn install
fi

echo run docker command;
yarn docker-command;