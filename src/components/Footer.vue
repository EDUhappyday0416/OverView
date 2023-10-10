<!-- FooterComponent.vue -->
<template>
  <footer class="footer">
    <div class="container">
      <div class="content">
        <p>© 2023 Your Company. All rights reserved.</p>
        <ul class="footer-links">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  height: 10vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.footer-links {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 10px;
}

.footer-links li a {
  color: #fff;
  text-decoration: none;
}

.footer-links li a:hover {
  text-decoration: underline;
}
</style>
