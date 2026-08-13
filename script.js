function callService(number) {
    alert("Emergency Service Number: " + number);
}

function reportEmergency() {
    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let message = document.getElementById("message").value;

    if (name === "" || location === "" || message === "") {
        alert("Please fill all the details.");
        return;
    }

    document.getElementById("result").innerText =
        "Emergency reported successfully! Help will be arranged soon.";

    document.getElementById("name").value = "";
    document.getElementById("location").value = "";
    document.getElementById("message").value = "";
}

