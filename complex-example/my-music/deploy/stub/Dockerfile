FROM abiosoft/caddy

WORKDIR /

COPY ./stub /stub
COPY ./frontserv/stub/Caddyfile /conf/

EXPOSE 2015
CMD [ "-conf", "/conf/Caddyfile" ]
