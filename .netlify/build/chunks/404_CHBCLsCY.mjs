export { renderers } from '../renderers.mjs';

const page = () => import('./pages/404_Biuuado4.mjs').then(n => n.d);

export { page };
