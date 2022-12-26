
const baseurl = `${window.location.origin}`;
export async function getAllTasks() {  

  const response = await fetch(baseurl + "/api/tasks");
  return await response.json();
}

export async function createTask(data) {
  console.log("New Post Info :", data);
  const response = await fetch(baseurl + `/api/task`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: data }),
  });
  return await response.json();
}

export async function deleteTask(taskId) {
  console.log("be seneded taskid is that:", taskId);
  const response = await fetch(baseurl + `/api/task/${taskId}`, { method: "DELETE" });
  return await response.json();
}

export async function editTask(data) {
  console.log("be sended edit data is that:", data);
  const response = await fetch(baseurl + `/api/task`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: data }),
  });
  return await response.json();
}

export async function fetchSettings() {
  const response = await fetch(baseurl + "/api/settings");
  return await response.json();
}
