// Public-file URL that respects the deploy base (GitHub Pages subfolder).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const asset = (p: string): string => base + p;
