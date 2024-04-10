import translate from 'node-google-translate-skidz';

export async function textTranslate(products){
    const result = []
    await Promise.all(products.map( async prod => {
        result.push({ 
                ...prod,
                title: await dynamicTranslate(prod.title),
                description: await dynamicTranslate(prod.description),
                category: (await dynamicTranslate(prod.category)).toLowerCase()
            })
            return result
    }))

    return result
}



async function dynamicTranslate(textToTranslated){   
    const traduction = await translate({
    text: `${textToTranslated}`,
    source: 'en',
    target: 'es'
    })
    return traduction.translation
}
