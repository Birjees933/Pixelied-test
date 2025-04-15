export const copyTextToClipboard = (text: string): void => {
  // Try using modern navigator.clipboard API
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Success - you could trigger UI feedback here if needed
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        // Fall back to older method if clipboard API fails
        fallbackCopyText(text);
      });
  } else {
    // Use fallback for non-secure contexts or unsupported browsers
    fallbackCopyText(text);
  }
};

// Fallback method using document.execCommand
const fallbackCopyText = (text: string): void => {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Make the textarea out of viewport
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);

  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Unable to copy to clipboard", err);
  }

  document.body.removeChild(textArea);
};

// Usage example in a component:
// <button onClick={() => copyTextToClipboard('Text to copy')}>Copy</button>
