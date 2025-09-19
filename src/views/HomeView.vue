<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item--title">
          Онлайн-сервис <br />
          доставки еды на дом
        </h2>
        <p class="banner-item--subtitle">
          Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
        </p>
      </div>
    </div>
  </section>
  <section class="products">
    <div class="container">
      <div class="products-header">
        <h3 class="products-header--title">Рестораны</h3>
        <input type="text" class="products-header--search" placeholder="Поиск блюд и ресторанов" />
      </div>

      <div class="products-wrapper" id="rests-container">
        <router-link
          class="products-card"
          v-for="rest in store.rests"
          :key="rest.id"
          :to="{ path: '/rest', query: { id: rest.id } }"
        >
          <div class="products-card_image">
            <img :src="getUrl(rest.image)" alt="pizza_plus" />
          </div>
          <div class="products-card_description">
            <div class="products-card_description-row">
              <h4 class="products-card_description--title">{{ rest.title }}</h4>
              <div class="products-card_description--badge">{{ rest.time }} мин</div>
            </div>
            <div class="products-card_description-info">
              <div class="products-card_description-info--raiting">
                <img src="../assets/images/icons/star.svg" alt="star" />
                {{ rest.rating }}
              </div>
              <div class="products-card_description-info--price">От {{ rest.price }} ₽</div>
              <div class="products-card_description-info--group">{{ rest.type }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { store } from '../../store'

import { restArray } from '@/constants/rest'
const getUrl = (name) => {
  return new URL(`../assets/images/rests/${name}`, import.meta.url)
  // return `../assets/images/rests/`
}
</script>
