
export const prerender = true;
export const csr = true;
export const ssr = true;

import { _username } from "../+layout.js";

export async function load({ fetch }) {
    const github_user_events = await fetch(`https://api.github.com/users/${_username}/events`, { cache: 'force-cache' }).then((r) => {
        let j = r.json();
        return j;
    });

    return { github_user_events: github_user_events };
}
