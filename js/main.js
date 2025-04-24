// Status bar update
document.addEventListener('DOMContentLoaded', function() {
    const statusBars = document.querySelectorAll('.status-bar');
    
    statusBars.forEach(statusBar => {
        // Create time element
        const timeElement = document.createElement('div');
        timeElement.classList.add('status-bar-time');
        
        // Update time
        function updateTime() {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
            timeElement.textContent = `${hours}:${minutes}`;
        }
        
        updateTime();
        setInterval(updateTime, 60000);
        
        // Create battery and signal elements
        const batteryElement = document.createElement('div');
        batteryElement.classList.add('status-bar-battery');
        batteryElement.innerHTML = '<i class="fas fa-battery-full"></i>';
        
        const signalElement = document.createElement('div');
        signalElement.classList.add('status-bar-signal');
        signalElement.innerHTML = '<i class="fas fa-signal"></i> <i class="fas fa-wifi"></i>';
        
        // Add elements to status bar
        const statusBarContent = document.createElement('div');
        statusBarContent.classList.add('status-bar-content');
        statusBarContent.appendChild(signalElement);
        statusBarContent.appendChild(timeElement);
        statusBarContent.appendChild(batteryElement);
        
        statusBar.appendChild(statusBarContent);
    });
}); 