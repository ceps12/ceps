<script>
export default{
  data() {
    return {
   visible_hide(id) {
        massive = new Arr(3)
        massive[0]='call'
        massive [1]='call1'
        massive[2]='call2'
        
        for(i=0; i<3; i++){
          if (massive[i]!=id){
            document.getElementById(massive[i]).className='hide'
          }
        }
        el = document.getElementById(id)
        if(el.className=='hid'){
          el.className='visible'

        }
        else{
          el.className='hide'
        }

      }
    }
  },

}
</script>
<template>
  
    <div class=" cloud1">
      <p class="textcloud1">Подготовка сайта к индексации, сбор семантики, кластеризация и чистка семантики, анализ конкурентов и ниши</p>
<button @click="visible_hide('call')" class="btn1">
 <h1 class="nameButtoncloud1"> Читать больше</h1>
</button>
 </div>
  <div class="cloud2">
<p class="textcloud1">Исправление критических ошибок</p>
<button @click="visible_hide('call1')" class="btn1">
  <h1 class="nameButtoncloud1">Читать больше</h1>
</button>
</div>

<div class="cloud3">
<p class="textcloud1">Оптимизация, региональное продвижение, наполнение контентом</p>
<button @click="visible_hide('call2')" class="btn1">
  <h1 class="nameButtoncloud1">Читать больше</h1>
</button>
</div>



<div id="call">
  <h1>
    
    Подготовка сайта к индексации, сбор семантики, кластеризация и чистка семантики, анализ конкурентов и ниши

Первый месяц проходит в тесном сотрудничестве исполнителя и заказчика. Ведь тут требуются доступы к сайту, постоянное уточнение рабочих нюансов и т.д.


  </h1>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>

  </ul>
</div>
<div id="call"></div>
<div id="call"></div>



</template>


<style scoped>
.nameButtoncloud1{
  text-align: center;
}
  .cloud3{
width: 380px;
height:264px;

box-sizing: border-box;

position:absolute;
left: 70%;
right: 0%;
top: 455%;
bottom: 0%;

background: linear-gradient(122.93deg, rgba(100, 100, 100, 0.71) 1.7%, rgba(72, 71, 71, 0.12) 48.4%, rgba(115, 106, 106, 0.17) 94.76%);
border: 1px solid #FAFF00;
border-radius: 50px;



  }
.cloud2{

  
width: 380px;
height:264px;

box-sizing: border-box;

position:absolute;
left: 40%;
right: 0%;
top: 455%;
bottom: 0%;

background: linear-gradient(122.93deg, rgba(100, 100, 100, 0.71) 1.7%, rgba(72, 71, 71, 0.12) 48.4%, rgba(115, 106, 106, 0.17) 94.76%);
border: 1px solid #FAFF00;
border-radius: 50px;


}
.cloud1{

width: 380px;
height:264px;

box-sizing: border-box;

position:absolute;
top: 500px;
left: 10%;
right: 0%;
top: 455%;
bottom: 0%;

background: linear-gradient(122.93deg, rgba(100, 100, 100, 0.71) 1.7%, rgba(72, 71, 71, 0.12) 48.4%, rgba(115, 106, 106, 0.17) 94.76%);
border: 1px solid #FAFF00;
border-radius: 50px;

} 
.textcloud1{
  color: white;
text-align: center;
}
.btn1{
width: 80%;
height: 27%;
  position: absolute;
left: 11.05%;
right: 14.47%;
top: 68.18%;
bottom: 9.09%;
border-radius: 50px;
background: #FAFF00;

}


.visible{
display:block;
}
.hide{
display:none;
}

</style>