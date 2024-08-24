---
outline: deep
---

# Docker

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

## Buildx

```bash
docker buildx create --use
docker buildx build --platform linux/amd64,linux/arm64 --push -t $IMAGE_URI .

# with provenance disabled
docker buildx build --provenance false --platform linux/arm64 -t python-base .

# cleanup
docker context ls
docker context rm $CONTEXT_NAME
```

## Dockerfile

### Boilerplate

```dockerfile
FROM python:3.10-slim

RUN pip install pgsync==2.3.3

RUN mkdir -p /opt/pgsync
WORKDIR /opt/pgsync

ADD schema.json /opt/pgsync
ADD entrypoint.sh /opt/pgsync

RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
```

### if-else for multi architecture

```dockerfile
ENV SOPS_VERSION=3.7.2
ARG TARGETPLATFORM
RUN if [ "$TARGETPLATFORM" = "linux/amd64" ]; then ARCHITECTURE=amd64; elif [ "$TARGETPLATFORM" = "linux/arm64" ]; then ARCHITECTURE=arm64; else ARCHITECTURE=amd64; fi \
    && FILENAME=sops_${SOPS_VERSION}_${ARCHITECTURE}.deb \
    && wget --progress=dot:mega https://github.com/mozilla/sops/releases/download/v$SOPS_VERSION/$FILENAME \
    && dpkg -i $FILENAME \
    && rm $FILENAME
```

### nix-build with docker

```dockerfile
# --------------- builder --------------- #
# https://github.com/nodejs/docker-node/issues/1335 -- node image can't do yarn install with linux/arm64
# FROM node:18 AS builder

FROM nixos/nix:latest AS builder

# https://github.com/NixOS/nix/issues/5258
RUN echo 'filter-syscalls = false' > /etc/nix/nix.conf
RUN nix-channel --update
RUN nix-env -iA nixpkgs.nodejs_18 \
    && nix-env -iA nixpkgs.yarn
# ------------
```

### Import base Dockerfile

```dockerfile
# syntax = edrevo/dockerfile-plus

INCLUDE+ Dockerfile.base

RUN whatever
```

### multi-stage build

```dockerfile
# --------------- builder --------------- #
FROM node:18 AS builder

WORKDIR /opt/build

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

RUN yarn build

# --------------- package --------------- #
FROM node:18-alpine AS deploy

WORKDIR /app
COPY --from=builder /opt/build/.next ./.next
COPY --from=builder /opt/build/node_modules ./node_modules
COPY --from=builder /opt/build/public ./public
COPY --from=builder /opt/build/next.config.js ./
COPY --from=builder /opt/build/package.json ./

EXPOSE 3000
CMD [ "yarn", "start", "-H", "0.0.0.0" ]
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

# allow users to use docker without sudo
sudo groupadd docker
sudo usermod -aG docker $USER

# run local bash script on container init
cat local_file.sh | docker exec -i container_name bash
```

## Tools

- [amazon-ecr-credential-helper](https://github.com/awslabs/amazon-ecr-credential-helper)
- [docker-credential-gcr](https://github.com/GoogleCloudPlatform/docker-credential-gcr)

## Resources

- [composerize](https://www.composerize.com) - docker run asdlksjfksdf > docker-composerize up.
- [The Compose Specification](https://github.com/compose-spec/compose-spec/blob/master/spec.md) - The Compose specification establishes a standard for the definition of multi-container platform-agnostic applications.
- [Disable buildkit](https://stackoverflow.com/a/66839653)
