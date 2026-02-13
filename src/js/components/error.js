export function showError(container, message) {
  container.innerHTML = `
    <div class="error-box">
      <p>⚠️ ${message}</p>
    </div>
  `;
}
