function go(url) {
  const container = document.createElement("div");
  container.classList.add("container");

  const header = document.createElement("div");
  header.classList.add("header");
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.style.order = "2"; 
  header.innerHTML = "";

  const closeButton = document.createElement("div");
  closeButton.classList.add("close-button");
  closeButton.style.order = "1"; 
  closeButton.innerText = "";
  closeButton.addEventListener("click", () => document.body.removeChild(container));

  header.appendChild(closeButton);

  const resize = document.createElement("div");
  resize.classList.add("resize");

  const iframe = document.createElement("iframe");
  iframe.src = url;

  container.appendChild(header);
  container.appendChild(iframe);
  container.appendChild(resize);

  document.body.appendChild(container);

  let isResizing = false;
  let lastX = 0;
  let lastY = 0;
  let lastWidth = 0;
  let lastHeight = 0;

  header.addEventListener("mousedown", startDragging);
  resize.addEventListener("mousedown", startResizing);

  function startDragging(e) {
    lastX = e.clientX;
    lastY = e.clientY;
    window.addEventListener("mousemove", drag);
    window.addEventListener("mouseup", stopDragging);
  }

  function drag(e) {
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    const rect = container.getBoundingClientRect();
    container.style.left = rect.left + dx + "px";
    container.style.top = rect.top + dy + "px";
    lastX = e.clientX;
    lastY = e.clientY;
  }

  function stopDragging() {
    window.removeEventListener("mousemove", drag);
    window.removeEventListener("mouseup", stopDragging);
  }

  function startResizing(e) {
    lastWidth = container.offsetWidth;
    lastHeight = container.offsetHeight;
    lastX = e.clientX;
    lastY = e.clientY;
    isResizing = true;
    window.addEventListener("mousemove", resizeContainer);
    window.addEventListener("mouseup", stopResizing);
  }

  function resizeContainer(e) {
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    container.style.width = lastWidth + dx + "px";
    container.style.height = lastHeight + dy + "px";
  }

  function stopResizing() {
    isResizing = false;
    window.removeEventListener("mousemove", resizeContainer);
    window.removeEventListener("mouseup", stopResizing);
  }
}

