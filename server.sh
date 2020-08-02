#!/usr/bin/env bash

echo "Command: $1"

ENTRY='main.js'
if [[ -n $2 ]]; then
    ENTRY=$2
fi
export ENTRY=$ENTRY

if [[ $1 == "build" ]]; then
    docker build -t api_server .
elif [[ $1 == "up" ]]; then
    if [[ $2 == '-d' ]]; then
        docker-compose up -d
    elif [[ $3 == '-d' ]]; then 
        docker-compose up -d
    else
        docker-compose up
    fi
elif [[ $1 == "down" ]]; then
	echo 'docker-compose down'
	docker-compose down
else
    echo 'Command missing ./server.sh [up | down]'
fi
