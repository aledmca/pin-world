export const getAllFlats = async () => {
const result = await fetch('https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json');

console.log(result);
}