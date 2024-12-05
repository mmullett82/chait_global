// Select the dark mode toggle slider
const darkModeToggle = document.getElementById('darkModeToggle');

// Add event listener to toggle dark mode
darkModeToggle.addEventListener('change', () => {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle('dark-mode');
});

// Function to handle sending a chat message
function sendMessage() {
  const chatBox = document.getElementById('chatBox');
  const messageInput = document.getElementById('messageInput');

  const message = messageInput.value.trim();
  if (message !== '') {
    const messageDiv = document.createElement('div');
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);

    messageInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
