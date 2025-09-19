<template>
  <div class="card-modal__overlay" :class="{ open: isOpen }" @click.self="closeModal()">
    <div class="card-modal">
      <div class="card-modal__header">
        <h2 class="card-modal__header--title">Корзина</h2>
        <span class="card-modal__header--close" @click="closeModal()">
          <img src="../assets/images/icons/close.svg" alt="close" />
        </span>
      </div>
      <div class="card-modal__body">
        <div class="card-item">
          <p class="card-item__title">Ролл угорь стандарт</p>

          <div class="card-item__controls">
            <div class="card-item__controls--price">250 ₽</div>

            <button class="btn btn-outline">-</button>
            <div class="card-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>

        <div class="card-item">
          <p class="card-item__title">Ролл угорь стандарт</p>

          <div class="card-item__controls">
            <div class="card-item__controls--price">250 ₽</div>

            <button class="btn btn-outline">-</button>
            <div class="card-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>

        <div class="card-item">
          <p class="card-item__title">Ролл угорь стандарт</p>

          <div class="card-item__controls">
            <div class="card-item__controls--price">250 ₽</div>

            <button class="btn btn-outline">-</button>
            <div class="card-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>

        <div class="card-item">
          <p class="card-item__title">Ролл угорь стандарт</p>

          <div class="card-item__controls">
            <div class="card-item__controls--price">250 ₽</div>

            <button class="btn btn-outline">-</button>
            <div class="card-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>

        <div class="card-item">
          <p class="card-item__title">Ролл угорь стандарт</p>

          <div class="card-item__controls">
            <div class="card-item__controls--price">250 ₽</div>

            <button class="btn btn-outline">-</button>
            <div class="card-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
      </div>
      <div class="card-modal__footer">
        <div class="card-modal__footer--price">1250 ₽</div>

        <div class="card-modal__footer--controls">
          <button class="btn btn-primary">Оформить заказ</button>
          <button class="btn btn-outline">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isOpen } = defineProps({ isOpen: Boolean })

const emit = defineEmits(['toggleModal'])
const closeModal = () => emit('toggleModal')
</script>

<style scoped>
.card-modal__overlay {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
}

.card-modal__overlay.open {
  display: flex;
}

.card-modal {
  max-width: 780px;
  width: 100%;
  padding: 40px 45px;
  border-radius: 5px;
  background-color: #fff;
}

.card-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
}

.card-modal__header--title {
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  margin: 0;
}

.card-modal__header--close {
  cursor: pointer;
}

.card-modal__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 50px;
}

.card-modal__footer--price {
  background-color: #262626;
  font-family: Roboto;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #fff;
  padding: 15px 20px;
  border-radius: 5px;
}

.card-modal__footer--controls {
  display: flex;
  gap: 10px;
}

.card-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.card-item:not(:last-child) {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #d9d9d9;
}

.card-item__title {
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  margin: 0;
}

.card-item__controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.card-item__controls--price {
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  margin-right: 37px;
}

.card-item__controls button {
  border: #40a9ff solid 1px;
  color: #40a9ff;
}

.card-item__controls--count {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
</style>
