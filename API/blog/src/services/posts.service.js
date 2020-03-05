const baseUrl = "http://localhost:3001";

class PostService{

    static async list(){

        let init = {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        }

        let call = await fetch(`${baseUrl}/articles`, init);
        return call;
    }
    
    static async delete(id){

        let init = {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        }
        let call = await fetch(`${baseUrl}/articles/${id}`, init);
        return call;

    }

    static async listUsers(){

        let init = {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        }

        let call = await fetch(`${baseUrl}/users`, init);
        return call;
    }
    
    static async deleteUser(id){

        let init = {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        }
        let call = await fetch(`${baseUrl}/users/${id}`, init);
        return call;

    }

}

export default PostService;