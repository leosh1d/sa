export const baseDomainDev = "http://localhost/success";
export const baseDomainProd = "https://studaktivbi.ru/success"
export const baseDomain = process.env.NODE_ENV === "development" ? baseDomainDev : baseDomainProd;
