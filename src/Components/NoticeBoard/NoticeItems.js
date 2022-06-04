import React from 'react';
import './Notice.css';
import "bootstrap/dist/css/bootstrap.min.css";

// import image1 from "../images/major-sinha-case.jpg";

const NoticeItems = () => {
    return (
      <div className='container mt-5 py-5 px-4 bg-white text-dark'>
        <article className='my-4' id='noticeItemOne'>
          <h3 className='fw-bold py-2'>Verdict in Major Sinha murder case.</h3>
          <img
            className='img-fluid'
            // src={image1}
            alt=''
            width='500'
            height='300px'
          />
          <div className='py-4'>
            Sinha was shot dead at an Armed Police Battalion (APBn) checkpoint
            on Cox's Bazar's Marine Drive on Jul 31, 2020. The 36-year old was a
            member of the Special Security Force tasked with guarding the prime
            minister. He had gone into early retirement to pursue his personal
            interests. He was filming a travel documentary in Cox's Bazar along
            with three others. After Sinha's death, his sister Sharmin Shahria
            Ferdous started a case against nine policemen, including Pradip and
            Liakat. Later, formal charges were pressed against 15 people,
            including 12 policemen, by the case's investigation officer Md
            Khairul Islam. An investigation into the incident also revealed how
            Pradip, the then chief of Teknaf police, would stage gunfights and
            terrorise people for money under the guise of a war on drugs. In the
            case dossier, Senior Assistant Police Superintendent Khairul Islam
            gave a vivid description of what had happened on Jul 31, 2020, at
            the APBn checkpoint on the Cox’s Bazar-Teknaf Marine Drive.
            According to the case documents, Sinha and his companions learned
            had learned about Pradip's misdeeds. They even interviewed some
            people tortured by Pradip.
          </div>
        </article>
        <hr />
      </div>
    );
};

export default NoticeItems;