// avatar.js

function createAvatar(container, onClickCallback) {
    const avatarContainer = document.createElement("div");
    avatarContainer.className = "avatar-container";
    container.appendChild(avatarContainer);
  
    const avatarHello = document.createElement("div");
    avatarHello.className = "transition-3 avatarHello";
    avatarHello.textContent = "Connect with a Wizard";
    avatarContainer.appendChild(avatarHello);
  
    const chatWithMeButton = document.createElement("div");
    chatWithMeButton.className = "transition-3 chatWithMeButton";
    chatWithMeButton.style.cursor = "pointer";
    chatWithMeButton.style.boxShadow = "0px 0px 16px 6px rgba(0, 0, 0, 0.33)";
    chatWithMeButton.style.borderRadius = "50%";
    chatWithMeButton.style.width = "84px";
    chatWithMeButton.style.height = "84px";
    chatWithMeButton.addEventListener("mouseenter", () => setOpacity(1));
    chatWithMeButton.addEventListener("mouseleave", () => setOpacity(0));
    chatWithMeButton.addEventListener("click", onClickCallback);
    avatarContainer.appendChild(chatWithMeButton);
  
    function setOpacity(value) {
      avatarHello.style.opacity = value;
    }
  }
  