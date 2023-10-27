import axios from 'axios';

export const searchImages = async (searchTerm, setState, pageNumber, replace = true) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        q: searchTerm,
        page: pageNumber,
        key: '36787252-5c3b11e3b9a6e8386f9bae3e3', 
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12
      }
    });
    const images = response.data.hits;
    if (replace) {
      setState(prevState => ({ ...prevState, images, totalPages: Math.ceil(images.length / 12) }));
    } else {
      setState(prevState => ({ ...prevState, images: [...prevState.images, ...images] }));
    }
    
    return images;
  } catch (error) {
    console.error(error);
  }
};