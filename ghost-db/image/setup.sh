#!/bin/bash
echo Importing SQL
until pg_isready -h postgres; do
	sleep 1
done

for f in /sql/*.sql; do
	echo Importing $f
	psql -h postgres -f $f
done