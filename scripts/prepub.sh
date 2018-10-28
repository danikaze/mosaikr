#!/bin/env sh

ROOT=`dirname $0`/..

mkdir -p ${ROOT}/lib
cat ${ROOT}/package.json | grep -v private > ${ROOT}/lib/package.json
cp ${ROOT}/README.md ${ROOT}/lib