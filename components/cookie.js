
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers'


export const GetUserId = () => {
    const cookie = cookies().get('cookie');
    const authToken = cookie.value;
    const decodedToken = jwtDecode(authToken, 'jkdajkdhakjhdkjahkjdahjkdhkajhadkjhkjdhjkh');
    const userId = decodedToken.userId;
    return (userId);
    
}
