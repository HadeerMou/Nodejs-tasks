function fetchingData() {
  return new Promise(function (resolve, reject) {
    console.log("fetching data...");
    setTimeout(() => {
      try {
        const data = [
          { id: 1, name: "Ahmed" },
          { id: 2, name: "Sandy" },
        ];
        if (!data || data.length === 0) throw new Error("No data available");
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
}

function fetchingtasks(userData) {
  return new Promise(function (resolve, reject) {
    console.log(`Fetching data for user ${userData.name}`);
    setTimeout(() => {
      try {
        if (!userData || !userData.name) throw new Error("Invalid user data");
        const tasks = [
          { id: 1, task: "doing sports" },
          { id: 2, task: "run for a mile" },
        ];
        resolve(tasks);
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
}

async function showData() {
  try {
    const data = await fetchingData();
    console.log("fetched data", data);
    const task = await fetchingtasks(data[0]);
    console.log("fetched tasks", task);
  } catch (error) {
    console.error("An error occurred", error.message);
  }
}

showData();
