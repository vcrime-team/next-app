#!/bin/bash

# Typescript type checking script
TYPE_CHECK="$(tsc --project ./tsconfig.json)"

# Get package name
PACKAGE_NAME=$(cat package.json | grep "name" | cut -d'"' -f 4)

# Colors
GREEN='\033[1;32m'
BLUE='\033[1;34m'
ORANGE='\033[1;36m'
PURPLE='\033[1;35m'

# No Color
NC='\033[0m'

echo "Package: ${ORANGE}${PACKAGE_NAME}${NC}"
echo "${BLUE}Type checking...${NC}\n"

start=$SECONDS

# If error found
if [[ -n $TYPE_CHECK ]]; then
	# Print error logs
  tsc --project ./tsconfig.json
  end=$SECONDS
	echo "Duration: ${PURPLE}$((end-start))s${NC}\n"
	exit 1
else
	end=$SECONDS
	echo "✅ ${GREEN}NO ERRORS WERE FOUND!${NC}\n"
	echo "Duration: ${PURPLE}$((end-start))s${NC}\n"
	exit
fi