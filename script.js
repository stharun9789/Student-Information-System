
function showStudentLogin() {
    document.getElementById('studentLogin').style.display = 'block';
    document.getElementById('staffLogin').style.display = 'none';
}

function showStaffLogin() {
    document.getElementById('staffLogin').style.display = 'block';
    document.getElementById('studentLogin').style.display = 'none';
}

// Sample student data
const students = [
    {
        username: 'student1',
        password: 'password1',
        name: 'S.Tharun',
        registerNumber: '510521205049',
        bloodGroup: 'O+',
        dob: '19/01/2004',
        age: '20',
        address: '5/24, Sivaraj Pettai, Old Colony, Tirupathur, Tirupathur District',
        degree: 'Bachelor of Technology',
        branch: 'Information Technology',
        emailAddress: 'stharun9789@gmail.com',
        phoneNumber: '7806994958',
        pinCode: '635601',
        image: '/images/tharun.jpeg'
    },
    {
        username: 'student2',
        password: 'password2',
        name: 'Sakthivel',
        registerNumber: '54321',
        bloodGroup: 'B-',
        dob: '1998-05-15',
        age: '24',
        address: '456 Elm Street',
        degree: 'Bachelor of Technology',
        branch: 'Information Technology',
        emailAddress: 'stharun9789@gmail.com',
        phoneNumber: '987-654-3210',
        pinCode: '12345',
        image: '/images/sak.jpg'
    },
    {
        username: 'student3',
        password: 'password3',
        name: 'Saran',
        registerNumber: '12345',
        bloodGroup: 'A+',
        dob: '2000-01-01',
        age: '22',
        address: '123 Main Street',
        degree: 'Bachelor of Technology',
        branch: 'Information Technology',
emailAddress: 'stharun9789@gmail.com',
        phoneNumber: '123-456-7890',
        pinCode: '54321',
        image: '/images/sar.jpg'
    },
 {
        username: 'student4',
        password: 'password4',
        name: 'Vallarasu',
        registerNumber: '12345',
        bloodGroup: 'A+',
        dob: '2000-01-01',
        age: '22',
        address: '123 Main Street',
        degree: 'Bachelor of Technology',
        branch: 'Information Technology',
emailAddress: 'stharun9789@gmail.com',
        phoneNumber: '123-456-7890',
        pinCode: '54321',
        image: '/images/val.jpg'
    },
 {
        username: 'student5',
        password: 'password5',
        name: 'Jaya Surya',
        registerNumber: '12345',
        bloodGroup: 'A+',
        dob: '2000-01-01',
        age: '22',
        address: '123 Main Street',
        degree: 'Bachelor of Technology',
        branch: 'Information Technology',
emailAddress: 'stharun9789@gmail.com',
        phoneNumber: '123-456-7890',
        pinCode: '54321',
        image: '/images/val.jpg'
    },
 {
        username: 'student6',
        password: 'password6',
        name: 'Sathish Kumar',
        registerNumber: '12345',
        bloodGroup: 'A+',
        dob: '2000-01-01',
        age: '22',
        address: '123 Main Street',
        degree: 'Bachelor of Technology',
        branch: 'Information Technology',
emailAddress: 'stharun9789@gmail.com',
        phoneNumber: '123-456-7890',
        pinCode: '54321',
        image: '/images/sath.jpg'
    },
 {
        username: 'student7',
        password: 'password7',
        name: 'Thirupathi',
        registerNumber: '12345',
        bloodGroup: 'A+',
        dob: '2000-01-01',
        age: '22',
        address: '123 Main Street',
        degree: 'Bachelor of Technology',
        branch: 'Information Technology',
emailAddress: 'stharun9789@gmail.com',
        phoneNumber: '123-456-7890',
        pinCode: '54321',
        image: '/images/'
    },
 {
        username: 'student8',
        password: 'password8',
        name: 'Thirumalai',
        registerNumber: '12345',
        bloodGroup: 'A+',
        dob: '2000-01-01',
        age: '22',
        address: '123 Main Street',
        degree: 'Bachelor of Technology',
        branch: 'Information Technology',
emailAddress: 'stharun9789@gmail.com',
        phoneNumber: '123-456-7890',
        pinCode: '54321',
        image: '/images/thiru.jpg'
    },
 {
        username: 'student9',
        password: 'password9',
        name: 'Gurudeep',
        registerNumber: '12345',
        bloodGroup: 'A+',
        dob: '2000-01-01',
        age: '22',
        address: '123 Main Street',
        degree: 'Bachelor of Technology',
        branch: 'Information Technology',
emailAddress: 'stharun9789@gmail.com',
        phoneNumber: '123-456-7890',
        pinCode: '54321',
        image: '/images/guru.jpg'
    },
 {
        username: 'student10',
        password: 'password10',
        name: 'Tamil Mani',
        registerNumber: '12345',
        bloodGroup: 'A+',
        dob: '2000-01-01',
        age: '22',
        address: '123 Main Street',
        degree: 'Bachelor of Technology',
        branch: 'Information Technology',
emailAddress: 'stharun9789@gmail.com',
        phoneNumber: '123-456-7890',
        pinCode: '54321',
        image: '/images/tamil.jpg'
    },
    // Add more sample student data as needed
];

// Sample staff data
const staff = {
    username: 'staff',
    password: 'staffpassword',
    students: students
};

function studentLogin() {
    var username = document.getElementById('studentUsername').value;
    var password = document.getElementById('studentPassword').value;

    var student = students.find(student => student.username === username && student.password === password);
    if (student) {
        displayStudentInfo(student);
        return false; // Prevent form submission
    } else {
        alert('Invalid username or password');
        return false; // Prevent form submission
    }
}

function staffLogin() {
    var username = document.getElementById('staffUsername').value;
    var password = document.getElementById('staffPassword').value;

    if (username === staff.username && password === staff.password) {
        displayAllStudentInfo();
        return false; // Prevent form submission
    } else {
        alert('Invalid username or password');
        return false; // Prevent form submission
    }
}

function displayStudentInfo(student) {
    document.getElementById('studentName').textContent = student.name;
    document.getElementById('registerNumber').textContent = student.registerNumber;
    document.getElementById('bloodGroup').textContent = student.bloodGroup;
    document.getElementById('dob').textContent = student.dob;
    document.getElementById('age').textContent = student.age;
    document.getElementById('address').textContent = student.address;
    document.getElementById('degree').textContent = student.degree;
    document.getElementById('branch').textContent = student.branch;
document.getElementById('emailAddress').textContent = student.emailAddress;
    document.getElementById('phoneNumber').textContent = student.phoneNumber;
    document.getElementById('pinCode').textContent = student.pinCode;

    document.getElementById('studentImage').src = student.image;
    document.getElementById('studentImageContainer').style.display = 'block';
    document.getElementById('studentInfo').style.display = 'block';
}

function displayAllStudentInfo() {
    document.getElementById('studentInfo').innerHTML = ''; // Clear previous data

    staff.students.forEach(student => {
        var studentInfoDiv = document.createElement('div');
        studentInfoDiv.innerHTML = `
            <div class="image-container">
                <img class="user-image" src="${student.image}" alt="Student Image">
            </div>
            <h2>Student Information</h2>
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Register Number:</strong> ${student.registerNumber}</p>
            <p><strong>Blood Group:</strong> ${student.bloodGroup}</p>
            <p><strong>Date of Birth:</strong> ${student.dob}</p>
            <p><strong>Age:</strong> ${student.age}</p>
            <p><strong>Address:</strong> ${student.address}</p>
            <p><strong>Degree:</strong> ${student.degree}</p>
            <p><strong>Branch:</strong> ${student.branch}</p>
    <p><strong>Email Address:</strong> ${student.emailAddress}</p>
            <p><strong>Phone Number:</strong> ${student.phoneNumber}</p>
            <p><strong>Pin Code:</strong> ${student.pinCode}</p>
            <hr>
        `;
        document.getElementById('studentInfo').appendChild(studentInfoDiv);
    });

    document.getElementById('studentInfo').style.display = 'block';
}