export function sendMessageAction(message) {
    return {
      type: "SEND_MESSAGE",
      message,
    };
  }