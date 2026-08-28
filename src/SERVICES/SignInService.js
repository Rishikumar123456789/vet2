import { PublicApi } from '../API/PublicApi';
const SignInService =  async (userDetails) => {
 const data={};
 try {
    const response=await PublicApi.post("/signin",data)
    return response
 } catch (error) {
    throw error;
 }
}

export default SignInService;
