function calculateStudyTimeAllocation(subject, deadline, difficulty, progress) {
    const timeRemaining = (new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24); // Days remaining.
    let studyTime = 0;

    switch(difficulty) {
        case "easy":
            studyTime = timeRemaining * 0.2; // Less time for easier subjects.
            break;
        case "medium":
            studyTime = timeRemaining * 0.5;
            break;
        case "hard":
            studyTime = timeRemaining * 0.8; // More time for harder subjects.
            break;
    }

    // Adjust based on student progress.
    if (progress === "improving") {
        studyTime *= 0.8; // Less time if they are improving.
    } else if (progress === "struggling") {
        studyTime *= 1.2; // More time if they are struggling.
    }

    return studyTime;
}
