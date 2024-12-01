function fetchingData() {
  return new Promise(function (resolve, reject) {
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
  return new Promise(function (resolve, reject) {
    console.log(`Fetching data from ${userData.name}`);
    setTimeout(() => {
      const tasks = [
        { id: 1, task: "doing sports" },
        { id: 1, task: "run for a mile" },
      ];
      resolve(tasks);
    }, 2000);
  });
}

async function showData() {
  const data = await fetchingData();
  console.log("fetched data", data);
  const task = await fetchingtasks(data);
  console.log("fetched tasks", task);
}

showData();
