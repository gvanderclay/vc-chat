#!/usr/bin/env bash

set -e

if [ -n "$DEPLOYMENT_GROUP_NAME" ]; then
 export NODE_ENV=$DEPLOYMENT_GROUP_NAME
fi

aws s3 cp s3://vc-chat/bridge-migration.csv test.csv --debug

cd ~/node
pm2 start npm -n vc-chat -- start 