import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ShowReportsAndNews = () => {
    const [newsItem, setNews] = useState([]);
    const { newsId } = useParams();

    useEffect(() => {
      fetch(
        `http://localhost/projects/Defence/judiciary-system-management/src/API/oneReportNews.php?newsId=${newsId}`
      )
        .then((res) => res.json())
        .then((data) => setNews(data));
    }, []);

    const {title, image, description} = newsItem;
    // console.log(`images/newsReports/${newsItem.image}`, newsItem.title, newsItem.description);
    return (
      <div className='mt-5 pt-5'>
        <Container className='bg-white'>
          <div
            key={newsItem.id}
            className='mx-5 py-5 grid col-lg-6 col-sm-12 mx-auto'
          >
            {/* <h6>
            {" "}
            <span className='fw-bold'> {newsItem.date} </span>{" "}
          </h6> */}
            <h4 className='my-4'>
              {" "}
              <span className='fw-bold'> {title} </span>{" "}
            </h4>
            <img
              src={`/images/newsReports/${image}`}
              alt='...'
              height={"200px"}
              className='img-fluid'
            />
            <h5 className='my-4'>
              {" "}
              Details, <br /> <span className='fs-6'> {description} </span>{" "}
            </h5>
          </div>
        </Container>
      </div>
    );
};

export default ShowReportsAndNews;