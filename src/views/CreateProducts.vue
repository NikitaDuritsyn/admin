<template>
  <div id="createProducts">
    <div class="row justify-content-center g-0">
      <div class="col-md-6">
        <form>
          <div class="create_product_block">
            <div class="row g-0">
              <div class="col-md-8">
                <div class="row g-0 align-items-center">
                  <div class="col-md-7">
                    <strong>Название товара:</strong>
                    <input
                      type="text"
                      placeholder="Название товара"
                      v-bind:value="title"
                      @input="title = $event.target.value"
                    />
                  </div>
                </div>
                <div class="row g-0 align-items-center">
                  <div class="col-md-7">
                    <strong>Цена:</strong>

                    <input
                      type="text"
                      placeholder="Цена"
                      v-bind:value="price"
                      @input="price = $event.target.value"
                    />
                  </div>
                </div>
                <div class="row g-0 align-items-center">
                  <div class="col-md-7">
                    <strong>Тип товара:</strong>
                    <input
                      type="text"
                      placeholder="Тип товара"
                      v-bind:value="type"
                      @input="type = $event.target.value"
                    />
                  </div>
                </div>
                <div class="row g-0">
                  <div class="col-md-12">
                    <button
                      class="btn btn-dark"
                      @click.prevent="РеализоватьФкнкциюЗагрузкиФОТО;"
                    >
                      ЗАГРУЗИТЬ ФОТО
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row g-0" style="height: 100%">
                  <div class="col-md-12">
                    <div class="image_block">
                      <img src="" alt="Загрузите фото " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-12">
                <strong>Описание товара:</strong>
                <textarea
                  name="Описание товара"
                  id="descriptionmaterial"
                  cols="30"
                  rows="5"
                  v-bind:value="descriptionmaterial"
                  @input="descriptionmaterial = $event.target.value"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <input
                  type="text"
                  placeholder="Преимущества"
                  v-bind:value="titletwo"
                  @input="titletwo = $event.target.value"
                />
                <textarea
                  name="Описание товара"
                  id="descriptionadvantages"
                  cols="30"
                  rows="5"
                  v-bind:value="descriptionadvantages"
                  @input="descriptionadvantages = $event.target.value"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button class="btn btn-dark" @click.prevent="createProduct">
                  Создать товар
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row_vh {
  height: 100%;
}
input {
  width: 100%;
  margin: 10px 0px 10px 0px;
}
textarea {
  width: 100%;
  resize: none;
  margin: 10px 0px 10px 0px;
}
.image_block {
  height: 100%;
  width: 100%;
  background-color: rgb(240, 240, 240);
  min-height: 150px;
}
button {
  border-radius: 0;
  height: 40px;
  font-size: 15px;
  margin: 10px 10px 10px 0px;
}
.create_product_block {
  background-color: white;
  padding: 30px;
  font-size: 15px;
}
.main-text-height {
  height: 93px;
}
.main-text {
  color: black;
  font-size: 30px;
  text-align: center;
}
</style>

<script>
import prductsService from "../Services/ProductsService";

export default {
  name: "createProducts",
  data() {
    return {
      type: "",
      title: "",
      titletwo: "Преимущества",
      descriptionmaterial: "",
      descriptionadvantages: "",
      price: "",
      urlimage: "",
      //       type
      // title
      // titletwo
      // descriptionmaterial
      // descriptionadvantages
      // price
      // urlimage
    };
  },
  methods: {
    async createProduct() {
      try {
        // console.log(
        //   this.type,
        //   this.title,
        //   this.titletwo,
        //   this.descriptionmaterial,
        //   this.descriptionadvantages,
        //   this.price,
        //   this.urlimage
        // );
        await prductsService.createPrduct(
          this.type,
          this.title,
          this.titletwo,
          this.descriptionmaterial,
          this.descriptionadvantages,
          this.price,
          this.urlimage
        );
        alert("ПРОДУКТ СОЗДАН");
      } catch (e) {
        alert(e.massege);
      }
    },
  },

  // product.id,
  // product.type,
  // product.title,
  // product.titletwo,
  // product.descriptionmaterial,
  // product.descriptionadvantages,
  // product.price,
  // product.urlimage
};
</script>