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

  return (
    <main className="content">
      <div className="home">
        <section className="hero">
          <div className="head-line">New Sparking collection 2026</div>
          <h1 className="h1">Where style speaks, trends resonate,<br/> fashion flourishes</h1>
          <p className="subtitle">
            Unveiling a fashion destination where trends blend seamlessly with your individual style aspirations.
            Discover today!
          </p>
          <button className="cta-btn">
            New collection
            <span className="arrow">→</span>
          </button>
        </section>

        {/* --- ARCH GALLERY --- */}
        <section className="gallery">
          <button className="nav-arrow left">←</button>

          <div className="arch-item"><img
              src="https://images.unsplash.com/photo-1539109132314-3475d24c2114?auto=format&fit=crop&w=400&q=80"
              alt="fashion"/></div>
          <div className="arch-item"><img
              src="https://images.unsplash.com/photo-1488161628813-244a2dcba2aa?auto=format&fit=crop&w=400&q=80"
              alt="fashion"/></div>

          {/* Featured Arch with Price Tag */}
          <div className="arch-item featured">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80"
                 alt="fashion"/>
            <div className="price-tag">
              <div className="mini-thumb"></div>
              <p>Price for all</p>
              <span>400$ <small>/ 540$</small></span>
            </div>
          </div>

          <div className="arch-item"><img
              src="https://images.unsplash.com/photo-1529139572175-d26447c6ec90?auto=format&fit=crop&w=400&q=80"
              alt="fashion"/></div>
          <div className="arch-item"><img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80"
              alt="fashion"/></div>

          <button className="nav-arrow right">→</button>
        </section>
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
