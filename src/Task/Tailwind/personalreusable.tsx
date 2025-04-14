import React from 'react';

type StudentProps = {
  name: string;
  rollNumber: string;
  regNumber: string;
  department: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dob: string;
  nationality: string;
  state: string;
  fatherName: string;
  motherName: string;
  parentContact: string;
  courseType: string;
  admissionYear: number;
  passingYear: number;
  city: string;
  zipCode: string;
  address: string;
};

const Student: React.FC<StudentProps> = (props) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{props.name}</h2>
      <p><strong>Roll Number:</strong> {props.rollNumber}</p>
      <p><strong>Reg Number:</strong> {props.regNumber}</p>
      <p><strong>Department:</strong> {props.department}</p>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Phone Number:</strong> {props.phoneNumber}</p>
      <p><strong>Gender:</strong> {props.gender}</p>
      <p><strong>Date of Birth:</strong> {props.dob}</p>
      <p><strong>Nationality:</strong> {props.nationality}</p>
      <p><strong>State:</strong> {props.state}</p>
      <p><strong>Father's Name:</strong> {props.fatherName}</p>
      <p><strong>Mother's Name:</strong> {props.motherName}</p>
      <p><strong>Parent Contact:</strong> {props.parentContact}</p>
      <p><strong>Course Type:</strong> {props.courseType}</p>
      <p><strong>Admission Year:</strong> {props.admissionYear}</p>
      <p><strong>Passing Year:</strong> {props.passingYear}</p>
      <p><strong>City:</strong> {props.city}</p>
      <p><strong>Zip Code:</strong> {props.zipCode}</p>
      <p><strong>Address:</strong> {props.address}</p>
    </div>
  );
};

export default Student;
