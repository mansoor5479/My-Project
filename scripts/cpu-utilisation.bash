#!/bin/bash
#Purpose: check the cpu and running services of system
#date: 28-Oct-2026
#Owner: Shaik-Mansoor

free -h
uptime
lscpu
df -h
du -sk *
netstat -na | grep 80
systemctl status nginx


