#!/bin/sh

commitId=`git rev-parse HEAD`

aws deploy create-deployment \
  --application-name VC-Chat \
  --deployment-config-name CodeDeployDefault.OneAtATime \
  --deployment-group-name staging \
  --description "Staging VC-Chat deploy" \
  --github-location repository=gvanderclay/vc-chat,commitId=${commitId} \
  --profile personal