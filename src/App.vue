<script>
import box from "./box.vue";
import buttonOne from "./buttonOne.vue";

export default {
  components: {
    buttonOne,
    box,
    
  },
  data: function () {
    return {
      isShow: true,
    };
  },
  methods: {
    hideBlockkInOtherComponent() {
      this.$refs.othercomponent.hideBlock();
    },
  },
  methods: {
    sendClickForParent() {
      this.$emit("click-some-button");
    },
  },
};
</script>




<template>
  <body class="derevo">
    <div class="header">
      <div class="background">
        <div class="fifBlack">
          <div class="mainHeader"></div>
        </div>

        <img
          src="./image/1646088042_33-abrakadabra-fun-p-fon-dlya-dreva-semi-56 1.png"
          alt=""
        />
      </div>
      <ul class="heed">
        <img
          class="EDUPLANET"
          src="./image/эдупартнер с темными линиями 2.png"
          alt=""
        />
        <id class="otstup">управление</id>
        <li class="otstup">О компании</li>
        <li class="otstup">Контакты</li>
        <li class="otstup">Отзывы</li>
      </ul>
    </div>
    <div class="WentText">
      <p>
        Главная / Разработка сайта /Корпоративный сайт/”Центр семейной
        родословной Галины Рублевой”
      </p>
    </div>

    <div class="Maintext">
      <p class="T">Центр семейной родословной Галины Рублевой</p>
    </div>
    <div class="osnvText">
      <div class="Text">
        <h1>О компании:</h1>

        <p>
          Центр занимается <br />
          поиском и сбором <br />
          информации из архивов, <br />
          Проводит <br />
          генеологические <br />
          расследования.
        </p>
      </div>

      <div class="Text">
        <div class="line"></div>

        <h1>Задача:</h1>
        <p>
          Создать сайт с <br />
          удобным интерфейсом, <br />
          который будет <br />
          привлекать новых <br />
          клиентов.
        </p>
      </div>

      <div class="Text">
        <div class="line"></div>

        <h1>Решение:</h1>
        <p>
          Разработка <br />
          многостраничного <br />
          сайта с <br />
          индивидуальным <br />
          дизайном.
        </p>
      </div>
    </div>

    <div class="lowText">
      <div class="yellowText">
        <h1>Выполнение работы</h1>
        <div class="string">
          <div class="mainString"></div>
        </div>

        <h2>Диагностика компании</h2>
      </div>
      <p>
        Кадровая диагностика. Определили недостаток кадров. Провели
        собеседования с сотрудниками центра.
      </p>
      <p>
        Финансовая диагностика дала понять перспективы развития центра род
        ословной. Выявили слабые места, изучили финансовые показатели.
      </p>
      <p>
        IT-диагностика. Провели диагностику сайта, выявили проблемы, описали
        ошибки и рекомендации по устранению проблем.
      </p>

      <div class="string2">
        <div class="mainString"></div>
      </div>

      <h2>Управление компанией</h2>
      <p>Полностью взяли под управление Центр семейной родословной:</p>
      <p>
        Кадровое управление: оценка персонала, отбор и подбор сотрудников, их
        последущая адаптация, создание рациональной системы стимулирования
        персонала.
      </p>
      <p>
        Маркетинг: работа над продуктом, ценообразование, продвижение, переезд
        офиса, грамотная настройка CRM-системы.
      </p>
      <p>
        Проведение еженедельных оперативок: новости компании, решение и
        обсуждение вопросов, возникающих у подразделений с последующим их
        разрешением.
      </p>
      <p>Ведение управленческого учета.</p>
      <p>
        После перехода компании под наше управление и внедрения изменений доход
        Центра семейной родословной
        <font color="#ffff00"> увеличился на 420%.</font>
      </p>

      <div class="string3" id="array-rendering">
        <div class="mainString"></div>
      </div>

      <h2>Разработка сайта</h2>
      <p>
        Разработка многостраничного сайта: определение структуры сайта, создание
        уникального дизайна, создание адаптивного дизайна под разные устройства,
        backend и frontend-разработка, наполнение сайта контентом.
      </p>
    </div>
    <div class="noutebook">
      <img src="./image/pngwing 2.png" alt="" />
    </div>
    <div class="imgNote">
      <img src="./image/image 4.png" width="750" height="475" alt="" />
      <p class="TextunderNoote">
        *Было до: одностраничный сайт с недостаточным количеством информации о
        компании, услугах, товаров. Полностью отсутствовало SEO-продвижение.
        Сайт выступал в роли визитки Стало после: многостраничный сайт (более 14
        страниц).
      </p>
    </div>

    <div class="opisaniekomp"><h1>Страница описания компании</h1></div>
    <box />
    <div class="SEO">
      <div class="string4">
        <div class="mainString"></div>
      </div>
      <h2  class="seotext">SEO-продвижение</h2>
    </div>
   
    <img
      class="Eduplanet2"
      src="./image/эдупартнер с темными линиями 2.png"
      alt=""
    />
  <buttonOne />

    <!-- <div class="supLow">
      <div class="lowground">
        <ul class="ulLow">
          <h1>Обучение</h1>
          <li>Бизнес-стратегия</li>
          <li>Стратегический анализ</li>
        </ul> -->

    <!-- <ul class="ulLow">
          <h1>Управление</h1>
          <li>Диагностика бизнеса</li>
          <li>Бизнес-консультация</li>
          <li>IT-разработка</li>
          <li>Интернет-маркетинг</li>
        </ul>
        <ul class="ulLow">
          <h1>Об EDUPARTNER</h1>
          <li>О компании</li>
          <li>Команда</li>
          <li>Вакансии</li>
        </ul>
        <ul class="ulLow">
          <h1>Контакты</h1>
          <li>E-mail:edupartner@edupartner.ru</li>
          <li>Тел.:</li>
          <li>Г.Уфа,ул.Бульвара Ибрагимова 37/1</li>
        </ul> 
      </div>
      <div class="lowground2">
        <ul class="ulLow">
          <li>© 2022 Все права защищены</li>
        </ul>
        <ul class="ulLow">
          <li>Политика конфиденциальности</li>
        </ul>
      </div> -->
    <!-- </div> -->
  </body>
</template>

<style>
.supLow {
  text-align: center;
  position: absolute;
  top: 4000px;
}
.ulLow {
  list-style-type: none;
}
.Eduplanet2 {
  position: relative;
  top: 4400px;
  left: 170px;
}
.lowground2 {
  word-spacing: 5px;
  position: relative;
  color: white;
  display: flex;
  padding: 100px;
  top: 1400px;
}
.lowground {
  color: white;
  display: flex;
  position: relative;
  columns: 4em;
  top: 1500px;
  margin-left: 300px;
}
.notShow {
  visibility: hidden !important;
}
.otstup2 {
  list-style-type: decimal;
  color: white;
  font-size: 150%;
}


.cloud4 {
  width: 70%;
  position: absolute;
  bottom: -470%;
  left: 14.5%;
  background: linear-gradient(
    122.93deg,
    rgba(100, 100, 100, 0.71) 1.7%,
    rgba(72, 71, 71, 0.12) 48.4%,
    rgba(115, 106, 106, 0.17) 94.76%
  );
  border-radius: 50px;
}
.arrowdown {
  position: absolute;
  right: 60px;
}
.whitetext1 {
  color: white;
}

.whitetext2 {
  color: white;
}
.whitetext3 {
  color: white;
}

.button1 {
  width: 80%;

  border-radius: 86px;
  background-color: yellow;
}
.button2 {
  width: 80%;

  margin-top: 90px;
  border-radius: 86px;
  background-color: yellow;
}
.button3 {
  width: 80%;

  margin-top: 35px;
  border-radius: 86px;
  background-color: yellow;
}



.string4 {
  position: absolute;
  top: 70px;
  border-radius: 1px solid #ffff00;
}
.seotext {
  position: absolute;
  left: 115px;
  bottom: -50px;
}
.SEO {
  position: absolute;
  text-align: left;
  margin-top: 190%;
  margin-left: 10%;
  top: 60%;
}
.opisaniekomp {
  position: absolute;
  color: white;
  margin-top: 179%;
  margin-left: 37%;
  font-size: 80%;
}
.arrow {
  cursor: pointer;
  width: 80px;
  position: relative;
  left: 110%;
  top: 230px;
}
.arrow2 {
  cursor: pointer;
  width: 80px;
  position: relative;
  bottom: 330px;
}
.arrow-top,
.arrow-bottom {
  background: #337ab7;
  height: 10px;
  left: -30px;
  position: absolute;
  top: 60px;
  width: 100px;
}
.arrow-top2,
.arrow-bottom2 {
  background: #337ab7;
  height: 10px;
  left: -150px;
  position: absolute;
  top: 67px;
  width: 100px;
}
.arrow-top {
  top: 64px;
}
.arrow-top2 {
  top: 64px;
}

.arrow-top {
  transform: rotate(45deg);
  transform-origin: bottom right;
}
.arrow-top2 {
  transform: rotate(45deg);
  transform-origin: top left;
}
.arrow-bottom {
  transform: rotate(-45deg);
  transform-origin: top right;
}
.arrow-bottom2 {
  transform: rotate(-45deg);
  transform-origin: bottom left;
}
.arrow-top::after,
.arrow-bottom::after {
  background: #000;
  content: "";
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.15s;
}
.arrow-top2::after,
.arrow-bottom2::after {
  background: #000;
  content: "";
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.15s;
}
.arrow-top::after {
  left: 100%;
  right: 0;
  transition-delay: 0s;
}
.arrow-bottom::after {
  left: 0;
  right: 100%;
  transition-delay: 0.15s;
}

.arrow-top2::after {
  left: 100%;
  right: 0;
  transition-delay: 0.15s;
}
.arrow-bottom2::after {
  left: 0;
  right: 100%;
  transition-delay: 0s;
}

.arrow:hover .arrow-top::after {
  left: 0;
  transition-delay: 0.15s;
}
.arrow2:hover .arrow-top2::after {
  left: 0;
  transition-delay: 0s;
}
.arrow:hover .arrow-bottom::after {
  right: 0;
  transition-delay: 0s;
}
.arrow2:hover .arrow-bottom2::after {
  right: 0;
  transition-delay: 0.15s;
}

.scrolliMage {
  position: absolute;
  top: 350%;
  left: 25%;
}
.TextunderNoote {
  position: absolute;
  top: 130%;
  color: white;
}

.imgNote {
  position: absolute;
  height: 400px;
  left: 27%;
  top: 2050px;
}
.noutebook {
  position: absolute;
  width: 1000px;
  height: 605px;
  left: 20%;
  top: 2014px;
}
h2 {
  font-family: "Lato", sans-serif;
  margin-left: 10%;
  color: yellow;
}
.mainHeader {
  position: absolute;
  width: 1920px;
  height: 100px;
  left: 0px;
  top: 0px;

  background: rgba(60, 60, 60, 0.25);
}
.header {
  width: 1920px;
  height: 100px;
  position: relative;
  bottom: 25px;
  right: 20px;
}
.T {
  font-size: 100%;
  position: relative;
  text-align: left;
}
h1 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.string {
  cursor: pointer;
  width: 40px;
  height: 50px;
  margin: 20px;
  position: absolute;
}
.string2 {
  cursor: pointer;
  width: 40px;
  height: 50px;
  margin: 20px;
  position: absolute;
  top: 34%;
}

.string3 {
  cursor: pointer;
  width: 40px;
  height: 50px;
  margin: 20px;
  position: absolute;
  top: 86.5%;
}

.mainString {
  position: absolute;
  bottom: 55px;
  width: 90px;
  height: 5px;
  background-color: #ffff00;
  display: block;
}
.mainString::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 4px;
  top: -12px;
  right: -2px;
  background-color: yellow;
  transform: rotate(45deg);
}
.mainString::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 4px;
  top: 12px;
  right: -2px;
  background-color: yellow;
  transform: rotate(-45deg);
}

.Maintext {
  color: white;
  position: relative;
  margin-left: 345px;
  width: 690px;
  height: 110px;
  word-break: break-all;
  text-align: center;
  size: 45px;
  color: yellow;
  font-family: monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 45px;
  line-height: 50px;
}

.otstup {
  color: white;
  position: relative;
  margin-top: 15px;
  padding: 20px;
}

body {
  background-color: #ffffff;
}

.EDUPLANET {
  display: block;
  position: relative;
  right: 50px;
}
.heed {
  position: relative;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  list-style-type: none;
  display: flex;
  margin-left: 450px;
  margin-right: 20px;
}

p {
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.line {
  position: absolute;
  border: 2px solid white;
  width: 90px;
  top: 50%;
  transform: rotate(90deg);
}
.yellowText {
  color: yellow;
}
.Text {
  text-align: center;
  width: 20%;
  white-space: normal;
  vertical-align: top;
  display: inline-block;
  position: relative;
  color: white;
  left: 15%;
}
.osnvText {
  white-space: nowrap;
}

.lowText {
  position: absolute;
  margin-top: 20%;
  margin-left: 10%;

  color: white;
}

html {
  max-width: 100%;
  overflow-x: hidden;
}
.WentText {
  color: white;
  position: relative;
  margin-left: 350px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}
.background {
  position: absolute;
  height: 747px;
  width: 1920px;
}
.fifBlack {
  background-color: rgba(29, 29, 29, 0.9);
  width: 1930px;
  height: 748px;
  position: absolute;
  right: 20px;
}
body {
  background-color: black;
}
</style>
