// Patient Registration
document.getElementById("patientForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("patientName").value;
    let age = document.getElementById("patientAge").value;
    let disease = document.getElementById("patientDisease").value;

    // Create new table row
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${disease}</td>
    `;

    document.getElementById("patientList").appendChild(row);

    // Clear form
    document.getElementById("patientForm").reset();

    alert("Patient registered successfully!");
});


// Appointment Booking
document.getElementById("appointmentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let patientName = document.getElementById("appPatient").value;
    let doctorName = document.getElementById("doctor").value;
    let appointmentDate = document.getElementById("date").value;

    // Display success message
    document.getElementById("message").innerHTML =
        "✅ Appointment booked successfully!<br>" +
        "Patient: " + patientName + "<br>" +
        "Doctor: " + doctorName + "<br>" +
        "Date: " + appointmentDate;

    // Clear appointment form
    document.getElementById("appointmentForm").reset();
});
