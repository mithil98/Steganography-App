const DELIMITER = "##STEGOGUARD_SEPARATOR_V1##";

function switchTab(tab) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    
    if(tab === 'encode') {
        document.querySelectorAll('.nav-btn')[0].classList.add('active');
        document.getElementById('encodePanel').classList.add('active');
    } else {
        document.querySelectorAll('.nav-btn')[1].classList.add('active');
        document.getElementById('decodePanel').classList.add('active');
    }
}

function updateLabel(input, labelId) {
    if(input.files && input.files[0]) {
        document.getElementById(labelId).innerText = input.files[0].name;
    }
}

document.getElementById('coverFile').addEventListener('change', (e) => updateLabel(e.target, 'coverLabel'));
document.getElementById('secretFile').addEventListener('change', (e) => updateLabel(e.target, 'fileLabel'));
document.getElementById('decodeFile').addEventListener('change', (e) => updateLabel(e.target, 'decodeLabel'));

async function embedData() {
    const coverInput = document.getElementById('coverFile');
    const secretInput = document.getElementById('secretFile');
    
    if (!coverInput.files[0] || !secretInput.files[0]) {
        alert("Please select both files.");
        return;
    }

    const coverFile = coverInput.files[0];
    const secretFile = secretInput.files[0];
    const coverBuffer = await coverFile.arrayBuffer();
    const secretBuffer = await secretFile.arrayBuffer();
    
    const metadata = JSON.stringify({ n: secretFile.name, t: secretFile.type });
    const encoder = new TextEncoder();
    const delimiterBytes = encoder.encode(DELIMITER);
    const metadataBytes = encoder.encode(metadata);
    
    const finalBlob = new Blob([coverBuffer, delimiterBytes, metadataBytes, delimiterBytes, secretBuffer], { type: coverFile.type });
    
    const url = URL.createObjectURL(finalBlob);
    const dlBtn = document.getElementById('downloadBtn');
    dlBtn.href = url;
    dlBtn.download = "stego_" + coverFile.name;
    
    document.getElementById('finalFileSize').innerText = `File Size: ${(finalBlob.size/1024/1024).toFixed(2)}MB`;
    document.getElementById('encodeResult').style.display = 'block';
}

async function extractData() {
    const decodeInput = document.getElementById('decodeFile');
    if (!decodeInput.files[0]) { alert("Please select a file."); return; }

    const file = decodeInput.files[0];
    const buffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(buffer);
    
    const binaryString = Array.from(uint8Array).map(b => String.fromCharCode(b)).join('');
    const delimStr = Array.from(new TextEncoder().encode(DELIMITER)).map(b => String.fromCharCode(b)).join('');
    
    const parts = binaryString.split(delimStr);
    
    if (parts.length < 3) {
        alert("No hidden data found.");
        return;
    }

    const secretDataStr = parts[parts.length - 1];
    const metaDataStr = parts[parts.length - 2];

    const secretBytes = new Uint8Array(secretDataStr.length);
    for (let i = 0; i < secretDataStr.length; i++) secretBytes[i] = secretDataStr.charCodeAt(i);

    let metadata;
    try { metadata = JSON.parse(metaDataStr); } catch (e) { alert("Corrupt metadata."); return; }

    const blob = new Blob([secretBytes], { type: metadata.t });
    const url = URL.createObjectURL(blob);
    
    document.getElementById('foundFileName').innerText = metadata.n;
    document.getElementById('foundFileSize').innerText = (blob.size / 1024).toFixed(2) + " KB";
    
    const dlBtn = document.getElementById('fileDownloadBtn');
    dlBtn.href = url;
    dlBtn.download = metadata.n;
    
    document.getElementById('decodeResult').style.display = 'block';
}