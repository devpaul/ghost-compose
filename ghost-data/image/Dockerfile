# From https://medium.com/@ramangupta/why-docker-data-containers-are-good-589b3c6c749e
# A data container solution for providing ghost content
FROM centos
RUN groupadd user && useradd --create-home --home-dir /home/user -g user user
ENV GHOST_CONTENT /var/lib/ghost
COPY var/lib/ghost $GHOST_CONTENT
RUN chown -R user:user "$GHOST_CONTENT"
VOLUME $GHOST_CONTENT
CMD ["true"]