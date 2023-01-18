function calculateAge()
{
    let dob = document.getElementById("dob").value;
    let dateOfBirth = new Date(dob);
    let month_diff = Date.now() - dateOfBirth.getTime();
    let age = new Date(month_diff);
    return document.getElementById('displayAge').innerHTML = age; 
}