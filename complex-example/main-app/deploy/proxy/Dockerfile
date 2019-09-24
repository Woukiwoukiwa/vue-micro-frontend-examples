FROM abiosoft/caddy

WORKDIR /

COPY ./frontserv/proxy/Caddyfile .

EXPOSE 2015
CMD [ "-conf", "/Caddyfile" ]
