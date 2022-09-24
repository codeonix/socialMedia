#!/bin/bash  

echo "Enter the project Name: "  
read projectName 
# This will create a nest project 
nest new $projectName --no-spec

