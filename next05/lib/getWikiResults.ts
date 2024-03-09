export default async function getWikiResults(searchTerm: string) {

    // console.log('getWikiResults', searchTerm);

    const searchTermBetter = searchTerm.replaceAll("%20", " ");

    

    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTermBetter,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
    })

    // console.log(searchParams);
    // console.log('https://en.wikipedia.org/w/api.php?' + searchParams);
    

    const response = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams)

    return response.json()
} 