import os
from PIL import Image

input_folder = "gif"  # folder containing your .gif files
output_folder = "png"

os.makedirs(output_folder, exist_ok=True)

for file in os.listdir(input_folder):
    if file.lower().endswith(".gif"):
        gif_path = os.path.join(input_folder, file)
        png_name = os.path.splitext(file)[0] + ".png"
        png_path = os.path.join(output_folder, png_name)

        with Image.open(gif_path) as im:
            im.seek(0)  # go to first frame
            frame = im.convert("RGBA")  # keep transparency
            frame.save(png_path, "PNG")

        print(f"Converted: {file} -> {png_name}")