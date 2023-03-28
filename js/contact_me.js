function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const name = document.querySelector("#name").value
  const phone = document.querySelector("#phone").value
  const email = document.querySelector("#email").value
  const neighborhood = document.querySelector("#neighborhood").value
  const city = document.querySelector("#city").value
  var alertMsg = document.getElementById("alertMsg")

  const headers = {
  'Content-Type': 'application/json'
  };
  // Set the object with the data to send
  const postData = {
      name: name,
      phone: phone.replace('(','').replace(')','').replace('-',''),
      email: email,
      neighborhood: neighborhood,
      city: city
    };

    
  // Send the POST request with the message body using fetch()
  fetch('https://verly-leads-api.loca.lt-v2/verly-leads-api/send', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(postData)
  })
  .then(response => {
    alertSuccessMsg.style.display = "block";
    setTimeout(function(){
      alertSuccessMsg.style.display = "none";
   }, 3000);
    // Handle the server response
    document.getElementById("contact-form").reset()
    alertMsg.focus()
    console.log('Post created successfully!');
  })
  .catch(error => {
    alertErrorMsg.style.display = "block";
    alertMsg.focus()
    setTimeout(function(){
      alertErrorMsg.style.display = "none";
   }, 3000);
    // Handle the errors that occurred during the request
    console.error('Error creating post:', error);
  });
}
