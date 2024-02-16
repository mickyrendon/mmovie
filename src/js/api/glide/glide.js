import Glide from "../../../../node_modules/@glidejs/glide/dist/glide.esm.js"


const rulesHeader = {
        type: 'carousel',
        startAt: 0,
        autoplay: 3000,
        perView: 1, 
        // gap: 10
    }
export const rulesTrendAndSeries = {
    type: 'carousel',
    startAt: 0,
    perView: 1, 
    gap: 20,
    // FIXME, el slider debe renderizar la pagina siguiente
    // loop: 'infinite'
    
}
export const slider = new Glide('.glide', rulesHeader)
export const sliderTrending = new Glide('.glide_trending', rulesTrendAndSeries)
export const sliderSeries = new Glide('.glide_series', rulesTrendAndSeries)
export const sliderGenres = new Glide('.glide_genres', rulesTrendAndSeries)
export const sliderRecommendations = new Glide('.glide_recommendations', rulesTrendAndSeries)
