#!/bin/bash
#purpose: to create variables and call those variables
#date: 31-Oct-2026
#Owner: Shaik_Mansoor

a=$(hostname)
b=$(df -h)
e=$(date)
f=$(whoami)

echo Please provide your details below to check system hostname or ip address
read -p "Enter you name:" m
echo
echo "Hi $m you hostname is $a" 
echo
echo "Your disk free size is $b"
echo
echo "your current date is $e"
echo
echo "your current user is $f"
echo
echo Thanks

