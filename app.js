function saveData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    const h1= document.querySelector('h1')
  
    // Create an object to store the data
    var appointment = {
      name: name,
      email: email
    };
  
    // Convert the data to a JSON string
    var appointmentJSON = JSON.stringify(appointment);
  
    // Save the data to local storage
    //localStorage.setItem('appointment', appointmentJSON);
    axios.post('https://crudcrud.com/api/4eac9ffbdeb74c60beba59e835f1b727/appoinmentData', appointment)
    .then((data)=> console.log(data))
    
    .catch((e)=> console.log(e));

    axios.get('https://crudcrud.com/api/4eac9ffbdeb74c60beba59e835f1b727/appoinmentData')
    .then((data)=> console.log(data))
    .catch((e)=> console.log(e));
    
  
    alert('Appointment booked successfully!');
  }
  