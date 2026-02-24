"""
Generate project images for portfolio
Creates visually appealing gradient images with icons for each project
"""
from PIL import Image, ImageDraw, ImageFont
import os

# Create assets/images directory if it doesn't exist
os.makedirs('assets/images', exist_ok=True)

def create_gradient_image(width, height, color1, color2, filename):
    """Create a gradient image"""
    image = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(image)

    # Create gradient
    for y in range(height):
        ratio = y / height
        r = int(color1[0] * (1 - ratio) + color2[0] * ratio)
        g = int(color1[1] * (1 - ratio) + color2[1] * ratio)
        b = int(color1[2] * (1 - ratio) + color2[2] * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    return image

def add_text_overlay(image, text, position='center'):
    """Add text overlay to image"""
    draw = ImageDraw.Draw(image)
    width, height = image.size

    # Try to use a nice font, fall back to default if not available
    try:
        font = ImageFont.truetype("arial.ttf", 80)
    except:
        font = ImageFont.load_default()

    # Get text bounding box
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]

    # Calculate position
    x = (width - text_width) / 2
    y = (height - text_height) / 2

    # Draw shadow
    draw.text((x+3, y+3), text, fill=(0, 0, 0, 100), font=font)
    # Draw text
    draw.text((x, y), text, fill=(255, 255, 255), font=font)

    return image

# Project 1: Restaurant Recommendation System
# Colors: warm orange/red gradient (restaurant theme)
img1 = create_gradient_image(800, 500, (255, 107, 53), (220, 38, 38), 'temp')
img1 = add_text_overlay(img1, '🍽️')
img1.save('assets/images/restaurant-recommendation.jpg', quality=90)
print("Created restaurant-recommendation.jpg")

# Project 2: AI Vision / Image Description
# Colors: blue/purple gradient (AI/tech theme)
img2 = create_gradient_image(800, 500, (59, 130, 246), (147, 51, 234), 'temp')
img2 = add_text_overlay(img2, '👁️')
img2.save('assets/images/ai-vision.jpg', quality=90)
print("Created ai-vision.jpg")

print("\nAll project images generated successfully!")
print("Images saved in: assets/images/")
