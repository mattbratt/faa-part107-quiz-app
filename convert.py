import os
from pdf2image import convert_from_path
from PIL import Image
import zipfile

# ----- CONFIGURATION -----
pdf_file = "faa_supplement.pdf"  # Your downloaded PDF filename
output_folder = "figures"        # Output folder for images
figure_pages = range(1, 65)       # Example: pages 1–64 (adjust as needed)
zip_output = True                 # Set to True to create figures.zip
# -------------------------

# Create output folder if missing
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

print(f"Extracting figures from {pdf_file}...")

# Convert specified pages to images
images = convert_from_path(pdf_file, dpi=300, first_page=min(figure_pages), last_page=max(figure_pages))

for idx, page_num in enumerate(figure_pages):
    img = images[idx]
    filename = f"Figure{page_num}.jpg"
    filepath = os.path.join(output_folder, filename)
    img.save(filepath, "JPEG")
    print(f"Saved {filename}")

print(f"All figures saved to {output_folder}/")

# Optional ZIP
if zip_output:
    zip_filename = "figures.zip"
    with zipfile.ZipFile(zip_filename, "w") as zipf:
        for root, _, files in os.walk(output_folder):
            for file in files:
                zipf.write(os.path.join(root, file), arcname=os.path.join(os.path.basename(root), file))
    print(f"Zipped figures into {zip_filename}")
