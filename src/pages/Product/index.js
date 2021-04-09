import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import styles from "./index.module.scss";
import { Form } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const params = useParams();
  const productData = useSelector((state) => state);
  const product = productData.items[params.id.split("&")[1]];

  useEffect(() => {
    window.scroll(0, 0);
  }, [params]);

  return (
    <>
      <section className={styles.title_section}>
        <div className="container">
          <h1>{product.title}</h1>
        </div>
      </section>
      <section className={styles.product_section}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={styles.product_wrapper}>
                <div
                  className={styles.product}
                  style={{
                    backgroundImage: `url(${product.img})`,
                  }}
                >
                  <div className={styles.product_badge}>SALE</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.product_details}>
                <h2>{product.title}</h2>
                <div className={styles.product_price_wrapper}>
                  <p>
                    $ {product.price} USD <span>$ {product.discount} USD </span>
                  </p>
                </div>
                <div className={styles.product_add_wrapper}>
                  <div className={styles.product_quantity_wrapper}>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </div>
                  <div className={`btn ${styles.addButton}`}>Add to cart</div>
                </div>
              </div>

              <div className={`my-5 ${styles.placeholder_desc}`}>
                <h2> What’s a Rich Text element?</h2>
                <p>
                  The rich text element allows you to create and format
                  headings, paragraphs, blockquotes, images, and video all in
                  one place instead of having to add and format them
                  individually. Just double-click and easily create content.
                </p>
                <h4>Static and dynamic content editing</h4>
                <p>
                  A rich text element can be used with static or dynamic
                  content. For static content, just drop it into any page and
                  begin editing. For dynamic content, add a rich text field to
                  any collection and then connect a rich text element to that
                  field in the settings panel. Voila!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
