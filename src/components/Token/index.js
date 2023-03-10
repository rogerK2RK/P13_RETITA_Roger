import axios from "axios";
const loginUrl  = 'http://localhost:3001/api/v1/user/login'
const profileUrl = 'http://localhost:3001/api/v1/user/profile';
// const url = 'http://localhost:3001/api/v1'

async function getToken(email, password) {
    try{
        const response = await axios.post(loginUrl , {email, password,});
        return response.data.token;
    } catch (error) {
        console.error(error);
    }
};

// export default getToken


async function getUserProfile(token, email, password) {
    try {
        const response = await axios.post(profileUrl, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
            console.log('Token expired or invalid, refreshing token...');
            const newToken = await getToken(email, password);
            return getUserProfile(newToken, email, password);
        } else {
        console.log('Unknown error:', error);
        }
    }
}

async function main(email, password) {
    const token = await getToken(email, password);
    const userProfile = await getUserProfile(token, email, password);
    console.log(userProfile);
}
  
export default main