#!/usr/bin/env bash
if [ ! -z "$DEPLOYMENT_GROUP_NAME" ]; then
 export NODE_ENV=$DEPLOYMENT_GROUP_NAME
fi

cd ~/node
ENV="production" DATABASE_URL="" pm2 start npm -n vc-chat -- start 