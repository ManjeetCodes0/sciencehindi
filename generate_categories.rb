require 'yaml'
require 'fileutils'

# --- CONFIGURATION ---
DATA_FILE = "_data/categories.yml"
OUTPUT_DIR = "blog/category"
# --- END CONFIGURATION ---

# Slugify function to create URL-friendly folder names
def slugify(text)
  text.to_s.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
end

puts "--- Starting Category Page Generation ---"

# Check if the data file exists
unless File.exist?(DATA_FILE)
  puts "Error: Data file not found at #{DATA_FILE}. Exiting."
  exit
end

# Read the category data from the YAML file
categories = YAML.load_file(DATA_FILE)

if categories.nil? || categories.empty?
  puts "No categories found in #{DATA_FILE}. Exiting."
  exit
end

puts "Found #{categories.count} categories in the data file."

# Loop through each category and generate its page
categories.each do |category|
  slug = category['slug']
  name = category['name']
  description = category['description']

  # Skip if essential data is missing
  unless slug && name
    puts "Skipping entry because it's missing a 'slug' or 'name'."
    next
  end
  
  # Create the directory for the category slug
  target_dir = File.join(OUTPUT_DIR, slug)
  FileUtils.mkdir_p(target_dir)
  
  # This is the full content that will be written into the new file
  file_content = <<~MARKDOWN
    ---
    layout: category_page
    title: "#{name}"
    description: "#{description}"
    category_slug: "#{slug}"
    ---
  MARKDOWN
  
  # Write the new index.md file
  File.write(File.join(target_dir, "index.md"), file_content)
  puts "Successfully generated page for '#{name}' at #{target_dir}/"
end

puts "--- Category page generation complete! ---"