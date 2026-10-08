document.getElementById('dropZone').addEventListener('click', () => {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', (e) => {
    if(e.target.files.length > 0) {
        document.getElementById('dropZone').innerHTML = `<p>Selected: <strong>${e.target.files[0].name}</strong></p>`;
        document.getElementById('status').innerText = "Connected (DFU Mode)";
        document.getElementById('status').className = "connected";
        document.getElementById('installBtn').disabled = false;
    }
});

document.getElementById('installBtn').addEventListener('click', () => {
    alert('Simulating IPSW extraction and restore process via WebUSB/WebSerial emulation...');
});