document.getElementById("ask-btn").addEventListener("click", function () {
  const userQuery = document.getElementById("user-query").value;

  // If the query is empty, don't proceed
  if (userQuery.trim() === "") {
    console.log("User query is empty.");
    return;
  }

  // Show the user's message in the chat window
  addMessage(userQuery, "user");

  // Send the query to the backend and get the answer
  fetch("http://localhost:3000/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question: userQuery }),
  })
    .then((response) => {
      console.log("Response status:", response.status); // Log status for debugging
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the response as JSON
    })
    .then((data) => {
      console.log("Response from server:", data); // Log the response data

      // If the response has an answer, display it
      if (data && data.answer) {
        addMessage(data.answer.answer, "bot");
      } else {
        addMessage("Sorry, I couldn't find an answer to your question.", "bot");
      }
    })
    .catch((error) => {
      // Log any errors and show a user-friendly message
      console.error("Error:", error);
      addMessage("Sorry, something went wrong. Please try again.", "bot");
    });

  // Clear the input field after sending the question
  document.getElementById("user-query").value = "";
});

function addMessage(message, sender) {
  // Create a new div element for the message
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", `${sender}-message`);
  messageDiv.textContent = message;

  // Append the message to the chat content container
  document.getElementById("chat-content").appendChild(messageDiv);

  // Scroll the chat box to the bottom
  document.getElementById("chat-box").scrollTop =
    document.getElementById("chat-box").scrollHeight;
}
