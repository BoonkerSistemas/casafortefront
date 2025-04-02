import {Injectable} from '@angular/core';
import {environment} from "@env/environment";
import axios from "axios";

@Injectable({
    providedIn: 'root',
})
export class PasosCasaForteService {
    constructor() {
    }

    async getComponentPasos() {
        const url: string = `${environment.api_url}/pasos-casa-fortes?[populate]=*`;
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

   
}
