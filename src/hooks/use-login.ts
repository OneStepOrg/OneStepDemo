import * as React from 'react';
import Cookies from 'js-cookie';

export function useIsLogin(){
    const [isLoggedIn, setIsLoggedIn]=React.useState<boolean | undefined>(undefined)
    React.useEffect(()=>{
        const value: string | undefined=Cookies.get("jwtToken");
        if(value!==undefined){
           setIsLoggedIn(true)
        }else{
            setIsLoggedIn(false)
        }
    },[])

    return !!isLoggedIn
}
