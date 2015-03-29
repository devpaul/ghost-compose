FROM postgres:9.4
ENV POSTGRES_DATA /var/lib/postgresql/data
RUN mkdir -p $POSTGRES_DATA && chown -R postgres.postgres $POSTGRES_DATA && gosu postgres initdb -D $POSTGRES_DATA
VOLUME $POSTGRES_DATA
CMD ["true"]