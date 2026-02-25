#!/bin/bash

# Backup script for RYC site files
# Usage: ./backup.sh [optional label]
# Example: ./backup.sh "before-homepage-update"

TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
LABEL=${1:+_$1}
DIR="backups/${TIMESTAMP}${LABEL}"

mkdir -p "$DIR"

FILES=(index.html style.css script.js)

for FILE in "${FILES[@]}"; do
  if [ -f "$FILE" ]; then
    cp "$FILE" "$DIR/"
    echo "  Backed up: $FILE"
  fi
done

echo "Backup saved to: $DIR"
