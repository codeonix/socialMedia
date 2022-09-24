#!/bin/bash  

echo "Enter the module name to create: "  
read moduleName 
# This generates modules, controllers and service file
nest g resource $moduleName --no-spec

mv src/$moduleName src/modules/