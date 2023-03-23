import axios from "axios";
const loginUrl  = 'http://localhost:3001/api/v1/user/login'
const profileUrl = 'http://localhost:3001/api/v1/user/profile';
// const url = 'http://localhost:3001/api/v1'

// Get the token and stok in localStorage
async function getToken(email, password) {
    try{
        const response = await axios.post(loginUrl , {email, password,});
        const token = response.data.body.token;
        const status = response.data.status;
        localStorage.setItem('token', token);
        // return {token, status};
        return status;
    } catch (error) {
        console.error(error);
    }
};

//get the token from the localStorage and add in the header 
async function getProfileData() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(profileUrl,{}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const profileData = response.data.body;
        // 3. Stocker les données dans Redux
        return profileData;
        // return profileData.body;
    } catch (error) {
        console.error(error);
    }
};
export { getToken, getProfileData };


// export default getToken