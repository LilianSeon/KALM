

class Auth{

    static auth(roles){
        return async (req, res, next) => {

            try {
                let token = req.headers.authorization.replace(/Bearer /g, '');
            } catch (error) {
                
            }
        }

    }
}

export default Auth;