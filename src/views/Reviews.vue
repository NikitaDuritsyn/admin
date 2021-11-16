<template>
  <div class="row g-0 justify-content-center">
    <div class="col-md-6">
      <div
        class="reviews_card"
        v-for:="review in reviews"
        v-bind:key="review.id"
      >
        <div class="row g-0">
          <div class="row g-0">
            <div>Имя: {{ review.name }}</div>
            <div>Фамилия: {{ review.lastname }}</div>
            <div>Дата: {{ review.date }}</div>
            <div>Оценка: {{ review.grade }}</div>
          </div>
        </div>
        <hr />
        <div class="row g-0">
          <div class="col-md-12">Отзыв</div>
        </div>
        <div class="row g-0">
          <div class="col-md-12">
            <div class="description">
              {{ review.description }}
            </div>
            <!-- <textarea name="description" id="description" cols="20" rows="5">
            </textarea> -->
            <!--Может быть textarea не нужна-->
          </div>
        </div>
        <div class="row g-0">
          <div class="col-md-12">
            <button class="btn btn-dark" @click="deletRevew(review.id)">
              УДАЛИТЬ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reviews_card {
  background-color: white;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 20px;
}
.description {
  width: 100%;
  padding: 20px 0px 20px 0px;
}
textarea {
  margin-top: 10px;
  width: 100%;
  resize: none;
}
.btn {
  border-radius: 0;
}
</style>

<script>
import reviewsService from "../Services/ReviewsService";
export default {
  data() {
    return {
      reviews: [],
    };
  },

  methods: {
    async fetchReviews() {
      try {
        this.reviews = await reviewsService.getAllReviews();
      } catch (e) {
        alert(e.massage);
      }
    },
    async deletRevew(reviewID) {
      try {
        this.reviews = await reviewsService.deleteReviews(reviewID);
        this.fetchReviews();
      } catch (e) {
        alert(e.massage);
      }
    },
  },
  mounted() {
    this.fetchReviews();
  },
};
</script>