import {Injectable} from '@angular/core';
import {environment} from "@env/environment";
import axios from "axios";

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    constructor() {
    }


    async getGeneralComponent(home: string) {
        const headers = {
            Authorization: 'Bearer ' + environment.token,
        };
        const url: string = `${environment.api_url}/general?populate[${home}][populate]=*`;

        try {
            const response = await axios.get(url, {headers});
            return response.data;
        } catch (error) {
            console.error('Error al obtener los botones', error);
            throw error; // Lanza el error para manejarlo en el componente
        }
    }


    async getComponentList(home: string) {
        const headers = {
            Authorization: 'Bearer ' + environment.token,
        };
        const url: string = `${environment.api_url}/menu?populate[${home}][populate]=*`;

        try {
            const response = await axios.get(url, {headers});
            return response.data;
        } catch (error) {
            console.error('Error al obtener los botones', error);
            throw error; // Lanza el error para manejarlo en el componente
        }
    }


}
