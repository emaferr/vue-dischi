// Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.

const app = new Vue({

    el: '#app',

    data: {

        url : 'https://flynn.boolean.careers/exercises/api/array/music',

        dischi : [],

        selezione : [],

    },


    // ordino gli Albumm per data
    methods: {

        ordina: function(arr) {
          // Set slice() to avoid to generate an infinite loop!
          return arr.slice().sort(function(a, b) {

            return a.year - b.year; // => dal meno al piu recente
            // return b.year - a.year; => dal piu recente al meno
          });
          
        }

      },

    mounted() {
        
        axios

        .get(this.url)

        .then(resp => {

            let raccolta = resp.data.response;

            for (let index = 0; index < raccolta.length; index++) {

            let genere = raccolta[index].genre

            this.dischi.push(raccolta[index])

            if (!this.selezione.includes(genere)){

              this.selezione.push(genere)
            }

           }

           console.log(this.selezione);

          //  if (!this.selezione.includes(this.raccolta.genre)){
          //   this.selezione.push(this.raccolta.genre)
          // }

          //  console.log(this.selezione);

        })
        
    },

})

