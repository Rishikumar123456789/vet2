import { PublicApi } from '../API/PublicApi';
const SignUpService =  async (userDetails) => {
  const data={};
try {
    const response=await PublicApi.post("/register",data);
    return response;
} catch (error) {
    throw error
}
}

export default SignUpService;
