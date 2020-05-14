const apiKey = 'RIoX8dzYpYjYuRLZ01tbJaMlWCK0pPIK1gq0WRgod5XaEH6063DPONIYWQjHwmIOo_4uJ5TthQDDwusl93PiqMphMXkquzBSB-k84WTIfhuIavQzjRJr7ArW5Yq7XnYx';

const Yelp={
    searchYelp(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers:{
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => response.json()).then(jsonResponse =>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    return {
                        id : business.id,
                        imageSrc : business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }else{
                console.error('Error while Fetching');
            }
        })
    }
}


export default Yelp;
