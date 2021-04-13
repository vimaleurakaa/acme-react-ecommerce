import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import styles from "./index.module.scss";
import { useParams } from "react-router";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { commerce } from "../../data/services/commerce";
import { Card, Accordion } from "react-bootstrap";
import { addToCart } from "../../data/store/action";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState();
  const [productImage, setProductImage] = useState();
  const [imageActive, setImageActive] = useState();

  const handleAddQuantity = () => {
    console.log("clicked");
  };

  const handleRemoveQuantity = () => {
    console.log("clicked");
  };

  const handleProductImage = (imageUrl, imageId) => {
    setProductImage(imageUrl);
    setImageActive(imageId);
  };

  const handleAddToCart = (product_id) => {
    dispatch(addToCart(product_id));
  };

  useEffect(() => {
    window.scroll(0, 0);
    commerce.products.retrieve(params.id).then((product) => {
      setProduct(product);
      setProductImage(product.media.source);
      setImageActive(product.assets[0].id);
    });
  }, [params]);

  return (
    <>
      <section className={styles.title_section}>
        <div className="container">
          <h3>
            <b>{product?.name}</b>
          </h3>
        </div>
      </section>

      {product?.id === undefined ? (
        <div className="loader product_details_loader">Loading...</div>
      ) : (
        <section className={styles.product_section}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={styles.product_wrapper}>
                  <div
                    className={styles.product}
                    style={{
                      backgroundImage: `url(${productImage})`,
                    }}
                  >
                    <div className={styles.product_badge}>SALE</div>
                  </div>
                  <div className={styles.product_thumbnail}>
                    {product?.assets.slice(0, 4).map((image) => (
                      <div
                        className={styles.product_thumbnail_img}
                        key={image.id}
                        onClick={() => handleProductImage(image.url, image.id)}
                      >
                        <img
                          className={
                            imageActive === image.id
                              ? "product_thumbnail_active "
                              : ""
                          }
                          src={image.url}
                          alt="thumbnail"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.product_details}>
                  <h3>
                    <b>{product?.name}</b>
                  </h3>
                  <div className={styles.product_price_wrapper}>
                    <p>
                      $ {product?.price.raw} USD{" "}
                      <span>$ {product?.price.raw} USD </span>
                    </p>
                  </div>
                  <p>Quantity :</p>
                  <div className={styles.product_add_wrapper}>
                    <div className={styles.add_remove_wrapper}>
                      <div
                        className={styles.add_remove_btn}
                        onClick={handleAddQuantity}
                      >
                        <MdArrowDropDown />
                      </div>
                      <div className={styles.add_remove_counter}>1</div>
                      <div
                        className={styles.add_remove_btn}
                        onClick={handleRemoveQuantity}
                      >
                        <MdArrowDropUp />
                      </div>
                    </div>

                    <div
                      className={`btn ${styles.addButton}`}
                      onClick={() => handleAddToCart(product?.id)}
                    >
                      Add to cart
                    </div>
                  </div>
                </div>

                <div className={`my-5 ${styles.placeholder_desc}`}>
                  <h4> Description</h4>
                  <div
                    dangerouslySetInnerHTML={{ __html: product?.description }}
                  ></div>

                  <Accordion className="py-2">
                    <h4> FAQ : </h4>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        Is this a Demo Product?
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          Yes, this is a demo product, for project demonstration
                          only, all rights reserved to the respective owners.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="1">
                        Can I Clone this Project?
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          Sure, Checkout my{" "}
                          <a
                            href="https://github.com/vimaleurakaa/acme-react-ecommerce"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Git Hub
                          </a>{" "}
                          to get the complete source code of this project.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="2">
                        Do I need API to access the products?
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          Yes, you need to create an account in{" "}
                          <a
                            href="https://commercejs.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Commerce.js
                          </a>{" "}
                          and add categories and products manually. and insert
                          the API.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="3">
                        Do this project uses Redux?
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>Yes, this project uses Redux.</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default ProductDetail;
