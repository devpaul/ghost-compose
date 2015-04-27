# From https://medium.com/@ramangupta/why-docker-data-containers-are-good-589b3c6c749e
# A data container solution for providing ghost content
FROM ghost:0.6.0
RUN mkdir -p $GHOST_CONTENT
COPY files/config.js $GHOST_CONTENT/config.js
VOLUME $GHOST_CONTENT
CMD ["true"]
