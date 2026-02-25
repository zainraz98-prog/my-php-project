document.getElementById('fetchBtn').addEventListener('click', async () => {
    const res = await fetch('/api/index.php');
    const data = await res.json();
    document.getElementById('output').innerText = data.message + " (Server time: " + data.time + ")";
});