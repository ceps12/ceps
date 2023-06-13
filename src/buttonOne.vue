<script>
export default {

  data() {
    return {
      showBlock: true,
    };
  },
  methods: {
    hideBlock() {
      this.showBlock = false;
    },
  },
  methods: {
    sendClickForParent() {
      this.$emit("click-some-button");
    },
  },
  methods: {
    hideBlockkInOtherComponent() {
      this.$refs.othercomponent.hideBlock();
    },
  },
};
</script>

<template>
  <div class="cloud1">
    <p class="whitetext1">
      Подготовка сайта к индексации, сбор семантики, кластеризация и чистка
      семантики, анализ конкурентов и ниши
    </p>
    
    // FIXME: the button does not switch elements

    <button class="button1" :disabled="isShow" @click="sendClickForParent">
      <h1>
        Читать больше
        <img class="arrowdown" src="./image/Arrow 10.png" alt="" />
      </h1>
    </button>
  </div>

  <component-one
    v-on:click-some-button="hideBlockkInOtherComponent"
  >

  <div :class="{ hide: !isShow }" v-if="showBlock" id="notShow" class="cloud4">
    <h2>
      Подготовка сайта к индексации, сбор семантики, кластеризация и чистка
      семантики, анализ конкурентов и ниши <br />
      <br />
      <font color="#ffffff">
        Первый месяц проходит в тесном с отрудничестве исполнителя и заказчика.
        Ведь тут требуются доступы к сайту, постоянное уточнение рабочих нюансов
        и т.д.</font
      >
    </h2>
    <ul class="otstup2">
      <li>
        Сбор данных для работы (доступ к хостингу, админке, аккаунту Яндекса и
        т.д.).
      </li>
      <li>
        Анализ области деятельности компании / тематики сайта. Определение
        тематических о собенностей и ограничений для данного сайта.
      </li>
      <li>
        Проведение детального комплексного SEO аудита сайта на предмет
        технических проблем и критических ошибок.
      </li>
      <li>
        Сбор семантического ядра. Формирование списка подходящих поисковых
        запросов для данного сайта, используя различные источники.
      </li>
      <li>
        Обработка получившегося списка – минусация непригодных для продвижения
        данного сайта запросов.
      </li>
      <li>
        Анализ полученного списка запросов: кластеризация, оценка частотности
        запросов, эффективности запросов.
      </li>
      <li>
        Проверка видимости сайта по выбранным запросам в Яндекс и Гугл с учетом
        региона продвижения.
      </li>
      <li>Регистрация сайта в панели для Вебмастеров.</li>
      <li>Проведение необходимых настроек в Вебмастере.</li>
      <li>
        Создание/актуализация карточки организации в Яндекс Бизнес (Справочник)
        и google my business
      </li>
      <li>Создание/настройка Яндекс Метрики/Google analytics.</li>
      <li>
        Анализ индексации сайта. Составление правил для управления индексацией и
        их последующая публикация в robots.txt
      </li>
      <li>Настройка и генерация файла sitemap.xml.</li>
      <li>Заведение проекта в Топвизоре для мониторинга позиций сайта.</li>
    </ul>
  </div>



</component-one>
  <component-two ref="othercomponent">
    <buttonTwo /></component-two>

  
</template>

<style>
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

.cloud1 {
  top: 450%;
  right: 65%;
  display: block;
  width: 370px;
  height: 260px;
  margin-left: auto;
  text-align: center;
  background: linear-gradient(
    122.93deg,
    rgba(100, 100, 100, 0.71) 1.7%,
    rgba(72, 71, 71, 0.12) 48.4%,
    rgba(115, 106, 106, 0.17) 94.76%
  );
  border: 1px solid #faff00;
  border-radius: 50px;
  position: absolute;
}
</style>
