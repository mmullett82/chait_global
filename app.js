// This will handle sending messages in the chat
function sendMessage() {
    const chatBox = document.getElementById('chatBox');
    const messageInput = document.getElementById('messageInput');
  
    const message = messageInput.value.trim();
    
    if (message !== '') {
      // Create a new div for the message and append it to the chat box
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('chat-message');
      messageDiv.innerText = message;
      chatBox.appendChild(messageDiv);
      
      // Clear the input field
      messageInput.value = '';
      
      // Scroll to the bottom of the chat box
      chatBox.scrollTop = chatBox.scrollHeight;
  
      // Update summary and outline placeholders
      updateSummary();
      updateOutline();
    }
  }
  
  // Placeholder function for updating the summary
  function updateSummary() {
    const summaryText = document.getElementById('summaryText');
    summaryText.innerText = "This is a placeholder summary based on the chat.";
  }
  
  // Placeholder function for updating the outline
  function updateOutline() {
    const outlineText = document.getElementById('outlineText');
    outlineText.innerText = "This is a placeholder outline of the chat.";
  }
