FROM postgres:9.4
RUN mkdir -p /docker-entrypoint-initdb.d/data
ADD create.sql /docker-entrypoint-initdb.d/data/
ADD setup.sh /docker-entrypoint-initdb.d/