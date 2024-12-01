function fetchingData(cb) {
  console.log("fetching data...");
  setTimeout(() => {
    data = [
      { id: 1, name: "Ahmed" },
      { id: 2, name: "Sandy" },
    ];
    cb(data);
  }, 2000);
}

function showData(data, cb) {
  console.log("fetched data", data);
  cb(data);
}

function fetchingtasks(userData, cb) {
  console.log(`Fetching data for user ${userData.name}`);
  setTimeout(() => {
    const tasks = [
      { id: 1, task: "doing sports" },
      { id: 2, task: "run for a mile" },
    ];
    cb(tasks);
  }, 2000);
}

fetchingData((data) => {
  showData(data, (userData) => {
    fetchingtasks(userData, (tasks) => {
      console.log("fetched tasks", tasks);
    });
  });
});
