<template>
  <div id="app">
    <export-excel :data="jsonDatam" fields="jsonProperties" :name="excel_name" :worksheet="work_sheet_name">
      Vuejs Vue Excel #2
    </export-excel>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      work_sheet_name: "Kullanici Calis",
      excel_name:"Kullanicilar",
      jsonProperties: {
        "Kullanici Numarasi": "id",
        "Kullanici Adin": "name",
        "Kullanici Soyadi": "surname",
        "Kullanci Yasi": "age",
        "Kullanici EV Telefonu": "phone.home",
        "Kullanci IS Telefonu": "phone.work",
        "Dogum Tarini": "birthDate",
      },
      jsonDatam:[
        {
          id: 1,
          name: "Yasin",
          surname: "Dalkilic",
          age: 30,
          phone: {
            home: "4938373838",
            work: "4949478909"
          },
          birtDate: new Date(),
        },
        {
          id: 2,
          name: "Ahnet",
          surname: "Dalkilic",
          age: 30,
          phone: {
            home: "4938373838",
            work: "4949478909"
          },
          birtDate: new Date(),
        },
        {
          id: 3,
          name: "Selin",
          surname: "Dalkilic",
          age: 30,
          phone: {
            home: "4938373838",
            work: "4949478909"
          },
          birtDate: new Date(),
        }
      ]
    }
  }
}

</script>


<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>