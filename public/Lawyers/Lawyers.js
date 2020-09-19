fetch("https://sheet.best/api/sheets/f036a22f-f21d-45f6-9eee-ce40be31f37c")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
