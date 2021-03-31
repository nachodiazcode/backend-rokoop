#!/bin/sh 

cd ../var/www/weilaystudio
git pull
pm2 restart app.js