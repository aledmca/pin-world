export const getAllFlats = async () => {
const result = await fetch('https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json');
const json = await result.json();

return json;
}