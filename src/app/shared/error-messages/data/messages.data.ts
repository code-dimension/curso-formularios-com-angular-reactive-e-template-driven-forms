import { tErrorMessages } from "../types/error-messages.type";

export const errorMessages: tErrorMessages['errorMessages'] = {
  required: () => 'Campo obrigatório.',
  email: () => 'Email está inválido.',
  passwordsAreNotEqual: ({ field1, field2 }) =>
    `A senha do campo "${field1}" não é igual a do campo "${field2}"`,
  isNicknameTaken: () => 'O nickname já está em uso',
  minlength: ({ requiredLength, actualLength }) =>
    `O valor deve conter no mínimo ${requiredLength} caracteres (atualmente ${actualLength}).`,
};

export const pendingMessage = 'Validando...';
