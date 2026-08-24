export function capitalizeFirstLetter(str: any) {
    if(!str) return '';

    return str.target.charAt(0).toUpperCase() + str.slice(1);
};