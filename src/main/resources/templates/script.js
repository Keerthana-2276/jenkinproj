function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "student" && password === "1234") {
        window.location.href = "dashboard.html";  // redirect
    } else {
        document.getElementById("error").innerText = "Invalid Username or Password";
    }
}

function logout() {
    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}

function addData() {
    var subject = document.getElementById("subject").value;
    var marks = document.getElementById("marks").value;

    if (subject === "" || marks === "") {
        alert("Please fill all fields");
        return;
    }

    var table = document.getElementById("dataTable");

    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = subject;
    cell2.innerHTML = marks;

    document.getElementById("subject").value = "";
    document.getElementById("marks").value = "";
}