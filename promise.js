function fetchingData() {
  return new Promise(function (resolve, reect) {
    console.log("fetching data...");
    setTimeout(() => {
      data = [
        { id: 1, name: "Ahmed" },
        { id: 2, name: "Sandy" },
      ];
      resolve(data);
    }, 2000);
  });
}

function fetchingtasks(userData) {
  console.log(`Fetching data from ${userData.name}`);
  setTimeout(() => {
    const tasks = [
      { id: 1, task: "doing sports" },
      { id: 2, task: "run for a mile" },
    ];
    console.log(tasks);
  }, 2000);
}

fetchingData()
  .then((data) => {
    console.log("fetched data ", data);
  })
  .then((tasks) => {
    return fetchingtasks(data);
  });
