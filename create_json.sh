#!/bin/bash

BASE_DIR="notes"
OUTPUT_FILE="directories.json"

generate_json() {
  local current_dir="$1"
  local base_dir="$2"
  echo "  {"
  echo "    \"name\": \"$(basename "$current_dir")\","

  # Iterate over files
  local files=($(find "$current_dir" -mindepth 1 -maxdepth 1 -type f | sort))
  if [ ${#files[@]} -gt 0 ]; then
    echo "    \"contents\": ["
    for file in "${files[@]}"; do
      local filename=$(basename "$file")
      local relative_path="${file%.*}" # Remove extension
      relative_path="${relative_path/$base_dir\//}"
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
      generate_json "$folder" "$base_dir"
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
for folder in $(find "$BASE_DIR" -mindepth 1 -maxdepth 1 -type d | sort); do
  generate_json "$folder" "$BASE_DIR" >> "$OUTPUT_FILE"
  echo "," >> "$OUTPUT_FILE"
done
sed -i '$ s/,$//' "$OUTPUT_FILE"
echo "]" >> "$OUTPUT_FILE"

echo "Generated json : $OUTPUT_FILE"