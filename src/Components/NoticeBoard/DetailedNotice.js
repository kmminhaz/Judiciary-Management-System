import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailedNotice = () => {
    const [noticeItem, setNotice] = useState([]);
    const { noticeId } = useParams();

    useEffect(() => {
        fetch(
          `http://localhost/projects/Defence/judiciary-system-management/src/API/oneNoticeItem.php?noticeId=${noticeId}`
        )
          .then((res) => res.json())
          .then((data) => setNotice(data));
    }, []);

    return (
      <div className='mt-5 pt-5 bg-white'>
        <div className='mx-5 py-5 w-50 mx-auto'>
          <h6>
            {" "}
            <span className='fw-bold'> {noticeItem.date} </span>{" "}
          </h6>
          <h4 className='my-2'>
            {" "}
            Title: <span className='fw-bold'> {noticeItem.title} </span>{" "}
          </h4>
          <h5 className='mt-4'>
            {" "}
            Details, <br /> <a href={`${noticeItem.details}`} className='fs-6'>
              {" "}
              View Details From this link
              {" "}
            </a>{" "}
          </h5>
        </div>
      </div>
    );
};

export default DetailedNotice;