const baseUrl = "http://localhost:3001";

class ObjectifService{

    static async list(id){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                //"Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }
        let call = await fetch(`${baseUrl}/objectif/${id}`, init);
        return call;

    }

    static async details(id){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                //"Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }
        let call = await fetch(`${baseUrl}/objectif/${id}`, init);
        return call;
    }

    static async update(id, bodyFilm){
        let init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
                //"Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(bodyFilm)
        }
        let call = await fetch(`${baseUrl}/objectif/${id}`, init);
        return call;
    }

    static async create(body){
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        let call = await fetch(`${baseUrl}/objectif`, init);
        return call;
    }

    static async delete(id){
        let init = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                //"Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }
        let call = await fetch(`${baseUrl}/objectif/${id}`, init);
        return call;
    }


}

export default ObjectifService;