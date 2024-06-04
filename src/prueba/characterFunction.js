// Function to fetch JSON data
async function fetchJsonData() {
  try {
    const response = await fetch("characters.json"); // Path to your JSON file in the public directory
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json(); // Parsing the JSON data
    console.log(data); // Logging the data to the console
  } catch (error) {
    console.error("Error fetching the JSON data:", error); // Error handling
  }
}
