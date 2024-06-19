function scheduler() {
    let patientName;
    let doctor;
    let time;
    let date;
    let message;

    patientName = prompt("What is the patient's name?");
    doctor = prompt("Would you like to see doctor Batman, Hulk or Superman? Enter one of those three.");
    date = prompt("What date would you prefer?mm/dd/yy");
    time = prompt("What time of day do you prefer?");
    message = prompt("What is your reason for coming in to see the doctor?");

    review.innerHTML = `Hi! ${patientName}. Your appointment with Dr. ${doctor} is scheduled for:`;
    appointmentParagraph.innerHTML = `${date} at ${time} o'clock.`;
    message.innerHTML = `Message to doctor:<br><br> ${message}.`

    
}
appointmentButton.onclick = scheduler;