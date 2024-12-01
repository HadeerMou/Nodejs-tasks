function fetchingData(cb) {
  console.log("fetching data...");
  setTimeout(() => {
    try {
      const data = [
        { id: 1, name: "Ahmed" },
        { id: 2, name: "Sandy" },
      ];
      if (!data || data.length === 0) throw new Error("No data available");
      cb(null, data);
    } catch (error) {
      cb(error);
    }
  }, 2000);
}

function showData(data, cb) {
  try {
    if (!data || data.length === 0) throw new Error("Invalid data provided");
    console.log("fetched data", data);
    cb(null, data[0]);
  } catch (error) {
    cb(error);
  }
}

function fetchingtasks(userData, cb) {
  console.log(`Fetching data for user ${userData.name}`);
  setTimeout(() => {
    try {
      if (!userData || !userData.name) throw new Error("Invalid user data");

      const tasks = [
        { id: 1, task: "doing sports" },
        { id: 2, task: "run for a mile" },
      ];
      cb(null, tasks);
    } catch (error) {
      cb(error);
    }
  }, 2000);
}

fetchingData((error, data) => {
  if (error) {
    console.error("Error in fetching data:", error.message);
    return;
  }
  showData(data, (error, userData) => {
    if (error) {
      console.error("Error in showing data:", error.message);
      return;
    }
    fetchingtasks(userData, (error, tasks) => {
      if (error) {
        console.error("Error in showing tasks:", error.message);
        return;
      }
      console.log("fetched tasks", tasks);
    });
  });
});
