import {Injectable} from '@angular/core';
import {environment} from "@env/environment";
import axios from "axios";

@Injectable({
    providedIn: 'root',
})
export class SystemCasaForteService {
    constructor() {
    }

    async getComponentSlider() {
        const url: string = `${environment.api_url}/slider-sistema-casa-fortes?[populate]=*`;
        const headers = {
            Authorization: 'Bearer ' + environment.token,
        };

        try {
            const response = await axios.get(url, {headers});
            return response.data;
        } catch (error) {
            console.error('Error al obtener los datos', error);
            throw error;
        }
    }

    async getComponentBotones(home: string) {
        const headers = {
            Authorization: 'Bearer ' + environment.token,
        };
        const url: string = `${environment.api_url}/sistema-casa-forte?populate[${home}][populate]=*`;

        try {
            const response = await axios.get(url, {headers});
            return response.data;
        } catch (error) {
            console.error('Error al obtener los botones', error);
            throw error; // Lanza el error para manejarlo en el componente
        }
    }

    async getComponentOnlyButtons(home: string) {
        const headers = {
            Authorization: 'Bearer ' + environment.token,
        };
        const url: string = `${environment.api_url}/sistema-casa-forte?populate[${home}][populate]=Button.icon`;

        try {
            const response = await axios.get(url, {headers});
            return response.data;
        } catch (error) {
            console.error('Error al obtener los botones', error);
            throw error; // Lanza el error para manejarlo en el componente
        }
    }


    async getComponentImage(home: string) {
        const headers = {
            Authorization: 'Bearer ' + environment.token,
        };
        const url: string = `${environment.api_url}/sistema-casa-forte?populate[${home}][populate]=image.file`;

        try {
            const response = await axios.get(url, {headers});
            return response.data;
        } catch (error) {
            console.error('Error al obtener los botones', error);
            throw error;
        }
    }


    async getComponentList(home: string) {
        const headers = {
            Authorization: 'Bearer ' + environment.token,
        };
        const url: string = `${environment.api_url}/sistema-casa-forte?populate[${home}][populate]=listado.icon`;

        try {
            const response = await axios.get(url, {headers});
            return response.data;
        } catch (error) {
            console.error('Error al obtener los botones', error);
            throw error; // Lanza el error para manejarlo en el componente
        }
    }

    contact() {
        const headers = {
            Authorization: 'Bearer ' + environment.token,
        };
        const url: string = `${environment.api_url}/contact?populate=*`;

        return axios.get(url, {headers})
            .then(response => response.data) // Devuelve solo los datos de la respuesta
            .catch(error => {
                console.error('Error al obtener los contactos', error);
                throw error; // Lanza el error para manejarlo en el componente
            });
    }

    getCurrentTime() {
        const url: string = 'https://timeapi.io/api/Time/current/zone?timeZone=America/Ecuador';

        return axios.get(url)
            .then(response => response.data) // Devuelve solo los datos de la respuesta
            .catch(error => {
                console.error('Error al obtener la hora actual', error);
                throw error; // Lanza el error para manejarlo en el componente
            });
    }
}
