
import { base } from '$app/paths';
export async function load({ params, fetch }) {
    const slug = params.slug;
    const post = await fetch(`${base}/blog/${slug}.json`).then((r) => {
        let j = r.json();
        return j;
    });

    if (!post.metadata) {
        post.metadata = {
            title: "Error!",
            date: ""
        };
        post.content = "<p>Missing Frontmatter Completely! Expected at least a title!</p><p>Example:</p><p>---<br>\
title: Some title<br>\
date: 2021-04-03<br>\
excerpt: A short bit of the article<br>\
---</p><p>Make sure FrontMatter starts at beginning of file!</p>";
    } else if (!post.metadata.title) {
        post.metadata = {
            title: "Error!",
            date: ""
        };
        post.content = "<p>Missing Frontmatter! Expected at least a title!</p><p>Example:</p><p>---<br>\
title: Some title<br>\
date: 2021-04-03<br>\
excerpt: A short bit of the article<br>\
---</p><p>Make sure FrontMatter starts at beginning of file!</p>";
    }

    return { post: post };
}
