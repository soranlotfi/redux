import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const ApiKey: string = "live_wTFEgaVMfNSLggwMjvdY1k3NNvTt0ynRQyuanwfJuHIyK5mf1vXa0waK7cHejfZy"

export interface Breed {
    id: string,
    name: string,
    image: {
        url: string
    }
}

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.thedogapi.com/v1",
        prepareHeaders(headers) {
            headers.set('x-api-key', ApiKey)
            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchBreeds: builder.query<Breed[], number | void>({
                query(limit){
                    return `breeds?limit=${limit ?? 10}`
                }
            })
        }
    }
})

export const {useFetchBreedsQuery }=apiSlice