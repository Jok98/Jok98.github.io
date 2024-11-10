#!/bin/bash

# Directory di partenza
BASE_DIR="notes"

# File di output JSON
OUTPUT_FILE="directories.json"

# Funzione ricorsiva per generare il JSON
generate_json() {
  local current_dir="$1"
  echo "  {"
  echo "    \"name\": \"$(basename "$current_dir")\","

  # Elenca i file diretti
  local files=($(find "$current_dir" -mindepth 1 -maxdepth 1 -type f | sort))
  if [ ${#files[@]} -gt 0 ]; then
    echo "    \"contents\": ["
    for file in "${files[@]}"; do
      local filename=$(basename "$file")
      local relative_path="${file%.*}" # Rimuove l'estensione
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

  # Elenca le sottocartelle
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

# Genera il file JSON
echo "[" > "$OUTPUT_FILE"
generate_json "$BASE_DIR" >> "$OUTPUT_FILE"
echo "]" >> "$OUTPUT_FILE"

echo "Struttura JSON generata in $OUTPUT_FILE"
