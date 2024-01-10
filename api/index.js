import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
      {
        params: {
          bl_latitude: '-8.204191994973753',
          tr_latitude: '-7.54190192732809',
          bl_longitude: '110.0139419605863',
          tr_longitude: '110.8346329331099',
          limit: '30',
          currency: 'IDR',
          lunit: 'km',
          lang: 'en_US'
        },
        headers: {
          'X-RapidAPI-Key': '9c2e9581bcmsh61304f7447922b3p1cd35djsn9325d5758d33',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
