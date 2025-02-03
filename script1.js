document.addEventListener("DOMContentLoaded", loadRecords);

document.getElementById("patientForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let disorder = document.getElementById("disorder").value;
    let reason = document.getElementById("reason").value;

    let patient = { name, age, gender, disorder, reason };
    let patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.push(patient);
    localStorage.setItem("patients", JSON.stringify(patients));

    document.getElementById("patientForm").reset();
    document.getElementById("message").textContent = "Record added successfully!";
    document.getElementById("message").style.color = "green";

    loadRecords();
});

function loadRecords() {
    let patients = JSON.parse(localStorage.getItem("patients")) || [];
    let tableBody = document.querySelector("#recordsTable tbody");
    tableBody.innerHTML = "";

    patients.forEach((patient, index) => {
        let row = tableBody.insertRow();

        row.insertCell(0).textContent = patient.name;
        row.insertCell(1).textContent = patient.age;
        row.insertCell(2).textContent = patient.gender;
        row.insertCell(3).textContent = patient.disorder;
        row.insertCell(4).textContent = patient.reason;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.setAttribute("aria-label", `Delete record of ${patient.name}`);
        deleteBtn.onclick = () => deleteRecord(index);

        let actionCell = row.insertCell(5);
        actionCell.appendChild(deleteBtn);
    });
}

function deleteRecord(index) {
    let patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.splice(index, 1);
    localStorage.setItem("patients", JSON.stringify(patients));
    loadRecords();
}
