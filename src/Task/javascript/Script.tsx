
// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("registrationForm");
//     const photoInput = document.getElementById("photo");
//     const photoInput1 = document.getElementById("ID");
//     const photoInput2 = document.getElementById("Sem");
//     const photoPreview = document.getElementById("photoPreview");
//     const photoPreview1 = document.getElementById("photoPreview1");
//     const photoPreview2 = document.getElementById("photoPreview2m");

//     // Handle photo upload preview
//     if (photoInput) {
//         photoInput.addEventListener("change", function (event) {
//             const file = event.target.files[0];
//             if (file) {
//                 const reader = new FileReader();
//                 reader.onload = function (e) {
//                     photoPreview.src = e.target.result;
//                     photoPreview.style.display = "block"; // Show preview
//                 };
//                 reader.readAsDataURL(file);
//             }
//         });
//     }
//     if (photoInput1) {
//         photoInput1.addEventListener("change", function (event) {
//             const file = event.target.files[0];
//             if (file) {
//                 const reader = new FileReader();
//                 reader.onload = function (e) {
//                     photoPreview1.src = e.target.result;
//                     photoPreview1.style.display = "block"; // Show preview
//                 };
//                 reader.readAsDataURL(file);
//             }
//         });
//     }

//     if (photoInput2) {
//         photoInput2.addEventListener("change", function (event) {
//             const file = event.target.files[0];
//             if (file) {
//                 const reader = new FileReader();
//                 reader.onload = function (e) {
//                     photoPreview2.src = e.target.result;
//                     photoPreview2.style.display = "block"; // Show preview
//                 };
//                 reader.readAsDataURL(file);
//             }
//         });
//     }

//     // Handle form submission
//     if (form) {
//         form.addEventListener("submit", function (event) {
//             event.preventDefault();

//             let name = document.getElementById("name").value;
//             let roll = document.getElementById("rollNo").value;
//             let reg = document.getElementById("registerNo").value;
//             let college = document.getElementById("college").value;
//             let phone = document.getElementById("phone").value;
//             let email = document.getElementById("email").value;
//             let dob = document.getElementById("dob").value;
//             let gender = document.querySelector("input[name='gender']:checked")?.value || "N/A";
//             let ID = document.getElementById("file").value;
//             let sem = document.getElementById("sem").value;

//             let events = [];
//             document.querySelectorAll("input[name='event']:checked").forEach(event => {
//                 events.push(event.value);
//             });

//             let photo = photoPreview.src || ""; // Store base64 photo data
//             let photo1 = photoPreview1.src || ""; // Store base64 photo data
//             let photo2 = photoPreview2.src || ""; // Store base64 photo data

//             if (!name || !roll || !reg || !college || !phone || !email || !dob || !gender || !ID || !sem) {
//                 alert("Please fill all the required fields.");
//                 return;
//             }

//             let studentData = JSON.parse(localStorage.getItem("students")) || [];
//             studentData.push({ name, roll, reg, college, phone, email, dob, gender, ID, events, sem, photo });
//             localStorage.setItem("students", JSON.stringify(studentData));

//             window.location.href = "table.html"; // Redirect to table page
//         });
//     } else {
//         displayData();
//     }
// });

// // Function to display registered students in table
// function displayData() {
//     let studentData = JSON.parse(localStorage.getItem("students")) || [];
//     let table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
//     table.innerHTML = ""; // Clear existing rows before appending new ones

//     studentData.forEach((student, index) => {
//         let newRow = table.insertRow();
//         newRow.innerHTML = `
//             <td>${student.name}</td>
//             <td>${student.roll}</td>
//             <td>${student.reg}</td>
//             <td>${student.college}</td>
//             <td>${student.phone}</td>
//             <td>${student.email}</td>
//             <td>${student.dob}</td>
//             <td>${student.gender}</td>
//             <td>${student.events.join(", ")}</td>
           
//               <td><img src="${student.ID}" alt="Student ID" style="max-width: 50px;"></td>
            
//             <td><img src="${student.sem}" alt="Student sem" style="max-width: 50px;"></td>
            
//              <td><img src="${student.photo}" alt="Student Photo" style="max-width: 50px;"></td>
          
//                 <button class="viewBtn" data-index="${index}">View</button>
//                 <button class="deleteBtn" data-index="${index}">Delete</button>
//             </td>
//         `;
//     });

//     // Attach event listeners to buttons after rendering rows
//     document.querySelectorAll(".deleteBtn").forEach(button => {
//         button.addEventListener("click", function () {
//             let index = this.getAttribute("data-index");
//             deleteRow(index);
//         });
//     });

//     document.querySelectorAll(".viewBtn").forEach(button => {
//         button.addEventListener("click", function () {
//             let index = this.getAttribute("data-index");
//             view(index);
//         });
//     });
// }

// // Function to delete a student record
// function deleteRow(index) {
//     let studentData = JSON.parse(localStorage.getItem("students")) || [];
//     if (confirm("Are you sure you want to delete this record?")) {
//         studentData.splice(index, 1);
//         localStorage.setItem("students", JSON.stringify(studentData));
//         displayData(); // Refresh table without reloading the page
//     }
// }

// // Function to view a single student record
// function view(index) {
//     let studentData = JSON.parse(localStorage.getItem("students")) || [];
//     localStorage.setItem("selectedStudent", JSON.stringify(studentData[index])); // Store selected student
//     window.location.href = "view.html"; // Redirect to view page
// }

