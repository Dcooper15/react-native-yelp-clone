import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer KkIMp6OLgGulziR2y2ktWhWt9X5kg93bp2U1zNXSeBxzqyLxT4B_4kXHRfBwB2UeIfV1PXSpjlnBSd2JsNn35kCc3i1hqXfm6DefvqrxrcfU0HOOw_Ps3EgyErh0YHYx'
    }
});


