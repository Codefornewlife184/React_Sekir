/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import data from "../../../data/winsa.json";
import { Link } from "react-router-dom";
import SidebarCardOne from "../sidebar/SidebarCard0ne";
import SidebarCategory from "./WinsaSidebarCategory";
import PageTitle from "../../common/PageTitle";
import { Helmet } from "react-helmet";

function Winsa() {
  const pageDescription = "PVC Pencere ve Kapı Sistemleri";
  const pageKeywords = "PVC Pencere ve Kapı Sistemleri";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://sekiryapi.com.tr/#/pvc-pencere-kapi-sistemleri";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  return (
    <>
      <Helmet>
        <title>{t("PVC Pencere ve Kapı Sistemleri")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <SRLWrapper>
        <section className="blog-one mt-5">
          <div className="container">
            <div className="blog-page">
              <Container data-aos="fade-up">
                <div className="row">
                  <PageTitle
                    company="ŞEKİR YAPI"
                    title={t("PVC Pencere ve Kapı Sistemleri")}
                  />
                </div>

                <Row>
                  <SidebarCategory
                    title1={t("Pencere ve Kapı Sistemleri")}
                    nav1={"/pvc-pencere-kapi-sistemleri"}
                    title2={t("Sürme Sistemleri")}
                    nav2={"/surme-sistemleri"}
                    title3={t("Panjur ve Kepenk Sistemleri")}
                    nav3={"/panjur-kepenk-sistemleri"}
                  />
                  {data.map((winsa) => {
                    const { picture, id, nav, price } = winsa;
                    const title = t(winsa.title);

                    return (
                      <Col md={3} key={id} className="text-center mb-4">
                        <SidebarCardOne
                          picture={picture}
                          title={title}
                          price={price}
                          nav={nav}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
}

export default Winsa;
