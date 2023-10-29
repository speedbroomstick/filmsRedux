
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRootFilms } from '../../types/films.types'

export const api = createApi({
    reducerPath: 'filmApi',
    tagTypes: ['Films'],
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL_API }),
    endpoints: (builder) => ({
        getFilms: builder.query<IRootFilms, null>({
          query: () => `/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&page=1&per_page=10`,
        }),
      }),
})

export const {useGetFilmsQuery} = api