import React from 'react';
import Guidlines from './Guidlines';
import { Accordion } from "react-bootstrap";

const RightsInPoliceStation = () => {
//     const title = "Rights In Police Station";
//     const discription = `
//     when to do gd
// On going to the police station, the duty officer on duty has to report the above incident in oral or written form and the duty officer will record the incident in the general diary.
// method of gd
// If one of the above mentioned factors occurs in your life, then you will take three copies of the written application for gd to the police station and ask the duty officer on duty to make a gd entry. Each god has an entry number and date. The duty officer will submit a copy to the police station, write the gd entry number and date in a copy and return it to the applicant with the seal of the police station. The other copy will be kept for the investigating officer.
// what's in gd
// a gd or general diary is a moving picture of a police station area. in the general diary kept at the police station, the names of the complainants, the names of the arrested persons, the details of the recovered weapons, the details of the seized goods, the information of the accused being challaned in the court, the price and production of foodgrains in the area, the transportation system, the environment, the news of the epidemic, the political situation, the arrival and departure of senior officers at the police station, etc.
// police action on the basis of general public's gd
// references: your right to the police station, advocate azizur rahman, osdar publications. 2011.
                                                                                    
// ezhar at the police station
// What is ezhar?
// ezhar is the information given to the police station about a cognizable offense.
// how to file an azhar
// If someone commits a crime against you or someone you know, what you have seen and heard should be properly and genuinely written and presented to the duty officer on duty at the police station.
// you can verbally inform the duty officer on duty at the police station about your complaint. On the basis of your oral complaint, the duty officer should write the complaint in as much of your expressive language as possible.
// obligations and procedures for taking a case to the police station
// In the case of every offense that is cognizable, the first information provided before the police must be recorded whether it is primarily true or false, serious or minor. [police regulation 244(a)]
// obligation to provide copy of the case
// Many times, it is seen that if the general public goes to the police station to know whether a case has been filed in the police station, they go to the police station and ask for a copy of the case. According to the law, a copy of the case recorded in the registrar kept in the police station is entitled to any person by systematically paying the legal fee.
// references: your right to the police station, advocate azizur rahman, osdar publications. 2011.
//     `;

    return (
      <div className='mt-5 pt-5'>
        <h2 className='text-white text-center mt-5'>
          Rights In Police Station
        </h2>
        {/* <Guidlines title={title} discription={discription}></Guidlines> */}
        <div className='container mt-2'>
          <Accordion defaultActiveKey='0' flush className='my-5'>
            <Accordion.Item
              eventKey='0'
              className='border border-white bg-transparent'
            >
              <Accordion.Header>
                <strong>When to file a 'General Diary'(GD)?</strong>
              </Accordion.Header>
              <Accordion.Body className='overflow-auto text-white'>
                <p>
                  After going to the police station, the duty officer on duty has
                  to report the above incident in oral or written form and the
                  duty officer will record the incident in the general diary.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey='1'
              className='border border-white bg-transparent'
            >
              <Accordion.Header>
                <strong>Procedure to file a GD?</strong>
              </Accordion.Header>
              <Accordion.Body className='overflow-auto text-white'>
                <p>
                  Whoever wishes to lodge a GD should come up with three sets of
                  applications and asked the duty officer of police station to
                  lodge a GD. Each GD contains an entry number and date. Duty
                  officer keeps a copy in police station, and delivers a copy to
                  the petitioner with sign and seal of police station and will
                  keep another copy for investigating officer.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey='2'
              className='border border-white bg-transparent'
            >
              <Accordion.Header>
                <strong>What GD Contains?</strong>
              </Accordion.Header>
              <Accordion.Body className='overflow-auto text-white'>
                <p>
                  GD is a clear picture of a police station. In the general
                  diary of police station it consists the name of the
                  petitioner, address, name of arrested person, the description
                  of recovered arms, goods, information of accused forwarded to
                  the court, the price of food and its production,
                  communication, environment, natural disaster, political
                  situation and information as to incoming and outgoing superior
                  officer in the police station.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey='3'
              className='border border-white bg-transparent'
            >
              <Accordion.Header>
                <strong>
                  police action on the basis of general public's GD?
                </strong>
              </Accordion.Header>
              <Accordion.Body className='overflow-auto text-white'>
                <p>
                  references: your right to the police station, advocate azizur
                  rahman, osdar publications. 2011.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <h2 className='text-white text-center py-4'>
              Ezhar at the police station
            </h2>

            <Accordion.Item
              eventKey='4'
              className='border border-white bg-transparent'
            >
              <Accordion.Header>
                <strong>What is ezhar?</strong>
              </Accordion.Header>
              <Accordion.Body className='overflow-auto text-white'>
                <p>
                  Ezhar is the information given to the police station about a
                  cognizable offense.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey='5'
              className='border border-white bg-transparent'
            >
              <Accordion.Header>
                <strong>How to file an ezhar?</strong>
              </Accordion.Header>
              <Accordion.Body className='overflow-auto text-white'>
                <p>
                  If someone commits a crime against you or someone you know,
                  what you have seen and heard should be properly and genuinely
                  written and presented to the duty officer on duty at the
                  police station.
                </p>
                <p>
                  you can verbally inform the duty officer on duty at the police
                  station about your complaint. On the basis of your oral
                  complaint, the duty officer should write the complaint in as
                  much of your expressive language as possible.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey='6'
              className='border border-white bg-transparent'
            >
              <Accordion.Header>
                <strong>
                  Obligations and procedures for taking a case to the police
                  station
                </strong>
              </Accordion.Header>
              <Accordion.Body className='overflow-auto text-white'>
                <p>
                  In the case of every offense that is cognizable, the first
                  information provided before the police must be recorded
                  whether it is primarily true or false, serious or minor.
                  [police regulation 244(a)]
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey='7'
              className='border border-white bg-transparent'
            >
              <Accordion.Header>
                <strong>Obligation to provide copy of the case?</strong>
              </Accordion.Header>
              <Accordion.Body className='overflow-auto text-white'>
                <p>
                  Many times, it is seen that if the general public goes to the
                  police station to know whether a case has been filed in the
                  police station, they go to the police station and ask for a
                  copy of the case. According to the law, a copy of the case
                  recorded in the registrar kept in the police station is
                  entitled to any person by systematically paying the legal fee.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <h5 className='text-white text-center py-3'>
          <string>
            References: Your right to the police station, advocate azizur
            rahman, osdar publications. 2011.
          </string>
        </h5>
      </div>
    );
};

export default RightsInPoliceStation;