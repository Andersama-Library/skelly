import { json } from '@sveltejs/kit';

// @migration task: Check imports
//import { process_path } from '$lib/markdown';
import fs from 'fs';
import dayjs from 'dayjs';
import { process_metadata } from '$lib/markdown';

export function GET({ params }) {
  let posts = fs.readdirSync(`src/posts`)
    .filter((fileName) => {
      return /[^.]+\.md$/.test(fileName)
    })
    .map((fileName) => {
      console.log(`src/posts/${fileName}`);
      const { metadata } = process_metadata(`src/posts/${fileName}`);
      console.log(`processed src/posts/${fileName}`);

      let stats = fs.statSync(`src/posts/${fileName}`);

      return {
        metadata,
        slug: fileName.slice(0, -3),
        file_modified: dayjs(stats.mtime).format("MMM D, YYYY")
      };
    });
  // sort the posts by create date.
  posts.sort((a, b) => (dayjs(a.metadata.date, "MMM D, YYYY") -
    dayjs(b.metadata.date, "MMM D, YYYY")));

  let body = JSON.stringify(posts);
  //console.log(body);
  //throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
  // Suggestion (check for correctness before using):
  // return json(body);
  return new Response(body,
    {
      headers: { 'content-type': 'application/json; charset=utf-8' }
    }
  );
  /*
  return {
    body
  };
  */
}