#!/bin/bash

BASE_DIR="notes"

OUTPUT_FILE="directories.json"

generate_json() {
  local current_dir="$1"
  echo "  {"
  echo "    \"name\": \"$(basename "$current_dir")\","

  # Iterate over files
  local files=($(find "$current_dir" -mindepth 1 -maxdepth 1 -type f | sort))
  if [ ${#files[@]} -gt 0 ]; then
    echo "    \"contents\": ["
    for file in "${files[@]}"; do
      local filename=$(basename "$file")
      local relative_path="${file%.*}" # Remove extension
      relative_path="${relative_path/$BASE_DIR\//}"
      echo "      {"
      echo "        \"content\": \"$filename\","
      echo "        \"link\": \"notes/$relative_path\""
      echo "      },"
    done | sed '$s/,$//'
    echo "    ],"
  else
    echo "    \"contents\": [],"
  fi

  # Iterate over subdirectories
  local folders=($(find "$current_dir" -mindepth 1 -maxdepth 1 -type d | sort))
  if [ ${#folders[@]} -gt 0 ]; then
    echo "    \"subsections\": ["
    for folder in "${folders[@]}"; do
      generate_json "$folder"
      echo ","
    done | sed '$s/,$//'
    echo "    ]"
  else
    echo "    \"subsections\": []"
  fi

  echo "  }"
}

# Generate JSON
echo "[" > "$OUTPUT_FILE"
generate_json "$BASE_DIR" >> "$OUTPUT_FILE"
echo "]" >> "$OUTPUT_FILE"

echo "Struttura JSON generata in $OUTPUT_FILE"
