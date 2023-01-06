# https://github.com/gitpod-io/workspace-images/blob/main/base/Dockerfile
FROM gitpod/workspace-full:latest

RUN brew install pre-commit starship

ADD gitpod/.config/starship.toml /home/gitpod/.config/
RUN echo 'eval "$(starship init bash)"' >> ~/.bashrc
