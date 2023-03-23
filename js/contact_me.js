function submitForm() {
  // Get the form data
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const neighborhood = document.getElementById('neighborhood').value;
  const city = document.getElementById('city').value;
  
  // Create the post data object
  const postData = {
    name,
    phone,
    email,
    neighborhood,
    city
  };
  console.log('postData> ' + postData)
  // Send the post data to the server-side script
  fetch('https://public-ends-hunt-189-83-161-24.loca.lt/verly-leads-api/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(response => {
    // Handle the response from the server
    console.log('Post created successfully!');
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error creating post:', error);
  });
}
