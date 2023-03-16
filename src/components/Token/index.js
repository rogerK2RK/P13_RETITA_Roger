import axios from "axios";
const loginUrl  = 'http://localhost:3001/api/v1/user/login'
const profileUrl = 'http://localhost:3001/api/v1/user/profile';
// const url = 'http://localhost:3001/api/v1'

// Get the token and stok in localStorage
async function getToken(email, password) {
    try{
        const response = await axios.post(loginUrl , {email, password,});
        const token = response.data.token;
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        console.error(error);
    }
};

//get the token from the localStorage and add in the header 
async function getProfileData() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(profileUrl, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const profileData = response.data;
        // 3. Stocker les données dans Redux
        return profileData.body;
    } catch (error) {
        console.error(error);
    }
};
export { getToken, getProfileData };


export default getToken