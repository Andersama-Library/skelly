import { json } from '@sveltejs/kit';
import { process_path } from '$lib/markdown';

export async function GET({ params }) {
  const { slug } = params;

  const { metadata, content } = await process_path(`src/posts/${slug}.md`);
  const body = JSON.stringify({ metadata: metadata, content: content });

  console.log(body);

  return new Response(body,
    {
      headers: { 'content-type': 'application/json; charset=utf-8' }
    }
  );
}