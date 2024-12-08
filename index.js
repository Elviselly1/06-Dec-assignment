const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      const newData = result.map((each, index) => {
        return each.id, each.title;
      });

      console.log(newData);

      const secData = result.filter((each, index) => {
        return each.id == 7;
      });

      console.log(secData);
    });
};

getData();
