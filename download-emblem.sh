#!/bin/bash

# Create directory if it doesn't exist
mkdir -p public/images

# Download the healthcare technology emblem image
curl -o public/images/healthcare-emblem.png "https://raw.githubusercontent.com/heavenlykiss0820/test/main/public/images/healthcare-emblem.png"

echo "Emblem image downloaded successfully to public/images/healthcare-emblem.png"
