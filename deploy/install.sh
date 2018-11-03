#!/bin/sh

set -e

# update instance
# yum -y update

curl --silent --location curl -sL "https://rpm.nodesource.com/setup_8.x" | bash -

yum -y install nodejs nc
npm install -g pm2
pm2 update