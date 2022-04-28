

export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=5N2mEW7BzajfzpRk68hHKxuV8SABGfBG`;

    const resp = await fetch(url);

    const { data } = await resp.json(); //Desustructuramos({data}) para obtener solo la data

    const gifs = data.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });

    //console.log(gifs);
    return gifs;
}