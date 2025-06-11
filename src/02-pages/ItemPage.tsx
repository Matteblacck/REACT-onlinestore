import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadProductData } from "../06-shared/DataLoader";
import type { Product } from "../05-entities/products/types";
import styled from "styled-components";
import { Button } from "../06-shared/Button";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../01-app/redux/store";
import { addItem } from "../01-app/slices/cartSlice";


const PageWrapper = styled.div`
  padding: 2rem 0;
  min-height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const ProductContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-height: calc(100vh - 200px);

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    max-height: none;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 80vh;
`;

const MainImageContainer = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  overflow: hidden;
`;

const MainImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  width: auto;
  height: auto;
`;

const Thumbnails = styled.div`
  display: flex;
  gap: 0.8rem;
  padding: 1rem 0;
  overflow-x: auto;
  max-width: 100%;
`;

const Thumbnail = styled.div`
  width: 60px;
  height: 80px;
  min-width: 60px;
  background: #f5f5f5;
  cursor: pointer;
  transition: opacity 0.3s;
  overflow: hidden;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductInfo = styled.div`
  padding: 0 0 0 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 80vh;

  @media (max-width: 992px) {
    padding: 2rem 0 0;
    max-height: none;
  }
`;

const ProductHeader = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`;

const ProductDescription = styled.p`
  margin: 1rem 0;
  line-height: 1.6;
  color: #555;
`;

const SizeSelector = styled.div`
  margin: 1rem 0;
`;

const SizeTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

const SizeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;

  @media (max-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SizeOption = styled.button`
  padding: 0.75rem;
  border: 1px solid #ddd;
  background: transparent;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #000;
  }

  &.selected {
    background: #000;
    color: white;
    border-color: #000;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export default function ItemPage() {
  const { section, category, subcategory, name } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState(0);
  const dispatch = useDispatch<AppDispatch>()
  
  const decodedName = name ? decodeURIComponent(name) : "";

  useEffect(() => {
    const fetchData = async () => {
      if (section && category && subcategory && decodedName) {
        const products = await loadProductData(section, category, subcategory);
        const foundProduct = products.find((item: Product) => item.name === decodedName);
        setProduct(foundProduct || null);
      }
    };

    fetchData();
  }, [section, category, subcategory, decodedName]);

  const handleAddToCart = () => {
    if (!product || !selectedSize) return;

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      photo: product.photos[0],
      quantity: 1
    };

    dispatch(addItem(cartItem));
  };

  

  if (!product) {
    return (
      <PageWrapper>
        <div className="container text-center">
          <p>Product not found</p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <ProductContainer>
        <ProductGrid>
          <ImageColumn>
            <MainImageContainer>
              <MainImage src={product.photos[mainImage]} alt={product.name} />
            </MainImageContainer>
            <Thumbnails>
              {product.photos.map((photo, index) => (
                <Thumbnail key={index} onClick={() => setMainImage(index)}>
                  <img src={photo} alt={`${product.name} thumbnail ${index}`} />
                </Thumbnail>
              ))}
            </Thumbnails>
          </ImageColumn>

          <ProductInfo>
            <ProductHeader>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>${product.price}</ProductPrice>
            </ProductHeader>

            <ProductDescription>
              {product.description}
            </ProductDescription>

            <SizeSelector>
              <SizeTitle>Select size</SizeTitle>
              <SizeGrid>
                {product.sizes.map((sizeObj) => (
                  <SizeOption
                    key={sizeObj.size}
                    className={selectedSize === sizeObj.size ? 'selected' : ''}
                    onClick={() => setSelectedSize(sizeObj.size)}
                  >
                    {sizeObj.size}
                  </SizeOption>
                ))}
              </SizeGrid>
            </SizeSelector>

            <ActionButtons>
              <Button 
                style={{ 
                  width: '100%',
                  padding: '1rem',
                  background: selectedSize ? '#000' : '#ddd',
                  color: selectedSize ? 'white' : '#888',
                  border: 'none',
                  fontWeight: '500',
                  letterSpacing: '1px',
                  cursor: selectedSize ? 'pointer' : 'not-allowed'
                }}
                disabled={!selectedSize}
                onClick={handleAddToCart}
              >
                ADD TO CART
              </Button>
              <Button 
                style={{ 
                  width: '100%',
                  padding: '1rem',
                  background: 'transparent',
                  color: '#000',
                  border: '1px solid #000',
                  fontWeight: '500',
                  letterSpacing: '1px'
                }}
              >
                ADD TO WISHLIST
              </Button>
            </ActionButtons>

            <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e5e5' }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: '500', marginBottom: '1rem', letterSpacing: '1px' }}>PRODUCT DETAILS</h3>
              <p style={{ lineHeight: '1.6', color: '#555' }}>
                Premium quality materials. Designed for comfort and style. 
                Care instructions: Dry clean only. Made in Italy.
              </p>
            </div>
          </ProductInfo>
        </ProductGrid>
      </ProductContainer>
    </PageWrapper>
  );
}