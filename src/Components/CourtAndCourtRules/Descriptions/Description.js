import React from 'react';
import './Description.css';
import "bootstrap/dist/css/bootstrap.min.css";
import image from '../../images/CourtStructure/Hierarchical-structure-of-the-ordinary-courts.jpg'

const Description = () => {
    return (
      <div>
        {/* ------------------ 
                Discription 
            ------------------ */}
        <div>
          <div id='jurisdictionOfCourt'>
            <h2 className='text-center pt-5 mt-5'>Jurisdiction of Court</h2>
            <div className='jms-text-justify pe-2'>
              <p>
                Every court of Bangladesh possesses jurisdiction over matters
                only to the extent granted to it by the Constitution of
                Bangladesh or legislation of this country. The Superior Court of
                Justice in Bangladesh is named as Supreme Court of Bangladesh
                followed by a hierarchy of civil and criminal court at the
                district level. Jurisdiction of all courts of Bangladesh is
                discussed below.
              </p>

              <p className='fw-bold'>Supreme Court of Bangladesh</p>

              <p>
                In exercise of powers conferred under Article 94 of the
                constitution the Apex Court of the country was established which
                consists of:
              </p>

              <p className='fw-bold'>
                Jurisdiction of the Appellate Division -
              </p>

              <p>
                According to article 103 of the Constitution of Bangladesh
                jurisdiction of Appellate division are as follows-
              </p>

              <p>
                {" "}
                The Appellate Division have jurisdiction to hear and determine
                appeals from judgments, decrees, orders or sentences of the High
                Court Division.
              </p>

              <p>
                {" "}
                An appeal to the Appellate Division from a judgment, decree,
                order or sentence of the High Court Division shall lie as of
                right where the High Court Division-
              </p>

              <p>
                {" "}
                An Appeal from the judgments, decrees, orders or sentences of
                the High Court Division in a case to which clause (2) does not
                apply shall lie only if the Appellate Division grants leave to
                appeal. Parliament may by law declare that the provisions of
                this article shall apply in relation to any other court or
                tribunal as they apply in relation to the High Court Division.
              </p>

              <p className='fw-bold'>
                The Jurisdiction of the High Court Division
              </p>

              <p>
                The High Court Division has original, appellate and other
                jurisdictions, powers and functions as are conferred by the
                Constitution and other laws-
              </p>

              <p className='fw-bold'>Subordinate Court:</p>

              <p className='fw-bold'> Civil Court:</p>

              <p className='fw-bold'>Jurisdiction of Civil Court-</p>

              <p className='fw-bold'>
                1. District Judge Court- Revisional jurisdiction , appeal of
                civil matters valuation of which is upto five crore taka,
                Probate matters etc.
              </p>

              <p>
                {" "}
                2. Additional District Judge Court- Try cases transferred to
                this Court by District Judge.
              </p>

              <p>
                3.(Joint District Judge Court- i) Original Jurisdiction- hearing
                of civil suit of which valuation is from twenty five lac taka to
                unlimited,
              </p>

              <p>(ii)Try succession matter,</p>

              <p>
                (ii) Revision- which case is transferred to this Court by
                District Judge,
              </p>

              <p>
                (iii)Appeal &ndash;which case is transferred to this Court by
                District judge.
              </p>

              <p>
                4. Senior Assistant Judge Court- try suits of civil nature of
                which valuation is fifteen lac to twenty five lac taka.
              </p>

              <p>
                5. Assistant Judge Court- to try civil suits of which pecuniary
                jurisdiction is below fifteen lac taka.
              </p>

              <p>
                6. Small Causes Court&ndash; A Small Causes Court shall have
                jurisdiction to dispose of suits of a civil nature of which the
                value does not exceed twenty five thousand taka.
              </p>

              <p>
                7. Family Courts &ndash;This court try suits which are of family
                matters i.e.- dissolution of marriage, dower, custody and
                guardianship of children, restitution of conjugal rights and
                maintenance relating to matters.
              </p>

              <p>Criminal Court:</p>

              <p>
                (i) Court of Sessions: There shall be in every division the
                following Sessions Court-
              </p>

              <p></p>

              <p> (a) Sessions Judge</p>

              <p> (b) Additional Sessions Judge</p>

              <p> (c) Assistant Sessions Judge</p>

              <p>
                For metropolitan area- In every metropolitan area there shall be
                the following Sessions Court-
              </p>

              <p> (a) Metropolitan Sessions Judge</p>

              <p>(b)Additional Metropolitan Sessions Judge</p>

              <p>( c) Joint Metropolitan Sessions Judge</p>

              <p>(ii) Magistrate Court:</p>

              <p>
                For Metropolitan Area- Hierarchy of Magistrate Court for
                Metropolitan area are discussed below-
              </p>

              <p>All over the country other than Metropolitan Areas-</p>

              <p>(a) Chief Judicial Magistrate,</p>

              <p>(b) Additional Chief Judicial Magistrate,</p>

              <p>(c) Magistrate of the first Class,</p>

              <p>(d) Magistrate of the Second Class,</p>

              <p>(e) Magistrate of the Third Class.</p>

              <p>Jurisdiction of Criminal Court:</p>

              <p>Tribunals and Special Court-</p>

              <p>The International Crimes Tribunal-</p>

              <p>
                This Tribunal was constituted for the purpose of trial of
                offences such as-
              </p>

              <p>(a) Crime against Humanity,</p>

              <p>(b) Crime against peace,</p>

              <p>(c) Genocide,</p>

              <p>(d) war crime,</p>

              <p>
                (e) Violation of any humanitarian rules applicable in armed
                conflicts laid down in the Geneva conventions, 1949,
              </p>

              <p>(f) Any other crime under the International Law.</p>
            </div>
          </div>
          <div className='pt-4'>
            <h2 className='text-center py-5 mt-5' id='courtHieararchy'>
              Hieararchy of Courts
            </h2>
            <div className='row mx-0'>
              <div className='col-sm-12 col-lg-6 mx-auto mb-3'>
                <img src={image} class='card-img-top' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Description;