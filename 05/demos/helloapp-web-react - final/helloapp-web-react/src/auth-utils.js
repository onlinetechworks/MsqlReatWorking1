import {UserAgentApplication} from 'msal';

export const LOGIN_SCOPES = ["openid","profile","user.read"];
export const API_SCOPES =  ["api://72f51536-eebb-442c-995c-d2e99f7d67ca/api.scope"];

export const acquireToken = () => {
    var userRequest = {
        scopes: API_SCOPES
    };

    try{
        return msalApp.acquireTokenSilent(userRequest);
    } catch(error){
        console.log("Error = ", error);
    }
}

export const fetchAPI = (url, accessToken) => {
    const response = fetch(url, {
        responseType:'text',
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    });

    return response;
}

export const msalApp = new UserAgentApplication({
    auth:{
        clientId:"54b71726-c467-4a41-88a7-9f32fa8d9cab",
        authority:"https://login.microsoftonline.com/6d6af64e-385a-410c-b43d-d098e47fe130/",
        validateAuthority: true,
        postLogoutRedirectUri:"http://localhost:3000",
        navigateToLoginRequestUrl:true
    },
    cache:{
        cacheLocation:"sessionStorage",
        storeAuthStateInCookie: false 
    }
})