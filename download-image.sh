#!/bin/bash

# Create directory if it doesn't exist
mkdir -p public/images

# Download the healthcare technology image
curl -o public/images/healthcare-hero.jpg "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

echo "Image downloaded successfully to public/images/healthcare-hero.jpg"
