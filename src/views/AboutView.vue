<script setup lang="ts">
import LandingNavbar from '@/components/LandingNavbar.vue';
</script>
<template>
  <div class="about_container">
    <LandingNavbar />
    <div class="about_wrapper">
      <div class="me_wrap">
        <img src="/images/about/me.jpeg" alt="ibimina" class="me">
      </div>
      <div class="info">
        <div class="about">
          <h1>Ibimina Hart</h1>
          <p>Frontend Developer</p>
          <p>I like to craft solid and scalable frontend products with great user experiences.</p>
        </div>
        <div class="socials">

          <a href="https://github.com/ibimina" target="_blank" rel="noopener noreferrer" class="social_link">
            <img src="/images/about/github.svg" alt="github">
          </a>
          <a href="https://ibimina.github.io/ibimina-portfolio/" target="_blank" rel="noopener noreferrer"
            class="social_link">
            <img src="/images/about/portfolio.png" alt="code">
          </a>
          <a href="https://www.linkedin.com/in/ibimina-hart/" target="_blank" rel="noopener noreferrer"
            class="social_link">
            <img src="/images/about/linkedin.svg" alt="linkedin">
          </a>
          <a href="https://ibimina.hashnode.dev/" target="_blank" rel="noopener noreferrer" class="social_link">
            <img src="/images/about/hashnode.svg" alt="hashnode">
          </a>
          <a href="mailto:ibimina.c.hart@gmail.com" target="_blank" rel="noopener noreferrer" class="social_link"> <img
              src="/images/about/email.png" alt="email"></a>

          <a href="https://twitter.com/ibiminaah" target="_blank" rel="noopener noreferrer" class="social_link">
            <img src="/images/about/twitter.svg" alt="twitter">
          </a>


        </div>

      </div>

    </div>

  </div>
</template>
<style scoped>
.about_container {
  padding: 1em 2em;
}

.socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin: 1em auto;
}

.info {
  margin-bottom: 3em;
}

.social_link {
  width: 25px;
}

.me {
  max-width: 300px;
  margin: 1em auto;
  border-top-right-radius: 38%;
}

.about {
  text-align: left;
}

.about_wrapper {
  display: grid;
  justify-content: center;
  min-height: 90vh;
  grid-template-rows: max-content;
}

@media (min-width:40rem) {
  .about_wrapper {
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-content: center;
    grid-template-rows: auto;
    gap: 5em;
  }

  .info {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin: 0;
  }

  .about {
    width: 100%;
  }

  .socials {
    flex-direction: column;
    width: 60%;

    align-items: flex-start;
  }
}
</style>
