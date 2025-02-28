  const scriptURL = 'https://script.google.com/macros/s/AKfycbzcdbahT5fhWVT1CVrqEpHOmqfOvvSJCYHQ1ghNV8sqVHGztj8MzjiXi2VUBLZDnm0yaQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
