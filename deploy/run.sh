#!/usr/bin/env bash

set -e

if [ -n "$DEPLOYMENT_GROUP_NAME" ]; then
 export NODE_ENV=$DEPLOYMENT_GROUP_NAME
fi


cd /home/ec2-user/node

aws s3 cp s3://vc-chat/vc-chat-creds .env

pm2 start npm -n vc-chat -- start 