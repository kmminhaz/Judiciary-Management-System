import React, { useEffect, useState } from "react";
import "./NoticeAndSite.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const NoticeAndSite = () => {
  const [noticeBordDatas, setNoticeBordDatas] = useState([]);
  const [necesseryLinks, setNecesseryLinks] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost/projects/Defence/judiciary-system-management/src/API/noticeItems.php"
    )
      .then((res) => res.json())
      .then((data) => setNoticeBordDatas(data));
  }, []);

  const showNoticeItems = noticeBordDatas.slice(0, 5);

  useEffect(() => {
    fetch(
      "http://localhost/projects/Defence/judiciary-system-management/src/API/necesseryLinks.php"
    )
      .then((resLinks) => resLinks.json())
      .then((result) => setNecesseryLinks(result));
  }, []);

  return (
    <div className='container overflow-hidden pb-5'>
      <div className='row g-5'>
        <div className='col-lg-6 col-md-6'>
          <div className='p-3 border'>
            <h4 className='py-3 text-white'>Notice Board</h4>
            {showNoticeItems.map((noticeData) => (
              <div className='px-3 py-2'>
                <Link
                  to={`/detailedNotice/${noticeData.id}`}
                  align='end'
                  className='text-primary text-decoration-none my-4 fw-bold'
                >
                  {noticeData.title}
                </Link>
              </div>
            ))}
            <div className='d-flex justify-content-end'>
              <Button
                href='/noticeBoard'
                variant='outline-light'
                className='fw-bold'
              >
                View All
              </Button>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6'>
          <div className='p-3 border'>
            <h4 className='py-3 text-white'>Necessery Links</h4>
            {necesseryLinks.map((links) => (
              <div className='px-3 py-2'>
                <a
                  href={links.link}
                  align='end'
                  className='text-primary text-decoration-none my-4'
                >
                  {links.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeAndSite;
