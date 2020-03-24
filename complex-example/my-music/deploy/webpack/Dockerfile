FROM node:11.13-slim

EXPOSE 8080 8000

WORKDIR /www

COPY .npmrc /root/.npmrc

COPY ./deploy/webpack/docker-command.sh /www_tools/docker-command.sh
RUN ["chmod", "+x", "/www_tools/docker-command.sh"]

CMD /www_tools/docker-command.sh