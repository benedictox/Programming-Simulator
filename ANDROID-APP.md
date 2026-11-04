# Programming Simulator — Android offline build

This branch adds a Capacitor Android wrapper for the existing Programming Simulator website.

## What the Android build does

- Copies the website pages, stylesheets, JavaScript, manifest, and icons into the APK's local web assets.
- Loads the app from the assets bundled inside the APK, so the learning pages and exercises do not require a website host or internet connection.
- Keeps exercise progress in the Android WebView's local storage on that device.
- Builds a debug APK automatically through GitHub Actions.

## Build the APK

1. Open the repository on GitHub and select the `android-offline-apk` branch.
2. Open **Actions** and select **Build Android APK**.
3. Run the workflow with **Run workflow**, or push a new commit to this branch.
4. When the workflow finishes successfully, open its run and download the artifact named `programming-simulator-android-apk`.
5. Extract the ZIP and install `app-debug.apk` on an Android device. Android may ask you to allow installation from that source.

## Build identity

- App name: Programming Simulator
- Android application ID: `com.benedicto.programmingsimulator`
- Capacitor: 6.x
- APK type: debug APK (not Play Store signed)

## Offline notes

The site is bundled locally in the APK. The existing service worker is retained as a website/PWA feature, but it is not relied on for the native app's offline operation. Exercise progress stored in local storage belongs to the installed app on that device; it is not automatically synchronized or backed up.

Some pages may link to external websites or online tools. Those destinations still need internet access. Core bundled learning content and local exercises are available offline.
