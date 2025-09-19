<template>
  <section class="products">
    <div class="container">
      <div class="products-header--row">
        <h3 class="products-header--row-title">{{ restid.title }}</h3>
        <div class="products-header--raiting">
          <img src="../assets/images/icons/star.svg" alt="star" />
          {{ restid.rating }}
        </div>
        <div class="products-header--info">
          От {{ restid.price }} ₽
          <span class="products-header--info-dot">·</span>
          {{ restid.type }}
        </div>
      </div>
    </div>

    <div class="container">
      <div class="products-wrapper" id="goods-container">
        <div class="products-card" v-for="goods in store.goods" :key="goods.id">
          <div class="products-card_image">
            <img :src="getUrl(goods.image)" :alt="goods.image" />
          </div>
          <div class="products-card_description">
            <div class="products-card_description-row">
              <h5 class="products-card_description--name">{{ goods.title }}</h5>
            </div>
            <div class="products-card_description-row">
              <p class="products-card_description--text">
                {{ goods.info }}
              </p>
            </div>
            <div class="products-card_description-row">
              <div class="products-card_description-controls">
                <button class="btn btn-primary">
                  В корзину
                  <img src="../assets/images/icons/shop2.svg" alt="buy" />
                </button>

                <span class="products-card_description-controls--price"> 250 ₽ </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { goodsArray } from '@/constants/rest'
import { restArray } from '@/constants/rest'
import { useRoute } from 'vue-router'
import { store } from '../../store'

const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url)
}

const route = useRoute()
const id = parseInt(route.query.id)
const restid = restArray.find((rest) => rest.id === id)
</script>
