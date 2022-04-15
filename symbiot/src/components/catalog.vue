<template>
  <div class="catalog-container">
    <div class="catalog-row">
      <div class="img-wrapper">
        <img class="back-battery" src="../img/back-battery.png" alt="" />
        <img class="battery" src="../img/battery.png" alt="" />
        <div class="img-info">
          <h3>200 CHF</h3>
          <div class="term">
            <p>Длительность контракта :</p>
            <p>12 месяцев</p>
          </div>
          <div class="switch">
            <p>Месяц</p>
            <input type="radio" />
            <p>Год</p>
          </div>
        </div>
      </div>
      <div class="about-wrapper">
        <div class="about-info">
          <h2>Эконом</h2>
          <div class="text">
            <span>
              Уже ни для кого не секрет что добыча криптовалюты расходует
              огромное количество электроэнергии тем самым выделяя сернистый и
              углекислые газы. Люди не задумываются о, том, откуда берётся
              энергия. С пакетом
              <strong>«Природа» </strong> вы сможете помочь окружающей среде,
              так как часть денег будет отдана в помощь посадки деревьев плюс к
              этому ваш облачный майнинг будет использовать исключительно
              <strong>БИО энергию.</strong> </span
            ><br />
          </div>
          <div class="text">
            <span>
              <strong>
                Всегда приятно получать прибыль и помогать <br />
                окружающей среде.
              </strong>
            </span>
          </div>
        </div>
        <div class="btns">
          <div class="more-wrapper">
            <a href="#eco">
              <button
                @click="
                  (four = false),
                    (five = false),
                    (three = false),
                    (two = false),
                    (one = true)
                "
                class="more-btn"
              >
                Подробнее
              </button>
            </a>
          </div>
          <div class="basket-wrapper">
            <img class="cart-img" src="../img/cart.png" alt="" />
            <button class="basket-btn">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
    <div class="catalog-row">
      <div class="img-wrapper">
        <img class="back-battery" src="../img/back-battery.png" alt="" />
        <img class="battery" src="../img/battery2.png" alt="" />
        <div class="img-info">
          <h3>1000 CHF</h3>
          <div class="term">
            <p>Длительность контракта :</p>
            <p>12 месяцев</p>
          </div>
          <div class="switch">
            <p>Месяц</p>
            <input type="radio" />
            <p>Год</p>
          </div>
        </div>
      </div>
      <div class="about-wrapper">
        <div class="about-info">
          <h2>ПРИРОДА</h2>
          <div class="text">
            <span>
              Если вы скептически относитесь к крипто валюте, но всё же хотите
              нырнуть в эту сферу с минимальными вложениями, то этот пакет для
              вас. <br />
            </span>
          </div>
          <div class="text">
            <span>
              Часто можно услышать разговоры про
              <strong> Биткоин, Эфириум и другие токены,</strong> такие беседы
              всегда делят людей на два лагеря. Продвинутых крипто инвесторов
              идущих в ногу с технологическим прорывом и тех кто лишь начинает,
              но в то же время с опаской смотрит в ту сторону. С
              <strong>«Симбиот»</strong> вы сможете быть в числе продвинутых
              людей. Легко и без особого риска иметь в кармане крипто валюту
              которая в дальнейшем будет держать вас на шаг впереди.
            </span>
          </div>
        </div>
        <div class="btns">
          <div class="more-wrapper">
            <a href="#nature">
              <button
                @click="
                  (four = false),
                    (five = false),
                    (three = false),
                    (two = true),
                    (one = false)
                "
                class="more-btn"
              >
                Подробнее
              </button>
            </a>
          </div>
          <div class="basket-wrapper">
            <img class="cart-img" src="../img/cart.png" alt="" />
            <button class="basket-btn">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
    <div class="catalog-row">
      <div class="img-wrapper">
        <img class="back-battery" src="../img/back-battery.png" alt="" />
        <img class="battery" src="../img/battery3.png" alt="" />
        <div class="img-info">
          <h3>3000 CHF</h3>
          <div class="term">
            <p>Длительность контракта :</p>
            <p>12 месяцев</p>
          </div>
          <div class="switch">
            <p>Месяц</p>
            <input type="radio" />
            <p>Год</p>
          </div>
        </div>
      </div>
      <div class="about-wrapper">
        <div class="about-info">
          <h2>ПРЕДПРИНИМАТЕЛЬ</h2>
          <div class="text">
            С пакетом <strong>«Предприниматель»</strong> вы сразу выходите на
            новый уровень. На сегодняшний день количество крипто валюты всё ещё
            большое, но её никогда не хватает. Поэтому с данным пакетом вы не
            разочаруетесь ведь когда прибыль приходит ежеминутно, настроение
            улучшается. Забудьте про скучные курсы Швейцарского Франка,
            перестаньте переживать про цены за барель, ведь у вас теперь
            <strong> один из самых интересных крипто портфелей.</strong>
          </div>
        </div>
        <div class="btns">
          <div class="more-wrapper">
            <a href="#business">
              <button
                @click="
                  (four = false),
                    (five = false),
                    (three = true),
                    (two = false),
                    (one = false)
                "
                class="more-btn"
              >
                Подробнее
              </button>
            </a>
          </div>
          <div class="basket-wrapper">
            <img class="cart-img" src="../img/cart.png" alt="" />
            <button class="basket-btn">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
    <div class="catalog-row">
      <div class="img-wrapper">
        <img class="back-battery" src="../img/back-battery.png" alt="" />
        <img class="powerUnit" src="../img/powerUnit.png" alt="" />
        <div class="img-info">
          <h3>1000 CHF</h3>
          <div class="term">
            <p>Длительность контракта :</p>
            <p>12 месяцев</p>
          </div>
          <div class="switch">
            <p>Месяц</p>
            <input type="radio" />
            <p>Год</p>
          </div>
        </div>
      </div>
      <div class="about-wrapper">
        <div class="about-info">
          <h2>Aisen (Aixin) A1 24T</h2>
          <div class="text">
            <span>
              Если вы скептически относитесь к крипто валюте, но всё же хотите
              нырнуть в эту сферу с минимальными вложениями, то этот пакет для
              вас. <br />
            </span>
          </div>
          <div class="text">
            <span>
              Часто можно услышать разговоры про
              <strong> Биткоин, Эфириум и другие токены,</strong> такие беседы
              всегда делят людей на два лагеря. Продвинутых крипто инвесторов
              идущих в ногу с технологическим прорывом и тех кто лишь начинает,
              но в то же время с опаской смотрит в ту сторону. С
              <strong>«Симбиот»</strong> вы сможете быть в числе продвинутых
              людей. Легко и без особого риска иметь в кармане крипто валюту
              которая в дальнейшем будет держать вас на шаг впереди.
            </span>
          </div>
        </div>
        <div class="btns">
          <div class="more-wrapper">
            <a href="#aisen1">
              <button
                @click="
                  (four = true),
                    (five = false),
                    (three = false),
                    (two = false),
                    (one = false)
                "
                class="more-btn"
              >
                Подробнее
              </button>
            </a>
          </div>
          <div class="basket-wrapper">
            <img class="cart-img" src="../img/cart.png" alt="" />
            <button class="basket-btn">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
    <div class="catalog-row">
      <div class="img-wrapper">
        <img class="back-battery" src="../img/back-battery.png" alt="" />
        <img class="powerUnit2" src="../img/powerUnit2.png" alt="" />
        <div class="img-info">
          <h3>200 CHF</h3>
          <div class="term">
            <p>Длительность контракта :</p>
            <p>12 месяцев</p>
          </div>
          <div class="switch">
            <p>Месяц</p>
            <input type="radio" />
            <p>Год</p>
          </div>
        </div>
      </div>
      <div class="about-wrapper">
        <div class="about-info">
          <h2>Aisen (Aixin) A1 24T</h2>
          <div class="text">
            <span>
              Уже ни для кого не секрет что добыча криптовалюты расходует
              огромное количество электроэнергии тем самым выделяя сернистый и
              углекислые газы. Люди не задумываются о, том, откуда берётся
              энергия. С пакетом
              <strong>«Природа» </strong> вы сможете помочь окружающей среде,
              так как часть денег будет отдана в помощь посадки деревьев плюс к
              этому ваш облачный майнинг будет использовать исключительно
              <strong>БИО энергию.</strong> </span
            ><br />
          </div>
          <div class="text">
            <span>
              <strong>
                Всегда приятно получать прибыль и помогать <br />
                окружающей среде.
              </strong>
            </span>
          </div>
        </div>
        <div class="btns">
          <div class="more-wrapper">
            <a href="#aisen2">
              <button
                @click="
                  (four = false),
                    (five = true),
                    (three = false),
                    (two = false),
                    (one = false)
                "
                class="more-btn"
              >
                Подробнее
              </button>
            </a>
          </div>
          <div class="basket-wrapper">
            <img class="cart-img" src="../img/cart.png" alt="" />
            <button class="basket-btn">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
    <description
      :one="one"
      :two="two"
      :three="three"
      :four="four"
      :five="five"
    />
  </div>
</template>
<script>
import description from "./description.vue";
// import '~@assets/css/catalog.css'
export default {
  name: "catalog",
  components: {
    description,
  },
  data() {
    return {
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
    };
  },
};
</script>
<style scoped>
.powerUnit2 {
  position: relative;
  bottom: 450px;
  right: 44px;
}
.powerUnit {
  position: relative;
  margin-bottom: 120px;
  bottom: 420px;
}
.str {
  /* font-weight: 900; */
}
.text {
  margin-bottom: 48px;
  /* font-family: Montserrat; */
}
.about-info {
}
.about-info {
  padding: 15px;
  width: 577px;
  margin: 0 auto;
  text-align: left;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  color: #3d3935;
}
.about-info h2 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 88.4%;
  text-transform: uppercase;
  color: #3d3935;
}
.cart-img {
  position: relative;
  left: 15px;
  top: 6px;
}
.more-btn {
  font-family: Montserrat;
  border: 1px solid #fb4330;
  filter: drop-shadow(0px 2px 4px rgba(32, 5, 97, 0.1))
    drop-shadow(0px 1px 2px rgba(32, 5, 97, 0.08));
  border-radius: 4px;
  padding: 15px 30px;
  color: #fb4030;
  margin-right: 22px;
  background-color: transparent;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  color: #fb4030;
}
.basket-btn {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  font-family: Montserrat;
  line-height: 20px;
  /* identical to box height */
  color: #fb4030;
  padding: 15px 30px;
  background-color: transparent;
  color: white;
  border: 0px;
}
.basket-wrapper {
  border: 1px solid #fb4330;
  filter: drop-shadow(0px 2px 4px rgba(32, 5, 97, 0.1))
    drop-shadow(0px 1px 2px rgba(32, 5, 97, 0.08));
  border-radius: 4px;
  background: linear-gradient(135deg, #f2c314 0%, #fc3832 100%);
  box-shadow: 0px 2px 4px rgba(32, 5, 97, 0.1),
    0px 1px 2px rgba(32, 5, 97, 0.08);
  border-radius: 4px;
}
.about-wrapper {
  width: 580px;
}
.btns {
  display: flex;
  justify-content: left;
}
.catalog-row {
  margin-top: 123px;
  display: flex;
  justify-content: center;
}
.catalog-row:nth-child(2n) {
  flex-direction: row-reverse;
}
.catalog-row:nth-child(2n) {
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: #f5fbfc;
}
.catalog-container {
  /* max-width: 100%;
  width: 1200px;
  margin: 0 auto; */
}
.term {
  font-family: "Gotham Pro Narrow Medium";
  margin-top: 15px;
  /* font-weight: 100; */
  margin-bottom: 15px;
  font-size: 16px;
  display: flex;
  justify-content: center;
}
.term p:not(:first-child) {
  margin-left: 2px;
  /* font-family: sans-serif; */
  font-weight: 700;
  /* font-size: 15px; */
  padding-top: 1.5px;
}
.switch {
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 19px;
  color: #f87125;
  display: flex;
  justify-content: center;
}
.switch input {
  margin-top: 23px;
}
.img-info {
  position: relative;
  bottom: 463px;
}
.img-info h3 {
  font-family: "Gotham Pro Black";
  margin: 0;
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 33px;
  color: #fc5944;
}
.img-wrapper {
  box-shadow: 0px 8px 48px rgb(185 215 238 / 40%);
  border-radius: 20px;
  width: 480px;
  height: 640px;
  /* margin: 0 auto; */
  box-shadow: 0px 8px 48px rgba(185, 215, 238, 0.4);
  background-color: white;
  border-radius: 20px;
  margin-right: 100px;
}
.catalog-row:nth-child(2n) .img-wrapper {
  margin-left: 100px;
  margin-right: 0px !important;
}
.catalog-row:nth-child(2n) .about-info {
  padding: 0px;
}
.back-battery {
  width: 338px;
  height: 335px;
  padding: 57px 72px;
}
.battery {
  position: relative;
  width: 327.16px;
  bottom: 420px;
  transform: rotate(-4deg);
}
</style>
