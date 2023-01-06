import { setupWorker } from 'msw';

import { newsletterHandler } from './handlers/newsletterHandler/newsletterHandler';
import { contactHandler } from './handlers/contactHandler/contactHandler';
import { cocktailsHandler } from './handlers/cocktailsHandler/cocktailsHandler';
import { cocktailHandler } from './handlers/cocktailHandler/cocktailHandler';

const handlers = [newsletterHandler(), contactHandler(), cocktailsHandler(), cocktailHandler()];

export const worker = setupWorker(...handlers);
