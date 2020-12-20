import marked from 'marked';
import sanitize from 'sanitize-html';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const worker: Worker = self as any;

worker.addEventListener('message', (e) => {
  const text = e.data;
  const html = sanitize(marked(text), { allowedTags: [ ...sanitize.defaults.allowedTags, 'h1', 'h2' ] });
  worker.postMessage({ html })
});