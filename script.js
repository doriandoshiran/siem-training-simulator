// Main SIEM Training Application Script
let trainingEvents = [];
let selectedEventId = null;
let classificationsComplete = 0;
let timerInterval = null;
let timeRemaining = 40 * 60;

function smartShuffle(events) {
    // First, do a basic shuffle
    for (let i = events.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [events[i], events[j]] = [events[j], events[i]];
    }
    
    // Then, check for clustering and fix it
    let maxAttempts = 50;
    let attempt = 0;
    
    while (attempt < maxAttempts) {
        let needsReshuffle = false;
        
        // Check if any events of the same type are too close together
        for (let i = 0; i < events.length - 1; i++) {
            const currentEvent = events[i];
            const nextEvent = events[i + 1];
            
            // Check if same event type appears consecutively or within 2 positions
            if (i < events.length - 2) {
                const afterNextEvent = events[i + 2];
                if (currentEvent.eventType === nextEvent.eventType || 
                    currentEvent.eventType === afterNextEvent.eventType ||
                    nextEvent.eventType === afterNextEvent.eventType) {
                    needsReshuffle = true;
                    break;
                }
            } else if (currentEvent.eventType === nextEvent.eventType) {
                needsReshuffle = true;
                break;
            }
        }
        
        if (!needsReshuffle) {
            break; // Good distribution achieved
        }
        
        // Reshuffle if clustering detected
        for (let i = events.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [events[i], events[j]] = [events[j], events[i]];
        }
        
        attempt++;
    }
}

function generateRandomTime() {
    const now = new Date();
    const timeAgo = new Date(now.getTime() - (Math.random() * 24 * 60 * 60 * 1000));
    return timeAgo.toISOString();
}

function generateRawEventData(event) {
    const timestamp = new Date(event.timestamp).toISOString();
    const severityNum = event.severity === 'critical' ? '10' : event.severity === 'high' ? '7' : event.severity === 'medium' ? '5' : '3';
    const eventId = Math.floor(Math.random() * 9999);
    
    let rawData = `CEF:0|ACME-SIEM|SecureMon|3.2.1|${eventId}|${event.description}|${severityNum}|
deviceReceiptTime=${timestamp}
src=${event.sourceIP}
dst=${event.destinationIP || event.destination.split(':')[0] || event.destination}
spt=${event.details.source_port || Math.floor(Math.random() * 65535)}
dpt=${event.details.destination_port || Math.floor(Math.random() * 65535)}
proto=${event.details.protocol || 'TCP'}
act=observed
cs1Label=EventType cs1=${event.eventType}
cs2Label=Hostname cs2=${event.details.hostname}
suser=${event.details.username}`;
    
    if (event.details.filename) {
        rawData += `
fname=${event.details.filename}
fsize=${event.details.file_size}`;
    }
    if (event.details.process_name) {
        rawData += `
sproc=${event.details.process_name}`;
    }
    if (event.details.command_line) {
        rawData += `
cs3Label=CommandLine
cs3="${event.details.command_line}"`;
    }
    if (event.details.hash_md5) {
        rawData += `
fileHash=${event.details.hash_md5}`;
    }
    if (event.details.policy_violation) {
        rawData += `
cs4Label=PolicyViolation
cs4="${event.details.policy_violation}"`;
    }
    if (event.details.threat_intel) {
        rawData += `
cs5Label=ThreatIntel
cs5="${event.details.threat_intel}"`;
    }
    
    rawData += `
msg=${event.description}`;
    
    return rawData;
}

function initializeTraining() {
    trainingEvents = [];
    classificationsComplete = 0;
    selectedEventId = null;
    timeRemaining = 40 * 60;

    // Use each template exactly once - no duplicates
    const allMaliciousTemplates = [...eventTemplates.malicious];
    allMaliciousTemplates.forEach(template => {
        const event = {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: generateRandomTime(),
            severity: template.severity,
            eventType: template.eventType,
            description: template.description,
            sourceIP: template.sourceIP,
            destinationIP: template.destinationIP,
            destination: template.destination,
            details: template.details,
            actualType: 'malicious',
            userClassification: null,
            rawData: null
        };
        event.rawData = generateRawEventData(event);
        trainingEvents.push(event);
    });

    // Use each false positive template exactly once
    const allFalsePositiveTemplates = [...eventTemplates.falsePositive];
    allFalsePositiveTemplates.forEach(template => {
        const event = {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: generateRandomTime(),
            severity: template.severity,
            eventType: template.eventType,
            description: template.description,
            sourceIP: template.sourceIP,
            destinationIP: template.destinationIP,
            destination: template.destination,
            details: template.details,
            actualType: 'false_positive',
            userClassification: null,
            rawData: null
        };
        event.rawData = generateRawEventData(event);
        trainingEvents.push(event);
    });

    // Use each suspicious template exactly once
    const allSuspiciousTemplates = [...eventTemplates.suspicious];
    allSuspiciousTemplates.forEach(template => {
        const event = {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: generateRandomTime(),
            severity: template.severity,
            eventType: template.eventType,
            description: template.description,
            sourceIP: template.sourceIP,
            destinationIP: template.destinationIP,
            destination: template.destination,
            details: template.details,
            actualType: 'suspicious',
            userClassification: null,
            rawData: null
        };
        event.rawData = generateRawEventData(event);
        trainingEvents.push(event);
    });

    // Smart shuffle to prevent similar events from clustering
    smartShuffle(trainingEvents);
    renderEvents();
    updateStats();
    resetEventDetailsPanel();
    startTimer();
}

function renderEvents() {
    const tbody = document.getElementById('eventsTableBody');
    tbody.innerHTML = '';

    trainingEvents.forEach(event => {
        const row = document.createElement('tr');
        row.className = `event-row ${event.userClassification ? 'classified' : ''}`;
        row.onclick = () => selectEvent(event.id);
        
        if (selectedEventId === event.id) {
            row.classList.add('selected');
        }

        const timestamp = new Date(event.timestamp).toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }).replace(',', '');
        
        let statusBadge = '';
        if (event.userClassification) {
            const displayText = event.userClassification === 'false_positive' ? 'FALSE POSITIVE' : event.userClassification.toUpperCase();
            const badgeClass = event.userClassification === 'false_positive' ? 'false-positive' : event.userClassification;
            statusBadge = `<span class="classification-badge classified-${badgeClass}">${displayText}</span>`;
        } else {
            statusBadge = '<span class="status-pending">PENDING</span>';
        }
        
        row.innerHTML = `
            <td>${timestamp}</td>
            <td><span class="priority-${event.severity}">${event.severity.toUpperCase()}</span></td>
            <td>${event.eventType}</td>
            <td>${event.description}</td>
            <td>${event.sourceIP}</td>
            <td>${event.destinationIP || event.destination.split(':')[0]}</td>
            <td>${statusBadge}</td>
        `;

        tbody.appendChild(row);
    });
}

function copyToClipboard(text, iconElement) {
    navigator.clipboard.writeText(text).then(() => {
        // Change icon to checkmark
        iconElement.textContent = '✅';
        iconElement.classList.add('copied');
        
        // Revert back to clipboard icon after 2 seconds
        setTimeout(() => {
            iconElement.textContent = '📋';
            iconElement.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Still show the checkmark on fallback
        iconElement.textContent = '✅';
        iconElement.classList.add('copied');
        
        setTimeout(() => {
            iconElement.textContent = '📋';
            iconElement.classList.remove('copied');
        }, 2000);
    });
}

function isCopyableValue(key, value) {
    // Only make specific fields copyable: IPs, URLs, usernames, hashes
    const copyableFields = ['sourceIP', 'destinationIP', 'destination', 'username', 'hash_md5', 'hash_sha256', 'url', 'download_url', 'domain'];
    
    if (copyableFields.includes(key)) {
        return true;
    }
    
    // Check if it's a filename with suspicious extensions
    if (key === 'filename' && (
        value.includes('.exe') || 
        value.includes('.pdf') ||
        value.includes('.zip') ||
        value.includes('.dll')
    )) {
        return true;
    }
    
    return false;
}

function selectEvent(eventId) {
    selectedEventId = eventId;
    const event = trainingEvents.find(e => e.id === eventId);
    
    if (!event) return;

    const panel = document.getElementById('eventDetailsPanel');
    panel.classList.remove('empty');

    const isClassified = event.userClassification !== null;

    const formattedTimestamp = new Date(event.timestamp).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).replace(',', '');

    // Create the layout HTML without investigation tools in event details
    let detailsHTML = `
        <div class="event-details-content">
            <div class="event-header">
                <div class="event-title">${event.description}</div>
                <div class="event-meta">Severity: ${event.severity.toUpperCase()} | Type: ${event.eventType} | ${formattedTimestamp}</div>
            </div>

            <div class="event-actions">
                <button class="btn btn-danger" onclick="classifyEvent('malicious')" ${isClassified ? 'disabled' : ''}>🚨 Malicious</button>
                <button class="btn btn-warning" onclick="classifyEvent('suspicious')" ${isClassified ? 'disabled' : ''}>⚠️ Suspicious</button>
                <button class="btn btn-success" onclick="classifyEvent('false_positive')" ${isClassified ? 'disabled' : ''}>✅ False Positive</button>
            </div>`;

    if (isClassified) {
        detailsHTML += `
        <div style="background: #2d4663; padding: 12px; border-radius: 5px; margin-bottom: 20px; font-size: 13px; border: 1px solid #3a5a7a;">
            <strong>Your Classification:</strong> ${event.userClassification === 'false_positive' ? 'FALSE POSITIVE' : event.userClassification.toUpperCase()}
        </div>`;
    }

    detailsHTML += `
        <!-- Two-column fields layout -->
        <div class="fields-container">
            <div class="field-group">
                <div class="field-label">Event ID</div>
                <div class="field-value">
                    <div class="field-value-content">${event.id}</div>
                </div>
            </div>
            
            <div class="field-group">
                <div class="field-label">Source IP</div>
                <div class="field-value">
                    <div class="field-value-content">${event.sourceIP}</div>
                    <div class="copy-icon" onclick="copyToClipboard('${event.sourceIP}', this)" title="Copy to clipboard">📋</div>
                </div>
            </div>
            
            <div class="field-group">
                <div class="field-label">Destination IP</div>
                <div class="field-value">
                    <div class="field-value-content">${event.destinationIP}</div>
                    <div class="copy-icon" onclick="copyToClipboard('${event.destinationIP}', this)" title="Copy to clipboard">📋</div>
                </div>
            </div>
            
            <div class="field-group">
                <div class="field-label">Destination</div>
                <div class="field-value">
                    <div class="field-value-content">${event.destination}</div>
                    <div class="copy-icon" onclick="copyToClipboard('${event.destination}', this)" title="Copy to clipboard">📋</div>
                </div>
            </div>`;

    // Add all event details in two-column layout
    const detailEntries = Object.entries(event.details);
    detailEntries.forEach(([key, value]) => {
        // Determine if this field should be full-width
        const isLongField = key.includes('command_line') || key.includes('url') || key.includes('raw_logs') || 
                           key.includes('query') || key.includes('download_url') || 
                           value.toString().length > 50;
        
        const fieldClass = isLongField ? 'field-group full-width' : 'field-group';
        
        // Check if this field should be copyable
        const isCopyable = isCopyableValue(key, value);
        const copyIcon = isCopyable ? 
            `<div class="copy-icon" onclick="copyToClipboard('${value.replace(/'/g, '\\\'').replace(/"/g, '&quot;')}', this)" title="Copy to clipboard">📋</div>` : 
            '';
        
        detailsHTML += `
            <div class="${fieldClass}">
                <div class="field-label">${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
                <div class="field-value">
                    <div class="field-value-content">${value}</div>
                    ${copyIcon}
                </div>
            </div>`;
    });

    detailsHTML += `
        </div>

        <!-- Collapsible Raw Data Section -->
        <div class="raw-data-section">
            <div class="raw-data-header" onclick="toggleRawData()">
                <h4 style="margin: 0; color: #ffffff;">Raw Event Data</h4>
                <span class="raw-data-toggle" id="rawDataToggle">Click to expand ▼</span>
            </div>
            <div class="raw-data-content" id="rawDataContent">
                <div class="event-raw-data">${event.rawData}</div>
            </div>
        </div>
        
        </div>
    `;

    panel.innerHTML = detailsHTML;
    renderEvents();
}

function toggleRawData() {
    const content = document.getElementById('rawDataContent');
    const toggle = document.getElementById('rawDataToggle');
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        toggle.textContent = 'Click to expand ▼';
    } else {
        content.classList.add('expanded');
        toggle.textContent = 'Click to collapse ▲';
    }
}

function classifyEvent(classification) {
    if (!selectedEventId) return;
    
    const event = trainingEvents.find(e => e.id === selectedEventId);
    if (!event || event.userClassification) return;

    event.userClassification = classification;
    classificationsComplete++;

    selectEvent(selectedEventId);
    updateStats();

    if (classificationsComplete === trainingEvents.length) {
        setTimeout(showResults, 500);
    }
}

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            showTimeUpResults();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timeRemaining').textContent = display;
    
    const timerElement = document.getElementById('timeRemaining');
    if (timeRemaining <= 300) {
        timerElement.style.color = '#e53e3e';
    } else if (timeRemaining <= 600) {
        timerElement.style.color = '#ff9800';
    } else {
        timerElement.style.color = '#4CAF50';
    }
}

function showTimeUpResults() {
    showResults(true);
}

function updateStats() {
    document.getElementById('classifiedEvents').textContent = classificationsComplete;
    document.getElementById('remainingEvents').textContent = trainingEvents.length - classificationsComplete;
    updateTimerDisplay();
}

function showResults(timeUp = false) {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    let correctCount = 0;
    const resultsDetails = document.getElementById('resultsDetails');
    
    let detailsHTML = '';
    
    if (timeUp) {
        detailsHTML += '<div style="color: #e53e3e; font-weight: bold; margin-bottom: 20px; text-align: center;">⏰ Time\'s Up!</div>';
    }

    trainingEvents.forEach(event => {
        let isCorrect = false;
        
        if (event.userClassification) {
            if (event.actualType === 'malicious' && (event.userClassification === 'malicious' || event.userClassification === 'suspicious')) {
                isCorrect = true;
            } else if (event.actualType === 'suspicious' && (event.userClassification === 'suspicious' || event.userClassification === 'malicious')) {
                isCorrect = true;
            } else if (event.actualType === 'false_positive' && event.userClassification === 'false_positive') {
                isCorrect = true;
            }
            
            if (isCorrect) correctCount++;
        }

        const resultClass = event.userClassification ? (isCorrect ? 'correct' : 'incorrect') : 'incorrect';
        const resultIcon = event.userClassification ? (isCorrect ? '✅' : '❌') : '⏸️';
        const classificationText = event.userClassification ? 
            (event.userClassification === 'false_positive' ? 'FALSE POSITIVE' : event.userClassification.toUpperCase()) : 
            'NOT CLASSIFIED';
        
        detailsHTML += `
            <div class="result-item ${resultClass}">
                <div>
                    <strong>${event.description}</strong><br>
                    <small>Source: ${event.sourceIP} → ${event.destinationIP || event.destination}</small><br>
                    <small>Actual: ${event.actualType === 'false_positive' ? 'FALSE POSITIVE' : event.actualType.toUpperCase()} | Your: ${classificationText}</small>
                </div>
                <div>${resultIcon}</div>
            </div>
        `;
    });

    resultsDetails.innerHTML = detailsHTML;
    document.getElementById('finalScore').textContent = `${correctCount}/${trainingEvents.length}`;
    document.getElementById('resultsModal').classList.remove('hidden');
}

function resetTraining() {
    document.getElementById('resultsModal').classList.add('hidden');
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    initializeTraining();
}

function resetEventDetailsPanel() {
    const panel = document.getElementById('eventDetailsPanel');
    panel.classList.add('empty');
    panel.innerHTML = `
        <div>
            <h3>Event Investigation</h3>
            <p>Select an event from the list to investigate</p>
            <br>
            <p><strong>Investigation Steps:</strong></p>
            <p>1. Analyze the event details and raw logs</p>
            <p>2. Use external tools to investigate suspicious elements</p>
            <p>3. Classify the event based on your findings</p>
            <br>
            <p><strong>Classification Options:</strong></p>
            <p>• <strong>Malicious</strong> - Confirmed threat requiring action</p>
            <p>• <strong>Suspicious</strong> - Potentially malicious activity</p>
            <p>• <strong>False Positive</strong> - Benign activity, no threat</p>
        </div>
    `;
}

function toggleDocs() {
    const panel = document.getElementById('docsPanel');
    const toolsPanel = document.getElementById('toolsPanel');
    
    // Close tools panel if open
    if (!toolsPanel.classList.contains('hidden')) {
        toolsPanel.classList.add('hidden');
    }
    
    panel.classList.toggle('hidden');
}

function toggleTools() {
    const panel = document.getElementById('toolsPanel');
    const docsPanel = document.getElementById('docsPanel');
    
    // Close docs panel if open
    if (!docsPanel.classList.contains('hidden')) {
        docsPanel.classList.add('hidden');
    }
    
    panel.classList.toggle('hidden');
}

// Initialize training on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeTraining();
});

// Handle keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        resetEventDetailsPanel();
        selectedEventId = null;
        renderEvents();
    }
});

// Add click-to-copy functionality for investigation values
document.addEventListener('click', function(e) {
    // Removed old copy functionality since we now use individual copy icons
});