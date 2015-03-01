#!/bin/sh
echo Importing Database Data
gosu postgres postgres --single < /docker-entrypoint-initdb.d/data/create.sql
echo Done Importing dataset