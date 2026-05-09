import subprocess
import os

images = [
    ("images/ginger-island/Farm.jpg", "Stardew Valley Ginger Island West Farm area tropical"),
    ("images/ginger-island/Observatory.jpg", "Stardew Valley Ginger Island Observatory at summit"),
    ("images/ginger-island/Volcano.jpg", "Stardew Valley Ginger Island Volcano entrance"),
]

for path, prompt in images:
    if not os.path.exists(path):
        print(f"Generating {path}...")
        subprocess.run([
            "python3", "-m", "cozeCodingDev",
            "--api_key", "YWCxMDI4ODQxMzU5OnU5Sk1aRVdQVEVNM0xCWjZxVVo=",
            "--task_prompt", f"Generate a game screenshot style image: {prompt}",
            "--output", path
        ], check=True)
        print(f"Generated {path}")

