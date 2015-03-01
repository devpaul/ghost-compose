FROM centos
RUN groupadd -r postgres && useradd -r -g postgres postgres
ENV POSTGRES_DATA /var/lib/postgresql/data
RUN mkdir -p $POSTGRES_DATA && chown -R postgres.postgres $POSTGRES_DATA
VOLUME $POSTGRES_DATA
CMD ["true"]