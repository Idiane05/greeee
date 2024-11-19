function login(username, password) {
    if (username && password) {
      const user = { username: username };
      
      // Store user data in LocalStorage for persistent personalization
      localStorage.setItem('user', JSON.stringify(user));
  
      // Set a session cookie that expires in 1 hour
      document.cookie = `user=${username}; path=/; max-age=${60 * 60}`;
      console.log('Logged in as:', user);
  
      // Redirect to courses page
      window.location.href = 'courses.html';
    } else {
      alert('Invalid credentials');
    }
  }
  
  function getLoggedInUser() {
    const userFromLocalStorage = localStorage.getItem('user');
    return userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
  }
  
  function checkUserLoggedIn() {
    // Check if a user exists in cookies or local storage
    const userFromCookie = document.cookie.split('; ').find(row => row.startsWith('user='));
    const user = userFromCookie ? userFromCookie.split('=')[1] : getLoggedInUser();
    return user ? user : null;
  }
  
  // Check if the user is logged in on page load
  window.onload = function() {
    const user = checkUserLoggedIn();
    if (user) {
      console.log('User is already logged in as:', user);
    }
  }
  
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    login(username, password);
  });
  
  