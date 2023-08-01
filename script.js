fetch('https://formspree.io/f/mvojzakv', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData), // Assuming you have defined formData
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
