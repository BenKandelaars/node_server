# Node Scripts

This repo consists a number of standalone scripts designed to be run in a dockerised Node.js environment

To facilitate learning the scripts are watched by a nodemon process run in the container that watches the script file for changes and restarts when one occurs. The local file system is mapped to the container to allow local changes mirrored inside the container.

#### Build
The nodemon container, named nodemon_watcher is built using
```
npm run build
```

#### Run
The nodenom_watcher container expects script_path to be passed to it in the docker run command. The port mapping is optional depending on whether you wish to access the script running in the container from port on the localhost.

Start container running script
``` 
docker run --publish [host port]:[container port] --volume $PWD/src:/app/src nodemon -L [script path]
```

#### Output connections
At least one script requires it to be able to make an output socket connection with another running script. In this case add the --network="host" flag to the docker run command as in the example below.

```
docker run --network="host" --volume $PWD/src:/app/src nodemon -L [script-path]
```

#### Development

Install npm packages using the _package-lock-only_ flag to prevent installation into the node_modules folder. 

```
npm install [package] --package-lock-only

npm run build
```
