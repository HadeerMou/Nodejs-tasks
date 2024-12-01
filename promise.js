function fetchingData() {
  return new Promise(function (resolve, reject) {
    console.log("fetching data...");
    setTimeout(() => {
      try {
        const data = [
          { id: 1, name: "Ahmed" },
          { id: 2, name: "Sandy" },
        ];
        if (Math.random() > 0.8) throw new Error("Failed to fetch data");
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
}

function fetchingtasks(userData) {
  return new Promise(function (resolve, reject) {
    console.log(`Fetching tasks for ${userData.name}`);
    setTimeout(() => {
      try {
        if (!userData || !userData.name) throw new Error("Invalid user data");
        const tasks = [
          { id: 1, task: "Reading a book" },
          { id: 2, task: "run for a mile" },
        ];
        console.log("Fetched tasks", tasks);
        resolve(tasks);
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
}

fetchingData()
  .then((data) => {
    console.log("fetched data ", data);
    return fetchingtasks(data[1]);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
