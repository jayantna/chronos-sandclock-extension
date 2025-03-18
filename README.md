# Chronos: The Age Voyager

A sleek Chrome extension that transforms your new tab into a time-traveling dashboard, revealing your precise age down to decimal years calculated from milliseconds.

## Features

- Minimalist, elegant UI for your new tab experience
- Real-time clock with current date display
- Age visualization showing:
  - Your exact age in decimal years (like 27.342...)
  - Detailed breakdown (years, months, days)
  - Hours, minutes, seconds elapsed since your birth

## Installation

Since Chronos isn't yet available on the Chrome Web Store, install it in developer mode:

### Step 1: Download the Extension

1. Clone this repository or download it as a ZIP file
2. Extract the ZIP file (if downloaded as ZIP) to a location on your computer

### Step 2: Load the Extension in Chrome

1. Open Chrome browser
2. Go to `chrome://extensions/` (type this in your address bar)
3. Enable "Developer mode" by toggling the switch in the top-right corner
4. Click the "Load unpacked" button
5. Navigate to the folder where you extracted the extension files
6. Select the folder and click "Open"

The extension should now be installed. Open a new tab to begin your time journey.

## Usage

1. When you first open a new tab, you'll see the current time and date
2. Enter your date of birth in the input field and click "Save"
3. Watch as your age unfolds in real-time with decimal precision
4. To reset your date of birth, press and hold the reset button for 5 seconds

## File Structure

- `manifest.json` - Extension configuration
- `index.html` - Main HTML page
- `style.css` - Styling
- `script.js` - JavaScript functionality
- `icons/` - Contains extension icons

## Customization

Feel free to modify the code to customize the extension:
- Edit `style.css` to change colors and layout
- Modify `script.js` to add more functionality

## License

MIT License