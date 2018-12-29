#!/usr/bin/env bash

cd /home/ec2-user/node || exit
pm2 stop vc-chat || true