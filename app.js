// Select the dark mode toggle slider
const darkModeToggle = document.getElementById('darkModeToggle');

// Add event listener to toggle dark mode
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

function sendMessage() {
  const chatBox = document.getElementById('chatBox');
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value.trim();

  if (message !== '') {
    // Create a new div for the user's message
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerText = message;

    // Append the user's message to the chat box
    chatBox.appendChild(userMessage);

    // Clear the input field
    messageInput.value = '';

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
