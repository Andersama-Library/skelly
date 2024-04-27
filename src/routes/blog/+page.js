
import { base } from '$app/paths';
import { browser, dev } from '$app/environment';

export async function load({ fetch }) {
    const posts = await fetch(`/blog.json`).then((r) => {
        let j = r.json();
        return j;
    });
    console.log(posts);
    return { posts: posts };
}
// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement...
//export const hydrate = dev;

// ...but if the client-side router is already loaded
// (i.e. we came here from elsewhere in the app), use it
//export const router = browser;

//export const csr = false;

export const csr = true;
export const ssr = true;
// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender = true;

