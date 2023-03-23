function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const name = document.querySelector("#name").value;
  const phone = document.querySelector("#phone").value;
  const email = document.querySelector("#email").value;
  // const neighborhood = document.querySelector("#neighborhood").value;
  // const city = document.querySelector("#city").value;
  // console.log("name>>>" + document.querySelector("#name"))

  const headers = new Headers({
  'Content-Type': 'application/json'
});
  // Set the object with the data to send
  const postData = {
      name: name,
      phone: phone,
      email: email,
      // neighborhood: neighborhood,
      // city: city
    };

  // Send the POST request with the message body using fetch()
  fetch('http://itchy-pears-wonder-189-83-161-24.loca.lt/verly-leads-api/save', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(postData)
  })
  console.log("body " + JSON.stringify(postData) +" "+ "header"+ JSON.stringify(headers))
  .then(response => {
    console.log("response: " + JSON.stringify(response))
    // Handle the server response
    console.log('Post created successfully!');
  })
  .catch(error => {
    // Handle the errors that occurred during the request
    console.error('Error creating post:', error);
  });
}
