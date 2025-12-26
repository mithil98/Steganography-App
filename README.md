# 🛡️ SteganoGuard

> **Securely hide any file inside any other file.** > A universal steganography tool built with modern web technologies.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)
![Platform](https://img.shields.io/badge/platform-web-orange.svg?style=flat-square)
![Status](https://img.shields.io/badge/status-active-success.svg?style=flat-square)

---

## 📖 Overview

**SteganoGuard** is a client-side web application that allows you to hide secret files inside "cover" files. Unlike traditional tools that only work with images, SteganoGuard uses **Binary Appending** logic to let you hide *any* file type (PDF, ZIP, TXT) inside *any* cover file (MP3, MP4, JPG, PNG) without corrupting the original file.

The best part? **It works entirely offline.** Your files never leave your browser.

## ✨ Features

* **📦 Universal Hiding:** Hide a PDF inside a song, a video inside an image, or a text file inside a ZIP.
* **🔒 Client-Side Privacy:** All processing happens in your browser. No data is uploaded to any server.
* **⚡ Blazing Fast:** Uses binary array manipulation for instant merging and extraction.
* **🎨 Modern UI:** Beautiful, glassmorphism-inspired interface with animated backgrounds and smooth transitions.
* **📱 Responsive:** Works on desktop and mobile browsers.

## 🚀 Demo

Check out the live demo here: **[Link to your GitHub Pages or Vercel Deployment]** *(If you don't have a live link yet, you can remove this line)*

## 🛠️ Tech Stack

* **HTML5** - Structure & Layout
* **CSS3** - Glassmorphism, Animations, Gradients, Flexbox
* **JavaScript (ES6+)** - Binary manipulation, Blob API, FileReader API

## 🏁 Getting Started

To run this project locally, simply follow these steps:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/SteganoGuard.git](https://github.com/your-username/SteganoGuard.git)
    ```
2.  **Navigate to the folder**
    ```bash
    cd SteganoGuard
    ```
3.  **Open `index.html`**
    * Simply double-click `index.html` to open it in your browser.
    * *Optional:* For a better experience, use a live server extension (VS Code) or run a simple python server:
        ```bash
        python -m http.server 8000
        ```

## 🎮 How to Use

### 1. Hiding Data (Encode)
1.  Click the **"Hide Data"** tab.
2.  Select a **Cover File** (e.g., a song `.mp3` or image `.jpg`). *This file will act as the container.*
3.  Select the **Secret File** (e.g., `.pdf` or `.txt`) you want to hide.
4.  Click **Merge Files**.
5.  Download the resulting file. It will look and behave exactly like the original cover file!

### 2. Retrieving Data (Decode)
1.  Click the **"Retrieve Data"** tab.
2.  Upload the file that contains the hidden data.
3.  Click **Extract Data**.
4.  The app will find the hidden file and let you download it immediately.

## 🖼️ Screenshots

| Encoding Panel | Decoding Panel |
|:---:|:---:|
| *Add a screenshot of your Encode screen here* | *Add a screenshot of your Decode screen here* |

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements (like adding password encryption or compression), feel free to fork the repo and submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/your-username">Your Name</a>
</p>
