import { ArrowRightOutlined } from '@ant-design/icons';
import { MessageDisplay } from '@/components/common';
import { ProductShowcaseGrid } from '@/components/product';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, SHOP } from '@/constants/routes';
import {
  useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop
} from '@/hooks';
import bannerImg from '@/images/banner-girl.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  useDocumentTitle('Clothe Craft | Home');
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended
  } = useRecommendedProducts(6);

  const inventory = [
    { id: 1, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500", price: "320$", oldPrice: "400$" },
    { id: 2, img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500", price: "280$", oldPrice: "350$" },
    { id: 3, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500", price: "400$", oldPrice: "540$" },
    { id: 4, img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500", price: "450$", oldPrice: "600$" },
    { id: 5, img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500", price: "190$", oldPrice: "250$" },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Starting with the middle item



  const handleNext = () => setActiveIndex((prev) => (prev + 1) % inventory.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + inventory.length) % inventory.length);

  // Calculation for sliding:
  // Each 'side' card is 180px + 20px gap.
  // We move the strip by the index to keep the current one at center.
  const slideOffset = -activeIndex * (180 + 20);

  return (
    <main className="content">
      <div className="home">
        <div className="hero-container">
          <main className="hero-content">
            <span className="badge">New spring collection 2023</span>
            <h1 className="hero-title">
              Where style speaks, trends resonate, <br/>
              <span>fashion flourishes</span>
            </h1>
            <p className="hero-subtitle">
              Unveiling a fashion destination where trends blend seamlessly with your individual style aspirations.
            </p>
            <button className="cta-btn">
              New collection
              <span className="arrow-circle"><ArrowRight size={16}/></span>
            </button>
          </main>

          <div className="gallery-viewport">
            <div
                className="gallery-strip"
                style={{transform: `translateX(calc(50% - 160px + ${slideOffset}px))`}}
            >
              {inventory.map((item, index) => (
                  <div
                      key={item.id}
                      className={`arch-card ${index === activeIndex ? 'active' : 'side'}`}
                      onClick={() => setActiveIndex(index)}
                  >
                    <img src={item.img} alt="fashion"/>
                    {index === activeIndex && (
                        <div className="price-tag">
                          <div className="mini-thumb"><img src={item.img} alt="mini"/></div>
                          <p className="price-label">PRICE FOR ALL</p>
                          <p className="price-val">{item.price} <span className="price-old">{item.oldPrice}</span></p>
                        </div>
                    )}
                  </div>
              ))}
            </div>

            {/* Floating Controls */}
            <div className="controls-overlay">
              <button className="slider-arrow" onClick={handlePrev}><ChevronLeft/></button>
              <button className="slider-arrow" onClick={handleNext}><ChevronRight/></button>
            </div>
          </div>
        </div>


        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>See</strong>
              &nbsp;everything with&nbsp;
              <strong>Clarity</strong>
            </h1>
            <p>
              Buying eyewear should leave you happy and good-looking, with money in your pocket.
              Glasses, sunglasses, and contacts—we’ve got your eyes covered.
            </p>
            <br/>
            <Link to={SHOP} className="button">
              Shop Now &nbsp;
              <ArrowRightOutlined/>
            </Link>
          </div>
          <div className="banner-img"><img src={bannerImg} alt=""/></div>
        </div>

        <div className="display">
          <div className="display-header">
            <h1>Featured Products</h1>
            <Link to={FEATURED_PRODUCTS}>See All</Link>
          </div>
          {(errorFeatured && !isLoadingFeatured) ? (
              <MessageDisplay
                  message={errorFeatured}
                  action={fetchFeaturedProducts}
                  buttonLabel="Try Again"
              />
          ) : (
              <ProductShowcaseGrid
                  products={featuredProducts}
                  skeletonCount={6}
              />
          )}
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Recommended Products</h1>
            <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
          </div>
          {(errorRecommended && !isLoadingRecommended) ? (
              <MessageDisplay
                  message={errorRecommended}
                  action={fetchRecommendedProducts}
                  buttonLabel="Try Again"
              />
          ) : (
              <ProductShowcaseGrid
                  products={recommendedProducts}
                  skeletonCount={6}
              />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
