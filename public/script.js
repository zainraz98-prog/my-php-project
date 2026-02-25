document.getElementById('fetchBtn').addEventListener('click', async () => {
    const btn = document.getElementById('fetchBtn');
    const output = document.getElementById('output');
    
    // Visual feedback that the request started
    btn.innerText = "Connecting...";
    
    try {
        const res = await fetch('/api/index.php');
        const data = await res.json();

        // Injecting the proof into the HTML
        output.innerHTML = `
            <div style="border: 2px solid #0070f3; padding: 15px; border-radius: 8px; margin-top: 20px;">
                <h3 style="color: #0070f3;">✅ ${data.confirmation}</h3>
                <p><strong>PHP Runtime:</strong> ${data.runtime}</p>
                <p><strong>Generated Number:</strong> ${data.lucky_number}</p>
                <p><strong>Timestamp:</strong> ${data.server_time}</p>
            </div>
        `;
    } catch (error) {
        output.innerText = "Error: Could not reach backend.";
    } finally {
        btn.innerText = "Call PHP Backend Again";
    }
});