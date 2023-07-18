fetch('arn:aws:lambda:eu-north-1:712461711953:function:hllambda')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').textContent = data.message;
  })
  .catch(error => console.error(error));