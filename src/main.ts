import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  const textToType: string = "shreyas singh";
  const typingElement = document.getElementById("name") as HTMLElement | null;
  if (typingElement) {
    typingElement.textContent = "";
    let charIndex: number = 0;
    const typingDelay: number = 50;

    function type() {
      if (charIndex < textToType.length) {
        if (typingElement) {
          typingElement.textContent += textToType.charAt(charIndex);
        }
        charIndex++;
        setTimeout(type, typingDelay);
      }
    }

    type();
  }
});
