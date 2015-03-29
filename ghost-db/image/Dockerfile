FROM postgres:9.4
ENV PGUSER postgres
ENV PGPASSWORD development
RUN mkdir /sql && chown -R postgres:postgres /sql
VOLUME /sql
ADD setup.sh /
CMD /setup.sh