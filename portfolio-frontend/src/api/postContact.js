export function postContact(data) {
  // Simulate a network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Message sent successfully!' });
    }, 1000);
  });
} 