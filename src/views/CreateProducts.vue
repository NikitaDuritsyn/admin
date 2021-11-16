<template>
  <div id="createProducts">
    <div class="row justify-content-center g-0">
      <div class="col-md-6">
        <div class="create_product_block">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="row g-0 my_row align-items-center">
                <div class="col-md-7">
                  <input type="text" placeholder="Название товара" />
                </div>
              </div>
              <!-- <div class="row g-0 my_row align-items-center">
                <div class="col-md-7">
                  <input type="text" placeholder="Артикул" />
                </div>
              </div> -->
              <div class="row g-0 my_row align-items-center">
                <div class="col-md-7">
                  <input type="text" placeholder="Цена" />
                </div>
              </div>
              <div class="row g-0 my_row align-items-center">
                <div class="col-md-7">
                  <input type="text" placeholder="Тип товара" />
                </div>
              </div>
              <div class="row g-0">
                <div class="col-md-12">
                  <button class="btn btn-dark" @click="фыв;">
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
              <textarea
                name="Описание товара"
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <textarea
                name="Описание товара"
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <button class="btn btn-dark" @click="фыв;">Создать товар</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row_vh{
    height: 100%;
}
input{
    width: 100%;
}
textarea{
    width: 100%;
    resize: none;
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
.my_row {
  height: 40px;
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
export default {};
</script>