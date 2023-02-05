#! /bin/bash

docker run \
    -p 20020:22 \
    -p 20021:80 \
    -p 20022:443 \
    --name kob \
    -v /home/zzq/king_of_bots/acapp:/code/acapp \
    -v /home/zzq/king_of_bots/web:/code/web \
    -v /home/zzq/king_of_bots/backendcloud:/code/backendcloud \
    -v /home/zzq/king_of_bots/conf/cert:/etc/nginx/cert \
    -v /home/zzq/king_of_bots/conf/nginx.conf:/etc/nginx/nginx.conf \
    -v /home/zzq/king_of_bots/conf/redis.conf:/etc/redis/redis.conf \
    -v /home/zzq/king_of_bots/redis_data:/data \
    -v kob_mysql_data:/var/lib/mysql \
    -itd zzq10/ubuntu:kob
