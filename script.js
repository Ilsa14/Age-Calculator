function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (dob === "") {
        document.getElementById('result').innerText = "Please enter a valid date.";
        return;
    }
    
    const dobDate = new Date(dob);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - dobDate.getFullYear();
    const monthDifference = currentDate.getMonth() - dobDate.getMonth();
    const dayDifference = currentDate.getDate() - dobDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is ${age} years.`;
}
