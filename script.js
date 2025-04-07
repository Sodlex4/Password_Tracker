const input = document.getElementById("passwordInput");
const log = document.getElementById("logOutput");
const clearBtn = document.getElementById("clearBtn");
const submitBtn = document.getElementById("submitBtn");

input.addEventListener("keydown", () => {
  setTimeout(() => {
    const typedPassword = input.value;
    log.innerHTML += `🔐 You typed: ${typedPassword}<br>`;
  }, 0);
});

clearBtn.addEventListener("click", () => {
  log.innerHTML = "";
});

submitBtn.addEventListener("click", () => {
  const enteredPassword = input.value;
  if (enteredPassword) {
    log.innerHTML += `<span style="color:#22c55e;">✅ Connected with password: ${enteredPassword}</span><br>`;
  } else {
    log.innerHTML += `<span style="color:#f87171;">❌ No password entered</span><br>`;
  }
});
