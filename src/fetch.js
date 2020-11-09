import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://frozen-island-79303.herokuapp.com/';



export async function fetchStrains() {
    try{
        const response = await request.get(`${URL}strains/`);
        return response.body;
    } catch(e) {
        throw e;
    }
}

export async function fetchStrain(someId) {
    try{
        const response = await request.get(`${URL}strains/${someId}`);
        return response.body;
    } catch(e) {
        throw e;
    }
}
export async function fetchGrowers() {
    try{
        const response = await request.get(`${URL}growers`);
        return response.body;
    } catch(e) {
        throw e;
    }
}

export async function createStrain(newStrain) {
    try {
        await request
        .post(`${URL}strains`)
        .send(newStrain);
        
        return;
    } catch(err) {
        throw err;
    }
}
export async function updateStrain(someId, newStrain) {
    try {
        await request
        .put(`${URL}strains/${someId}`)
        .send(newStrain);
        
        return;
    } catch(err) {
        throw err;
    }
}
export async function deleteStrain(someId) {
    try {
        await request.delete(`${URL}strains/${someId}`);
        
        return;
    } catch(err) {
        throw err;
    }
}