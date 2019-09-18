FROM abiosoft/caddy

WORKDIR /

COPY ./dist /www
COPY ./frontserv/micro-frontend/Caddyfile .

EXPOSE 2015
CMD [ "-conf", "/Caddyfile" ]
