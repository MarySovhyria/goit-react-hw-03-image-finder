import { ImageGalleryItemStyled } from "./styledComponents/ImageGallery.styled";
import { ImageGalleryItemImage } from "./styledComponents/ImageGallery.styled";


export const ImageGalleryItem = ({ image, onItemClick }) => {
  const handleClick = () => {
    onItemClick(image);
  };

  return (
    <ImageGalleryItemStyled onClick={handleClick}>
      <ImageGalleryItemImage src={image.webformatURL} alt={image.tags} />
    </ImageGalleryItemStyled>
  );
};