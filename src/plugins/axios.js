import Vue from 'vue-native-core';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

// create axios instance
const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    withCredentials: true,
});

// Custom instance defaults
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Intercept responses before they are handled by then or catch.
instance.interceptors.response.use(
    // Tout code d'état qui se situe dans la plage de 2xx provoque le déclenchement de cette fonction
    function (response) {
        return response.data;
    },

    // Tout code d'état qui sort de la plage de 2xx provoque le déclenchement de cette fonction
    function (error) {
        /**
         * Tester le code d'etat de la réponse
         * SI c'est 401 (erreur d'auth) ALORS recharger la page
         * SINON renvoyer les donnees de reponse
         */
        if (error.response.status == 401) {
            console.log('Rechargez la page svp');
        }
        else {
            return Promise.reject(error.response.data);
        }
    }
);

export default instance;
