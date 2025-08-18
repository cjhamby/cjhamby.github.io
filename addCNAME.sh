#!/usr/bin/env sh

#abort on error
set -e

cd dist

echo > .nojekyll

echo 'simonehamby.com' > CNAME

cd -