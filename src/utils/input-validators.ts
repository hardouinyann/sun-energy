import validator from 'validator';
import { IsEmailOptions } from 'validator/lib/isEmail';
import { IsMobilePhoneOptions } from 'validator/lib/isMobilePhone';

export const minLength = (minLength: number) => {
    return (value: string) => value?.length >= minLength;
}

export const isEmail = (mail: string, options: IsEmailOptions) => Boolean(mail) && validator.isEmail(mail, options);

export const isPhoneNumber = (phoneNumber: string, options?: IsMobilePhoneOptions) => validator.isMobilePhone(phoneNumber, 'fr-FR', options);

export const isPostal = (str: string) => Boolean(str) && validator.isPostalCode(str, 'FR');