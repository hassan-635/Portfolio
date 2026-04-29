from rembg import remove
from PIL import Image

input_path = 'assets/image.jpeg'
output_path = 'frontend/src/assets/profile.png'

try:
    print(f"Opening {input_path}...")
    input_image = Image.open(input_path)

    print("Removing background...")
    output_image = remove(input_image)

    print(f"Saving to {output_path}...")
    output_image.save(output_path)
    print("Done!")
except Exception as e:
    print(f"Error: {e}")
