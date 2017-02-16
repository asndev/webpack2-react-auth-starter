#!/usr/bin/sh
for file in ./target/*
do
  echo $file
  ./node_modules/.bin/gzip-size $file
done