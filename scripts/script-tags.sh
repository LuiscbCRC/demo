#!/bin/bash
version="$1"
message="$2"
git tag -a v"$version" -m "$message"
git push origin v"$version" 