import { RootState } from "@/redux/store";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";

const dynamicBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, WebApi, extraOptions) => {
  const baseUrl = useSelector((state: RootState) => state.baseUrl.base_url);
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    prepareHeaders: async (headers) => {
      if (accessToken) {
        headers.set("authorization", `Bearer ${accessToken}`);
      }
      headers.set("accept", "application/json");
      return headers;
    },
  });
  return rawBaseQuery(args, WebApi, extraOptions);
};

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseService = createApi({
  reducerPath: "baseService",
  baseQuery: dynamicBaseQuery,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  tagTypes: [],
  endpoints: (builder) => ({}),
  keepUnusedDataFor: 0,
});
