chrome.alarms.create("studyReminder", {
    delayInMinutes: 60, // Trigger every hour, can be adjusted dynamically.
    periodInMinutes: 60
});

chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === "studyReminder") {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icon48.png",
            title: "Time to Study!",
            message: "It's time to revise for your upcoming exam!"
        });
    }
});
