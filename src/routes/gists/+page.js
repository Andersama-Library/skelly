export const prerender = true;

import { _username } from "../+layout.js";

export async function load({ fetch }) {
    const gists = await fetch(`https://api.github.com/users/${_username}/gists`, {cache: 'force-cache'}).then((r) => {
        let j = r.json();
        return j;
    });

    let sorted_gists = {};
    for (let i = 0; i < gists.length; i++) {
        let gist = gists[i];

        let files = Object.keys(gist.files)[0];
        /*
        Filter gists here
        */
        let filename = files.length > 0 ? Object.keys(gist.files)[0] : "";
        let language = gist.files[filename].language ? gist.files[filename].language : filename.substring(filename.lastIndexOf('.')+1);

        if (!sorted_gists[language]) {
            sorted_gists[language] = [];
        }
        sorted_gists[language].push(i);
    }

    return { gists: gists, gists_by_extension: sorted_gists };
}
