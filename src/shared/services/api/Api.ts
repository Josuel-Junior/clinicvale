import axios, { AxiosInstance } from "axios"


export const Api: AxiosInstance = axios.create({
    baseURL: "https://graph.instagram.com/me/media?"
})