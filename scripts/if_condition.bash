#!/bin/bash
#Purpose: Adding if else condition for user access for age >=18
#Date: Oct-31-2026
#Owner: Shaik_Mansoor

echo
read -p "Please enter your name:" a
read -p "Please enter your age:" c
if [ $c -ge 18 ]
then
echo "$a Your age is uptomark and are granted pemission access"
echo
echo Welcome $a 
else
echo "$a Your age is not uptomark and permission denied"
echo "your age must be equals or greater than 18"
echo
echo "better luck next time - mean time have a coffee and relax"
echo
fi
echo Thanks
