#!/bin/bash

# loop through all files in the directory
for file in */.mdx; do
  # check if the file is a regular file
  if [ -f "$file" ]; then
    # extract the metadata from the mdx file
    shortName=$(grep "shortName" "$file" | cut -d ':' -f2 | tr -d '", ')
    title=$(grep "title" "$file" | cut -d ':' -f2 | tr -d '", ')
    date=$(grep "date" "$file" | cut -d ':' -f2 | tr -d '", ')
    description=$(grep "description" "$file" | cut -d ':' -f2 | tr -d '", ')
    # create the yaml frontmatter
    frontmatter="---\ntitle: $title\ndate: $date\ndescription: $description\nshortName: $shortName\n---"
    # insert the frontmatter at the beginning of the file
    sed -i "1i $frontmatter" "$file"
  fi
done
