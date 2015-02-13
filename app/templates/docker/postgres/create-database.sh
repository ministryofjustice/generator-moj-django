#!/bin/bash

echo "****** CREATING VIS DATABASE ******"
gosu postgres postgres --single <<- EOSQL
   CREATE DATABASE <%= projectName %> -E UTF8;
EOSQL
echo ""
echo "****** VIS DATABASE CREATED ******"
