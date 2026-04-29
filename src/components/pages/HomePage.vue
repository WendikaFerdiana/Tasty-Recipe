<template>
    <div class="container-md my-5 py-5">
        <div class="recipe_title text-center">
            <h2>All Recipe</h2>
            <p style="font-size: 15px">
                Find and share everyday cooking inspiration on
                Allrecipes. Discover recipes, cooks, videos, and
                how-tos based on the food you love and the friends
                you follow.
            </p>
        </div>
        <recipe-list :recipes="recipeList" v-if="recipelistStatus">
        </recipe-list>
    </div>
</template>
<script setup>
import RecipeList from "../recipe/RecipeList.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const recipelistStatus = ref(false);
const recipeList = ref();

onMounted(async () => {
    try {
        await store.dispatch("recipe/getRecipeData");
        recipeList.value = store.state.recipe.recipes;
        recipelistStatus.value = true;
    } catch (error) {
        console.error(error);
    }
})

</script>