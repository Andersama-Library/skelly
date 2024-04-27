import { _username } from "../+layout.js";
export async function load({ fetch }) {
    const starred = await fetch(`https://api.github.com/users/${_username}/starred`, { cache: 'force-cache' }).then((r) => {
        let j = r.json();
        return j;
    });
    return { starred: starred };
}
