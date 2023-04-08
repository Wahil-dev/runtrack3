const jsonText = `
    {
        "name" : "wahil",
        "age": "20",
        "métier": "développeur web"
    }
`
let key = "age";

const jsonValueKey = (jsonText, key) => {
    const jsonObject = JSON.parse(jsonText);
    return jsonObject[key];
}

console.log(jsonValueKey(jsonText, "name"))