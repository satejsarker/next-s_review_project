import { writeFileSync } from "node:fs"
import  qs  from 'qs';
let url = 'http://localhost:1337/api/reviews' + '?'+ qs.stringify({
// fields: ['slug', 'title']
populate: '*'
}, {
    encodeValuesOnly: true
})


const strapiRes = async () => {
    const response = await fetch(url);
    return await response.json();
}

(async () => {

    const body = await strapiRes();
    const formatedRes = JSON.stringify(body, null, 2)
    console.log('starpi response', formatedRes);

    const file = 'scripts/strapi-response.json';
    writeFileSync(file, formatedRes, 'utf8')
})();

