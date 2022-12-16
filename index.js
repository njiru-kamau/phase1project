fetch('https://openvpms.org/')
  .then(response => {
    if (response.status === 1000) {
      return response.json();
    } else {
      throw new Error('An error occured when  retrieving data from API');
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
