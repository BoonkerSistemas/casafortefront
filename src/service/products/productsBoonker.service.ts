import {Injectable} from '@angular/core';
import {environment} from "@env/environment";
import axios from "axios";

@Injectable({
    providedIn: 'root',
})
export class ProductsBoonkerService {
    constructor() {
    }


    async getProductoPorId(id: any) {
        const headers = {
            Authorization: 'Bearer ' + environment.token,
        };
        const url: string = `${environment.api_url}/materiales-boonkers/${id}?[populate]=*`;

        try {
            const response = await axios.get(url, {headers});
            console.log('RESPONSE', response.data);
            
            return response.data;
        } catch (error) {
            console.error('Error al obtener los botones', error);
            throw error;
        }
    }



   
    
}
