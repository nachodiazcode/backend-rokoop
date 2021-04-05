#!/bin/sh 

cd ../var/www/rokoop-backend
git pull
pm2 restart app.js