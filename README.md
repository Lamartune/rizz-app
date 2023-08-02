# Rizz-App: React Native Image Upload App

Rizz-App is a simple React Native application that allows users to select an image from their device's gallery and upload it to a backend server using Expo's ImagePicker and axios for API calls.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

Before running the Rizz-App, ensure you have the following prerequisites set up:

1. Node.js: Make sure you have Node.js installed on your computer.
2. Expo CLI: Install the Expo command-line interface globally by running `npm install -g expo-cli`.

Follow the steps below to set up and run the Rizz-App:

1. Clone the repository: `git clone https://github.com/your-username/rizz-app.git`.
2. Navigate to the project directory: `cd rizz-app`.
3. Install project dependencies: `npm install`.
4. Start the Expo development server: `expo start`.
5. Use the Expo Go app on your Android or iOS device to scan the QR code shown in the terminal or in the Expo DevTools. This will launch the app on your device.

## Usage

1. Launch the Rizz-App on your Android or iOS device using the Expo Go app.
2. Press the "Select Image" button to open the device's image gallery.
3. Grant the required permission to access the gallery if prompted.
4. Choose an image from the gallery (only images are allowed).
5. The selected image will be displayed in the app.
6. The app will automatically upload the selected image to the specified backend server using a base64-encoded representation of the image.
7. The server's response will be logged to the console, showing the result of the image upload process.

Please note that in order to test the image upload functionality, you need to replace the `apiUrl` variable in the `uploadImageToBackend` function with the actual API endpoint that handles image uploads on your backend server.

## Features

- Select an image from the device's gallery.
- Display the selected image in the app.
- Upload the selected image to a backend server using Expo ImagePicker and axios.
- Show the server's response in the console.

## Dependencies

The Rizz-App uses the following major dependencies:

- React and React Native: The core libraries for building the user interface.
- Expo: A framework and a platform for universal React applications.
- expo-image-picker: An Expo library for accessing the device's image gallery.
- expo-permissions: An Expo library for managing permissions.
- axios: A popular library for making HTTP requests.

For a complete list of dependencies, please refer to the `package.json` file in the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using Rizz-App! If you have any questions or feedback, please don't hesitate to reach out to us. Happy coding!
