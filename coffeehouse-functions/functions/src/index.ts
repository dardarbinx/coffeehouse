import * as functions from 'firebase-functions';
import * as ConfirmationMail from './confirmation-mail';

export const confirmationMail = ConfirmationMail.listener; 