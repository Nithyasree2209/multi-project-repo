// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>View Student Details</title>
//     <style>
//         .arrange {
//             width: 50%;
//             background-color: white;
//             margin-top: 100px;
//             margin-left: auto;
//             margin-right: auto;
//             padding: 20px;
//             color: black;
//             text-align: left;
//             border-radius: 10px;
//             border: 2px solid black;
//         }

//         img {
//             max-width: 150px;
//             border-radius: 10px;
//             margin-top: 10px;
//         }

//         button {
//             padding: 10px 20px;
//             font-size: 16px;
//             background-color: #007bff;
//             color: white;
//             border-radius: 10px;
//             border: none;
//             cursor: pointer;
//             border-radius: 5px;
//         }

//         button:hover {
//             background-color: #0056b3;
//         }
//     </style>
// </head>
// <body style="background-color: purple;">
//     <div class="arrange">
//         <h1 style="color: purple;text-align: center;">Student Details</h1>
//         <div id="studentDetails"></div>
//         <br>
//         <button onclick="goBack()">Back</button>
//     </div>

//     <script>
//         document.addEventListener("DOMContentLoaded", function () {
//             let student = JSON.parse(localStorage.getItem("selectedStudent"));

//             if (student) {
//                 document.getElementById("studentDetails").innerHTML = `
//                     <p><strong>Photo:</strong><br>
//                     <img src="${student.photo}" alt="Student Photo"></p>
                    
//                     <p><strong>Name:</strong> ${student.name}</p>
//                     <p><strong>Roll Number:</strong> ${student.roll}</p>
//                     <p><strong>Register Number:</strong> ${student.reg}</p>
//                     <p><strong>College / School:</strong> ${student.college}</p>
//                     <p><strong>Phone:</strong> ${student.phone}</p>
//                     <p><strong>Email:</strong> ${student.email}</p>
//                     <p><strong>Date of Birth:</strong> ${student.dob}</p>
//                     <p><strong>Gender:</strong> ${student.gender}</p>
//                     <p><strong>ID Proof:</strong> ${student.ID}</p>
//                     <p><strong>End Sem Mark Sheet:</strong> ${student.sem}</p>
//                     <p><strong>Events:</strong> ${student.events.join(", ")}</p>
//                 `;
//             } else {
//                 document.getElementById("studentDetails").innerHTML = "<p>No student data found!</p>";
//             }
//         });

//         function goBack() {
//             window.location.href = "table.html"; // Navigate back to table page
//         }
//     </script>
// </body>
// </html>