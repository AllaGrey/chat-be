export const getAllowedOrigins = (): string[] => {
  const FRONT_DEV = process.env.FRONT_DEV || '';
  const FRONT_PROD = process.env.FRONT_PROD || '';

  return [FRONT_DEV, FRONT_PROD].filter(origin => origin !== '');
};
