echo "stop app.js"
forever stop ./app.js 
echo "pull new code"
git pull
echo "start app.js"
forever start --minUptime 1000 --spinSleepTime 1000 ./app.js 
