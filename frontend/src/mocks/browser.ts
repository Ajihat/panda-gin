import { setupWorker } from 'msw';

import { newsletterHandler } from './handlers/newsletterHandler/newsletterHandler';
import { contactHandler } from './handlers/contactHandler/contactHandler';
import { cocktailsHandler } from './handlers/cocktailsHandler/cocktailsHandler';

const handlers = [newsletterHandler(), contactHandler(), cocktailsHandler()];

export const worker = setupWorker(...handlers);
