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

### docker-compose

```yaml
version: '3'
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

## Resources

- [composerize](https://www.composerize.com) - docker run asdlksjfksdf > docker-composerize up.
- [contains.dev](https://contains.dev/) - Explore your images, view their files, layers and dependencies.
- [The Compose Specification](https://github.com/compose-spec/compose-spec/blob/master/spec.md) - The Compose specification establishes a standard for the definition of multi-container platform-agnostic applications.
