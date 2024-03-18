

{/* country list in .json
http://country.io/names.json */}


    fetch('http://country.io/names.json')
      .then(response => response.json())
      .then(json => console.log(json))
