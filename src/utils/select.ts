export const enumToOptions = (e: any) => Object.keys(e).map((key: string) => ({ label: key, value: e[key] }));