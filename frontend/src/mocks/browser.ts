import { setupWorker } from 'msw';

import { newsletterHandler } from './handlers/newsletterHandler/newsletterHandler';
import { contactHandler } from './handlers/contactHandler/contactHandler';

const handlers = [newsletterHandler(), contactHandler()];

export const worker = setupWorker(...handlers);
