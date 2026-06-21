<template>
  <div class="container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(siteChunk, index) in chunkedSites" :key="index" class="swiper-slide">
          <div class="site-grid">
            <div v-for="(site, i) in siteChunk" :key="i" class="site-box card-base animated-border" @click="openLink(site.url)">
              <div class="site-content inner-card">
                <i :class="site.icon" aria-hidden="true"></i>
                <span class="site-name">{{ site.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import siteData from '../config/site.json';

const chunkedSites = ref(siteData.reduce((acc, site, index) => {
  const chunkIndex = Math.floor(index / 6);
  if (!acc[chunkIndex]) acc[chunkIndex] = [];
  acc[chunkIndex].push(site);
  return acc;
}, []));

const openLink = (url) => {
  if (url) window.open(url, '_blank');
};

onMounted(() => {
  new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { el: '.swiper-pagination', clickable: true },
    mousewheel: true,
  });
});
</script>


<style scoped>
.container {
  max-width: 700px;
  width: 100%;
  margin: 30px 0 20px;
}

.swiper-container {
  overflow: hidden;
  padding: 10px;
}

.swiper-pagination {
  bottom: inherit;
}

.site-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.site-box {
  position: relative;
  overflow: visible;
  cursor: pointer;
}

.card-base {
  padding: 20px;
  border-radius: calc(var(--border-radius) * 1.2);
  background: rgba(var(--background-color-rgb), 0.18);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
  transition: transform 260ms ease, box-shadow 260ms ease, background 260ms ease;
}

.card-base:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.12);
  border-color: rgba(59, 187, 122, 0.35);
}

.animated-border {
  position: relative;
}

.animated-border::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid rgba(59, 187, 122, 0.3);
  opacity: 0;
  transform: scale(0.94);
  transition: opacity 260ms ease, transform 260ms ease;
  pointer-events: none;
}

.animated-border:hover::after {
  opacity: 1;
  transform: scale(1);
}

.site-content {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  i {
    font-size: var(--icon-size);
  }
}

.site-name {
  margin: 0;
  font-size: 1.17em;
  font-weight: bold;
}

.inner-card {
  padding: 18px 16px;
  border-radius: calc(var(--border-radius) * 0.9);
  background: rgba(var(--background-color-rgb), 0.12);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dark-mode .card-base,
.dark-mode .inner-card {
  background: rgba(51, 51, 51, 0.54);
}

@media screen and (max-width: 768px) {
  .site-content {
    gap: 5px;
    flex-direction: column;
  }

  .site-box {
    padding: 15px;
    border-radius: 8px;
  }

  .site-name {
    font-size: 16px;
  }

  .site-content i {
    font-size: 18px;
  }
}

:deep(.swiper-pagination-bullet-active) {
  background: #8c8c8c94;
  width: 20px;
  border-radius: 5px;
}
</style>