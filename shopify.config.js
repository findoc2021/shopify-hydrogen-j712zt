export default {
  storeDomain: 'iren-fashion-shop.myshopify.com',
  storefrontToken: '88dc4e4d82855b35d29d4e17d8051da9',
  storefrontApiVersion: '2022-04',
};

import {useNavigate} from '@shopify/hydrogen/client';

function addToCart() {}

export default function ClientComponent() {
  const navigate = useNavigate();
  async function clickAddToCart() {
    await addToCart();
    navigate('/success', {replace: true});
  }
  return <Button onClick={clickAddToCart}>Add to Cart</Button>;
}
