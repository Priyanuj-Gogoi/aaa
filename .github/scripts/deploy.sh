#!/bin/bash

if [ -z $TOKEN ]
then
   echo "::error title=Missing secret!::Failed to find TOKEN environment secret!"
   exit 1
fi

echo "${{ github.repository }}"
echo "h"

git clone https://$GITHUB_ACTOR:$TOKEN@github.com/$GITHUB_REPOSITORY.git

cd ${GITHUB_REPOSITORY#*/}

git switch gh-pages

if [ $? -ne 0 ]
then
   git switch --orphan gh-pages
fi

if [ $GITHUB_REF_NAME = "prod" ]
then
   TYPE="Production"
   cp -R ../build/* . 
else
   TYPE="Development"
   DEV_LINK="/dev"
   rm -r dev
   mkdir -p dev
   cp -R ../build/* ./dev/
fi

git config --global user.name "github-actions[bot]"
git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"

git add -A
git commit -m "docs: deploy based on $GITHUB_SHA"
git push -f origin gh-pages 

echo "Type: $TYPE" >> $GITHUB_STEP_SUMMARY
echo "Preview: https://${GITHUB_REPOSITORY%/*}.github.io/${GITHUB_REPOSITORY#*/}$DEV_LINK" >> $GITHUB_STEP_SUMMARY 
