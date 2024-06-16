import Hero from './Hero';
import ProductCategory from '../../shared/ProductCateogry';
import ProductShowcase from './ProductShowcase';

function Home() {
  return (
    <div>
      <Hero></Hero>
      <ProductCategory></ProductCategory>
      <ProductShowcase></ProductShowcase>
    </div>
  );
}

export default Home;
