function changeTheme() {
    const selectedTheme = document.getElementById("theme").value;
    document.body.className = selectedTheme;
  }


  // Example function to load user's preferred theme
function loadUserPreferredTheme() {
    const preferredTheme = /* Code to get user's preferred theme */
    document.body.className = preferredTheme;
  }
  
  window.onload = function () {
    loadUserPreferredTheme(); // Apply user's preferred theme on page load
    getCurrentConversionRate(); // Continue with your existing code
  };