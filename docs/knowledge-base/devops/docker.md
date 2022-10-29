---
title: Docker
---

## Install

```bash
brew install --cask docker
```

## Usage

```bash
# pull image and run stuff through it
docker pull IMAGE_NAME
docker run -v $(pwd):/outputs -it IMAGE_NAME /bin/bash /outputs/build.sh

# ssh into image
docker run -it REPOSITORY

# re-attach container
docker exec -it 3dbcd9237a43 /bin/bash

# list images
docker images

# list containers
docker ps

# list all containers
docker ps -a

# docker stop
docker stop CONTAINER_ID

# remove image
docker rmi node IMAGE ID

# transfer file
docker cp CONTAINER_ID:DOCKER_PATH_TO_ZIP_FILE LOCAL_PATH

# forward port
docker run -it -p ON_HOST_PORT:IN_CONTAINER_PORT baania/pyspark

# prune
docker system prune

# create and attach volume
docker volume create --name hello
docker run -d -v hello:/container/path/for/volume container_image my_command
```

## docker-compose

```yaml
version: "3"
services:
  jupyter:
    image: jupyter/pyspark-notebook:latest
    ports:
      - "8888:8888"
      - "4040:4040"
    volumes:
      - .:/home/jovyan
    environment:
      - JUPYTER_ENABLE_LAB=yes
```

### network to host from docker on linux

```yaml
   environment:
      NC_DB: "pg://localhost:5432?u=postgres&p=password&d=root_db"
    extra_hosts:
      - "host.docker.internal:host-gateway"
    network_mode: host
```

## Useful snippets

```bash
# remove docker images based on name
docker rmi $(docker images | grep 'imagename')

# use amd64 when you're on arm64
export DOCKER_DEFAULT_PLATFORM=linux/amd64

# dummy entrypoint to keep container alive for debugging
tail -f /dev/null
```

### Dockerfile snippets

```Dockerfile
### Dockerfile if-else for multi architecture
ENV SOPS_VERSION=3.7.2
ARG TARGETPLATFORM
RUN if [ "$TARGETPLATFORM" = "linux/amd64" ]; then ARCHITECTURE=amd64; elif [ "$TARGETPLATFORM" = "linux/arm64" ]; then ARCHITECTURE=arm64; else ARCHITECTURE=amd64; fi \
    && FILENAME=sops_${SOPS_VERSION}_${ARCHITECTURE}.deb \
    && wget --progress=dot:mega https://github.com/mozilla/sops/releases/download/v$SOPS_VERSION/$FILENAME \
    && dpkg -i $FILENAME \
    && rm $FILENAME

### import base Dockerfile
# syntax = edrevo/dockerfile-plus

INCLUDE+ Dockerfile.base

RUN whatever
```

## Resources

- [composerize](https://www.composerize.com) - docker run asdlksjfksdf > docker-composerize up.
- [contains.dev](https://contains.dev/) - Explore your images, view their files, layers and dependencies.
- [The Compose Specification](https://github.com/compose-spec/compose-spec/blob/master/spec.md) - The Compose specification establishes a standard for the definition of multi-container platform-agnostic applications.
