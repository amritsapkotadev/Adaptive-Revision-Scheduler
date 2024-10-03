document.getElementById("save").addEventListener("click", function() {
    const subject = document.getElementById("subject").value;
    const deadline = document.getElementById("deadline").value;
    const difficulty = document.getElementById("difficulty").value;

    // Save to Chrome's storage
    chrome.storage.sync.set({ subject, deadline, difficulty }, function() {
        alert("Revision plan saved!");
    });

    // Calculate initial schedule (more logic will go here for adaptation)
    updateSchedule();
});

function updateSchedule() {
    chrome.storage.sync.get(["subject", "deadline", "difficulty"], function(data) {
        const progress = document.getElementById("progress");
        
        // Placeholder: Update this section with real adaptive scheduling logic.
    });
}
