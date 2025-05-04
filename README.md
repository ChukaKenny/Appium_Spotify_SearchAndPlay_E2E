🎵 Appium_Spotify_SearchAndPlay_E2E
📱 Spotify Appium Automation Test

This repository contains an automated end-to-end UI test for the **Spotify** Android app, developed using Appium and WebdriverIO. The test validates the core playback journey—searching for a song by title and artist, verifying the correct track is selected, and confirming playback starts successfully.

✅ Features Tested

🔍 Search and Select Song  
Ensures the user can search for a specific song using its name and artist, and correctly identify it from the search results.

▶️ Playback Verification  
Confirms the selected song starts playing by checking the playback timer updates after a delay.

❌ Close Now Playing View  
Validates that the now-playing window can be dismissed and the user returns to the previous UI view.

🛠️ Tech Stack

- Appium (v2.17+)
- WebdriverIO (v9+)
- Mocha Test Framework
- WDIO Appium Service

🔧 Project Structure
├── test/
│ ├── specs/ # Test cases (Search & Play flow)
│ └── pageobjects/ # Page Object Models (e.g. Homescreen, Search pages)
├── wdio.conf.js # WebdriverIO configuration
└── README.md # Project overview


✅ Preconditions

Make sure the following are completed before executing the test:

- **Spotify App Installed**  
  Spotify Android app version 9.0.22.543 must be installed on the test device or emulator.

- **Logged In**  
  The test assumes a valid user session (user should be logged in before test runs).

- **Stable Internet Connection**  
  Required for performing search queries and streaming playback.

🖥️ System Requirements

- Node.js v16+
- Java SDK (Java 8+) installed and available in `PATH`
- Android SDK installed and `ANDROID_HOME` environment variable set
- Appium server installed (`npm install -g appium`)
- ADB accessible via terminal

🚀 How to Run

1. Clone the repository:

bash
git clone https://github.com/ChukaKenny/Appium_Spotify_SearchAndPlay_E2E.git
cd Appium_Spotify_SearchAndPlay_E2E

2. Install dependencies:
   npm install

3. Start the Appium server:
   appium --address 127.0.0.1 --port 4723
   
4. Run the test:
   npx wdio run wdio.conf.js


📋 Notes

1. The test uses playback timer comparison to verify audio is playing.

2. If the device is offline, the test attempts a fallback wait before re-checking.

3. The test closes the Spotify app at the end using driver.terminateApp().

