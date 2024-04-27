import * as vfile from 'to-vfile';
import {unified} from 'unified';
import parse from 'remark-parse';
import gfm from 'remark-gfm';
import remark2rehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import frontmatter from 'remark-frontmatter';
import highlight from 'rehype-highlight';
import yaml from 'js-yaml';

import fs from 'fs';
import dayjs from 'dayjs';

let parser = unified()
    .use(parse)
    .use(frontmatter, ['yaml'])
    .use(gfm);

let runner = unified()
    .use(remark2rehype)
    .use(highlight)
    .use(rehypeStringify);

export function process_metadata(filename) {
  console.log(filename);
  let vobj = vfile.readSync(filename);
  let tree = parser.parse(vobj);
  let metadata = null;
  console.log(tree)
  //console.log(vobj);
  //console.log(tree.children);
  
  if (tree.children.length > 0 && tree.children[0].type == "yaml") {
    metadata = yaml.load(tree.children[0].value);
    tree.children = tree.children.slice(1, tree.children.length);

    if (typeof(metadata) === undefined || metadata === null) {
      let stats = fs.statSync(filename);
      metadata.date = dayjs(stats.mtime).format("MMM D, YYYY");
    } else if (metadata.date) {
        let stats = fs.statSync(filename);
        metadata.date = dayjs(stats.mtime).format("MMM D, YYYY");
    } else {
        metadata.date = dayjs(metadata.date).format("MMM D, YYYY");
    }
  } else {

  }

  //let content = runner.stringify(runner.runSync(tree)); //runner.runSync(tree)
  return { metadata };
}

export function process_path(filename) {
  console.log(filename);
  let vobj = vfile.readSync(filename);
  let tree = parser.parse(vobj);
  let metadata = null;
  console.log(tree)
  //console.log(vobj);
  //console.log(tree.children);
  
  if (tree.children.length > 0 && tree.children[0].type == "yaml") {
    metadata = yaml.load(tree.children[0].value);
    tree.children = tree.children.slice(1, tree.children.length);

    if (typeof(metadata) === undefined || metadata === null) {
      let stats = fs.statSync(filename);
      metadata.date = dayjs(stats.mtime).format("MMM D, YYYY");
    } else if (metadata.date) {
        let stats = fs.statSync(filename);
        metadata.date = dayjs(stats.mtime).format("MMM D, YYYY");
    } else {
        metadata.date = dayjs(metadata.date).format("MMM D, YYYY");
    }
  } else {

  }

  let content = runner.stringify(runner.runSync(tree)); //runner.runSync(tree)
  return { metadata, content };
}