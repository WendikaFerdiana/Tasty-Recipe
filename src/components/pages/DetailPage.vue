<template>
  <main>
    <div class="container-md my-5 py-5">
      <div class="row my-4">

        <!-- Kolom kosong di kiri untuk memberi jarak agar ke tengah -->
        <div class="col-12 col-sm-2"></div>

        <!-- Kolom utama tempat kartu resep berada -->
        <div class="col-12 col-sm-8">
          <div
            class="my-2 p-4 d-flex flex-column-reverse flex-lg-row justify-content-between border border-secondary-sublet rounded">
            <div class="pe-lg-4">

              <!-- Menggunakan expression dari computed property -->
              <h2>{{ recipeDetail.name }}</h2>
              <p>{{ recipeDetail.description }}</p>

              <!-- Phone Device -->
              <div
                class="d-flex d-lg-none flex-column justify-content-between border border-primary rounded bg-color-detail">
                <div class="w-75 my-3 pb-3 mx-auto pe-lg-4 ps-lg-3 border-bottom border-primary">
                  <p class="my-0">Preptime</p>
                  <p class="my-0">{{ recipeDetail.prepTime }} Mins</p>
                </div>
                <div class="w-75 px-lg-4 pb-3 mx-auto border-bottom border-primary">
                  <p class="my-0">Cooktime</p>
                  <p class="my-0">{{ recipeDetail.cookTime }} Mins</p>
                </div>
                <div class="w-75 my-3 mx-auto ps-lg-4 pe-3">
                  <p class="my-0">Total</p>
                  <p class="my-0">{{ recipeDetail.prepTime + recipeDetail.cookTime }} Mins</p>
                </div>
              </div>

              <!-- PC Device -->
              <div
                class="d-none d-lg-flex flex-lg-row justify-content-between border border-primary rounded bg-color-detail">
                <div class="w-75 my-3 pb-3 mx-auto pe-lg-4 ps-lg-3 border-end border-primary">
                  <p class="my-0">Preptime</p>
                  <p class="my-0">{{ recipeDetail.prepTime }} Mins</p>
                </div>
                <div class="w-75 my-3 px-lg-4 mx-auto border-end border-primary">
                  <p class="my-0">Cooktime</p>
                  <p class="my-0">{{ recipeDetail.cookTime }} Mins</p>
                </div>
                <div class="w-75 my-3 mx-auto ps-lg-4 pe-3">
                  <p class="my-0">Total</p>
                  <p class="my-0">{{ recipeDetail.prepTime + recipeDetail.cookTime }} Mins</p>
                </div>
              </div>

              <p class="my-3">Recipe By {{ recipeDetail.username }}</p>
              <div>
                <button class="btn fav-btn px-3 py-2 rounded-pill">
                  <i class="far fa-heart pe-2"></i>Add To Favorite
                </button>
              </div>
            </div>

            <div class="ps-lg-4">
              <!-- Memasukkan gambar secara dinamis dengan :src -->
              <img :src="recipeDetail.imageLink" alt="Food" class="recipe__detail-img rounded mx-auto"
                style="object-fit: cover" />
            </div>
          </div>
          <recipe-ingredients></recipe-ingredients>
          <recipe-directions></recipe-directions>
          
        </div>
        
        <div class="col-12 col-sm-2">
          
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import RecipeDirections from "../detail/RecipeDirections.vue";
import RecipeIngredients from "../detail/RecipeIngredients.vue";

const store = useStore();
const route = useRoute();


const recipeDetail = computed(() => {
  return store.state.recipe.recipeDetail || {};
});

onMounted(async () => {
  await store.dispatch("recipe/getRecipeDetail", route.params.id);
});
</script>