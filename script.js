// --- UI INTERACTIONS ---

// Tab Switching
function switchTab(tab) {
    // Remove active class from all buttons and panels
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    
    // Add active class to specific elements
    if(tab === 'encode') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('encodePanel').classList.add('active');
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('decodePanel').classList.add('active');
    }
}

// Update file name display when file is selected
document.getElementById('uploadImage').addEventListener('change', function(e) {
    const fileName = e.target.files[0] ? e.target.files[0].name : "Click to browse or drag image here";
    e.target.nextElementSibling.querySelector('span').innerText = fileName;
});

document.getElementById('decodeImageFile').addEventListener('change', function(e) {
    const fileName = e.target.files[0] ? e.target.files[0].name : "Select the PNG file containing secret data";
    e.target.nextElementSibling.querySelector('span').innerText = fileName;
});


// --- STEGANOGRAPHY LOGIC ---

// Convert string to binary
function strToBin(str) {
    let bin = "";
    for (let i = 0; i < str.length; i++) {
        bin += str[i].charCodeAt(0).toString(2).padStart(8, '0');
    }
    return bin;
}

// Convert binary to string
function binToStr(bin) {
    let str = "";
    for (let i = 0; i < bin.length; i += 8) {
        let byte = bin.slice(i, i + 8);
        str += String.fromCharCode(parseInt(byte, 2));
    }
    return str;
}

function encodeSteganography() {
    const fileInput = document.getElementById('uploadImage');
    const text = document.getElementById('secretText').value;
    const canvas = document.getElementById('processCanvas');
    const ctx = canvas.getContext('2d');
    const preview = document.getElementById('encodePreview');
    const outputImg = document.getElementById('outputImage');
    const downloadBtn = document.getElementById('downloadBtn');

    if (!fileInput.files[0] || !text) {
        alert("Please provide both an image and a secret message.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imgData.data;

            // Add NULL terminator to end of string
            const binaryMessage = strToBin(text) + "00000000"; 

            if (binaryMessage.length > data.length / 4) {
                alert("Text is too long for this image! Try a larger image or shorter text.");
                return;
            }

            // LSB Encoding (Red Channel)
            for (let i = 0; i < binaryMessage.length; i++) {
                let pixelIndex = i * 4; 
                let originalValue = data[pixelIndex];
                let clearedValue = originalValue & 0xFE; 
                let bitToHide = parseInt(binaryMessage[i]);
                data[pixelIndex] = clearedValue | bitToHide;
            }

            ctx.putImageData(imgData, 0, 0);

            const resultDataUrl = canvas.toDataURL('image/png');
            outputImg.src = resultDataUrl;
            downloadBtn.href = resultDataUrl;
            preview.style.display = "block";
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(fileInput.files[0]);
}

function decodeSteganography() {
    const fileInput = document.getElementById('decodeImageFile');
    const outputArea = document.getElementById('decodedOutput');
    const canvas = document.getElementById('processCanvas');
    const ctx = canvas.getContext('2d');
    const resultArea = document.getElementById('decodeResultArea');

    if (!fileInput.files[0]) {
        alert("Please upload an encoded image.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imgData.data;
            
            let binaryMessage = "";
            let tempBin = "";

            for (let i = 0; i < data.length; i += 4) {
                const redValue = data[i];
                const bit = redValue & 1; 
                
                tempBin += bit;

                if (tempBin.length === 8) {
                    if (tempBin === "00000000") {
                        break;
                    }
                    binaryMessage += tempBin;
                    tempBin = "";
                }
            }
            
            resultArea.style.display = "block";
            outputArea.value = binToStr(binaryMessage);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(fileInput.files[0]);
}