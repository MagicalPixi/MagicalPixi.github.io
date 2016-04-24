#!/usr/bin/env bash
cd ./css/
scss --watch index.scss

cd ..
jade index.jade -w