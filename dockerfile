FROM zzq10/ubuntu:java
MAINTAINER zzq "17687952609@163.com"

# 设置时区
ENV TIME_ZONE Asia/Shanghai
RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends tzdata \
    && ln -snf /usr/share/zoneinfo/$TIME_ZONE /etc/localtime && echo $TIME_ZONE > /etc/timezone \
    && dpkg-reconfigure -f noninteractive tzdata \
    && apt-get clean \
    && rm -rf /tmp/* /var/cache/* /usr/share/doc/* /usr/share/man/* /var/lib/apt/lists/*

RUN mkdir /code
WORKDIR /code

COPY ./acapp ./acapp
COPY ./web ./web
COPY ./backendcloud ./backendcloud
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
COPY ./conf/cert /etc/nginx
COPY ./conf/redis.conf /etc/redis/redis.conf

RUN mkdir /data && chmod 777 /data

RUN chmod +x ./backendcloud/scripts/start.sh
CMD sh ./backendcloud/scripts/start.sh
