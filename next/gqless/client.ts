import fetch from 'isomorphic-unfetch'
import { Client, QueryFetcher } from "gqless";
import { schema, Query } from "./generated";

const isBrowser = typeof window !== 'undefined';
const origin = isBrowser ? '' : `http://localhost:${process.env.PORT}`;
const endpoint = `${origin}/admin/api`;

function getQueryFetcher(requestCookie) {
    const fetchQuery: QueryFetcher = async (query, variables) => {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(requestCookie ? {"Cookie": requestCookie} : {})
            },
            body: JSON.stringify({
                query,
                variables
            }),
            mode: "cors"
        });

        if (!response.ok) {
            throw new Error(`Network error, received status code ${response.status}`);
        }

        const json = await response.json();

        if (json.errors && json.errors.length) {
            throw new Error(json.errors[0].message)
        }

        return json;
    };
    return fetchQuery
}


export const createClient = ({ requestCookie = null } = {}) =>
    new Client<Query>(schema.Query, getQueryFetcher(requestCookie));

export const client = createClient();

export const query = client.query;
