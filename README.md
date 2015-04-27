# Ghost blog docker deployment
This is an example ghost blog docker deployment using `docker-compose`. Development is made up of five
containers that host three services. Ghost, Postgres, and MailCatcher run in separate containers, and data
containers are provided for Ghost and Postgres.

## Requirements
* docker >= 1.6.0
* docker-compose >= 1.2.0
* (mac or win) boot2docker

## Quick Start
There is a race-condition that can cause Postgres to reject Ghost's authentication because Postgres is not
being started in single user mode.

* `docker-compose up postgres`
* `docker-compose up`
* connect to http://{ip}:2368

Use `boot2docker ip` to look up your docker host's ip address

It is recommended you add `ghost.dev` to your hosts file

## Helpful Commands
### Getting a Shell into a Data Container
get a list of all docker containers using `docker ps -a`

run a new container connected to the data container using
`docker run -it --volumes-from <data-hash> centos /bin/bash`
where `<data-hash>` is the hash reported by the docker ps command.

## Production deployment
TBD

## TODO
* Production deployments do not use the same database structure as development
* Create a good way for initializing postgres
