export const baseDomainDev = "http://localhost/account";
export const baseDomainProd = "https://studaktivbi.ru/account"
export const baseDomain = process.env.NODE_ENV === "production" ? baseDomainProd : baseDomainDev;
