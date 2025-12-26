# 🛡️ SteganoGuard

> **Securely hide any file inside any other file.**
> A universal steganography tool built with modern web technologies that respects your privacy.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)
![Status](https://img.shields.io/badge/status-live-success.svg?style=flat-square)


---

## 🔗 Live Demo

Experience the app instantly (No installation required):
### 👉 [Launch SteganoGuard](https://genuine-valkyrie-107ec2.netlify.app/)

---

## 🔒 Privacy & Data Safety

**Your data never leaves your device.**

We understand that when you are hiding files, privacy is the top priority. SteganoGuard is architected to be 100% Client-Side.

* **No Server Uploads:** All file processing happens locally within your web browser's memory using JavaScript.
* **No Database:** We do not store, log, or track your files.
* **Offline Capable:** You can load the app once and turn off your internet connection; it will still work perfectly.
* **Zero Footprint:** Once you close the tab, all data related to the process is wiped from your browser's memory.

---

## 📖 Overview

**SteganoGuard** differs from traditional steganography tools that only support specific image formats. By utilizing **Binary Appending Logic**, this tool allows you to merge *any* type of secret file (PDF, TXT, ZIP, EXE) into *any* cover file (MP3, MP4, JPG, PNG) without breaking the functionality of the cover file.

For example, you can hide a **PDF inside an MP3 song**. The song will still play normally, but the file size will increase slightly to accommodate the hidden data.

## ✨ Features

* **📦 Universal Hiding:** Hide any file type inside any other file type.
* **⚡ Instant Processing:** Uses Binary Array Buffers for blazing-fast merging and extraction.
* **🎨 Modern UI:** Glassmorphism design with animated backgrounds and bouncy interactions.
* **📱 Responsive:** Optimized for both Desktop and Mobile devices.
* **🛡️ Metadata Preservation:** Automatically preserves the filename and file type of your secret data.

## 🛠️ Tech Stack

* **HTML5** - Structure
* **CSS3** - Animations, Glassmorphism, Responsive Design
* **JavaScript (ES6+)** - `ArrayBuffer`, `Uint8Array`, and `Blob` manipulation

## 🏁 Run Locally

If you prefer to run the code on your own machine instead of the live link:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/mithil98/Steganography-App.git](https://github.com/mithil98/Steganography-App.git)
    ```
2.  **Navigate to the folder**
    ```bash
    cd Steganography-App
    ```
3.  **Open the App**
    * Simply double-click `index.html` to open it in your browser.
    * *Optional:* Use VS Code "Live Server" extension for the best experience.

## 🎮 How to Use

### 1. Hiding Data (Encode)
1.  Click the **"Hide Data"** tab.
2.  Select a **Cover File** (The "Vessel"). This works best with media files like `.mp3`, `.jpg`, or `.mp4`.
3.  Select the **Secret File** you wish to hide.
4.  Click **Merge Files**.
5.  Download the result. *The file will behave like the Cover File (e.g., the song plays), but it now holds your secret.*

### 2. Retrieving Data (Decode)
1.  Click the **"Retrieve Data"** tab.
2.  Upload the file that contains the hidden data.
3.  Click **Extract Data**.
4.  SteganoGuard scans the binary data, finds the hidden payload, and lets you download the original secret file.

## 🤝 Contributing

Contributions are welcome!
1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/mithil98">Mithil</a>
</p>
