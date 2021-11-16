<template>
  <div id="products">
    <div class="container-fluide">
      <div class="row g-0">
        <div class="col-md-2">
          <div class="row g-0">
            <div class="col-md-12">
              <div class="products_menu">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a
                      @click="getByTypeProduct(this.typeOne)"
                      class="nav-link"
                      aria-current="page"
                      href="#"
                      >Потолки
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      @click="getByTypeProduct(this.typeTwo)"
                      class="nav-link"
                      href="#"
                      >Светильники</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      @click="getByTypeProduct(this.typeThree)"
                      class="nav-link"
                      href="#"
                      >Потолочниые карнизы</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-10">
          <div class="row g-0 justify-content-center">
            <div class="col-md-8">
              <div
                class="products_card"
                v-for:="product in products"
                v-bind:key="product.id"
              >
                <div class="row g-0 justify-content-center">
                  <div class="col-md-10">
                    <div>
                      <strong> Название товара: </strong>
                      <input
                        type="text"
                        v-bind:value="product.title"
                        @input="product.title = $event.target.value"
                      />
                    </div>
                    <div class="description">
                      <div><strong>Описание товара</strong></div>
                      <textarea
                        name="description"
                        id="textarea"
                        cols="30"
                        rows="5"
                        v-bind:value="product.descriptionmaterial"
                        @input="
                          product.descriptionmaterial = $event.target.value
                        "
                      />
                    </div>
                    <div class="description">
                      <div>
                        <strong>Заголовок доп описания: </strong>
                        <input
                          type="text"
                          v-bind:value="product.titletwo"
                          @input="product.titletwo = $event.target.value"
                        />
                      </div>
                      <div>
                        <textarea
                          name="description"
                          id="textarea"
                          cols="30"
                          rows="5"
                          v-bind:value="product.descriptionadvantages"
                          @input="
                            product.descriptionadvantages = $event.target.value
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row g-0 justify-content-center">
                  <div class="col-md-10">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-2">
                        <strong> Цена:</strong>
                      </div>
                      <div class="col-md-4">
                        <div>
                          <input
                            type="text"
                            v-bind:value="product.price"
                            @input="product.price = $event.target.value"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row g-0 align-items-center">
                      <div class="col-md-2">
                        <strong>Тип товара:</strong>
                      </div>
                      <div class="col-md-4">
                        <div>
                          <input
                            type="text"
                            v-bind:value="product.type"
                            @input="product.type = $event.target.value"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row g-0 justify-content-center">
                  <div class="col-md-10">
                    <div class="product_menu">
                      <div class="row g-0">
                        <div class="col-md-6">
                          <div class="row g-0 my_row align-items-center">
                            <div class="col-md-9">
                              <button
                                class="btn btn-dark"
                                @click="
                                  updateProduct(
                                    product.id,
                                    product.type,
                                    product.title,
                                    product.titletwo,
                                    product.descriptionmaterial,
                                    product.descriptionadvantages,
                                    product.price,
                                    product.urlimage
                                  )
                                "
                              >
                                СОХРАНИТЬ ИЗМЕНЕНИЯ
                              </button>
                            </div>
                          </div>
                          <div class="row g-0 my_row align-items-center">
                            <div class="col-md-9">
                              <button
                                class="btn btn-dark"
                                @click="deleteThisProduct(product.id)"
                              >
                                УДАЛИТЬ ТОВАР
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="image_block">
                            <img
                              v-bind:src="product.urlimage"
                              alt="Загрузите картинку"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.description {
  padding: 20px 0 20px 0;
}
img {
  width: 100%;
  height: 100%;
}
.btn {
  border-radius: 0;
  width: 100%;
}
.my_row {
  height: 50%;
}
.image_block {
  width: 100%;
  height: 200px;
  background-color: rgb(201, 201, 201);
}
.product_menu {
  margin-top: 30px;
  margin-bottom: 30px;
}
.products_menu {
  background-color: black;
  width: 100%;
  color: white;
}
input {
  border-radius: 0;
  margin-top: 10px;
}
textarea {
  margin-top: 10px;
  width: 100%;
  resize: none;
}
li {
  direction: none;
}
a {
  color: white;
  font-size: 18px;
}
.products_card {
  background-color: white;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>

<script>
import prductsService from "../Services/ProductsService";
export default {
  name: "Products",
  data() {
    return {
      products: [],
      typeOne: "Потолок",
      typeTwo: "Светильник",
      typeThree: "Карниз",
    };
  },
  methods: {
    async fetchProducts() {
      try {
        this.products = await prductsService.getAllProducts();
      } catch (e) {
        alert(e.massage);
      }
    },
    async updateProduct(
      id,
      type,
      title,
      titletwo,
      descriptionmaterial,
      descriptionadvantages,
      price,
      urlimage
    ) {
      try {
        this.products = await prductsService.updateOneProduct(
          id,
          type,
          title,
          titletwo,
          descriptionmaterial,
          descriptionadvantages,
          price,
          urlimage
        );
      } catch (e) {
        alert(e.massage);
      }
    },
    async deleteThisProduct(id) {
      try {
        this.products = await prductsService.deleteOneProducts(id);
      } catch (e) {
        alert(e.massage);
      }
    },
    async getByTypeProduct(typeproduct) {
      try {
        console.log(typeproduct);
        this.products = await prductsService.getByTypeAllProduct(typeproduct);
      } catch (e) {
        alert(e.massage);
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>
