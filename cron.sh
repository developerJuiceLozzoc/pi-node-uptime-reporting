#!/usr/bin/env sh
## chron line * * * * * bash /home/pi/Documents/pi-node-reporting/cron.sh
export PORT=1111 SERVER_PORT=1111 SERVER_URL=10.0.0.74 

node /home/pi/Documents/pi-node-reporting/client  
