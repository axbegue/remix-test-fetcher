import jwt from 'jsonwebtoken';

export const isTokenValid = (token: string): boolean => {
  const decodedToken = jwt.decode(token);
  if (typeof decodedToken === 'object' && decodedToken && 'exp' in decodedToken && decodedToken.exp) {
    const ahora = Math.floor(Date.now() / 1000);
    // Retorna true si el token es vigente, si ahora es menor a exp es que es vigente.
    return decodedToken.exp > ahora;
  }
  // Retorna false si el token no se puede decodificar o no tiene 'exp'
  return false;
};
