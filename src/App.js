import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/HomePage/Home";
import NavigationBar from "./Components/Navigation/NavigationBar";
import Footer from "./Components/Footer/Footer";
import Laws from "./Components/laws/Laws";
import CourtAndCourtRule from "./Components/CourtAndCourtRules/CourtAndCourtRule/CourtAndCourtRule";
import Judges from "./Components/Informations/Judges/Judges";
import Advocates from "./Components/Informations/Advocates/Advocates";
import ReportsAndNews from "./Components/Informations/ReportsAndNews/ReportsAndNews/ReportsAndNews";
import Notice from "./Components/NoticeBoard/Notice";
import RightsInPoliceStation from "./Components/Guidlines/RightsInPoliceStation";
import AppealProcedure from "./Components/Guidlines/AppealProcedure";
import TrialProcedure from "./Components/Guidlines/TrialProcedure";
import ProcessOfLawSuit from "./Components/Guidlines/ProcessOfLawSuit";
import CourtFee from "./Components/Guidlines/CourtFee";
import SuitValidation from "./Components/Guidlines/SuitValidation";
import NoticeItems from "./Components/NoticeBoard/NoticeItems";
import NoticeView from "./Components/NoticeBoard/NoticeView";
import Description from "./Components/CourtAndCourtRules/Descriptions/Description";
import DetailedNotice from "./Components/NoticeBoard/DetailedNotice";
import CivilCase from "./Components/Cases/CivilCase";
import CriminalCase from "./Components/Cases/CriminalCase";
import ShowReportsAndNews from "./Components/Informations/ReportsAndNews/ShowReportsAndNews/ShowReportsAndNews";

function App() {
  return (
    <div className='darkShade'>
      <Router>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route exect path='/' element={<Home />} />
          <Route path='/courtAndCourtRules' element={<CourtAndCourtRule />} />
          <Route path='/laws' element={<Laws />} />
          <Route path='/civilCases' element={<CivilCase />} />
          <Route path='/criminalCases' element={<CriminalCase />} />
          <Route path='/judges' element={<Judges />} />
          <Route path='/advocates' element={<Advocates />} />
          <Route path='/reportsAndNews' element={<ReportsAndNews />} />
          <Route path='/noticeBoard' element={<Notice />} />
          <Route
            path='/rightsInPoliceStation'
            element={<RightsInPoliceStation />}
          />
          <Route path='/appealProcedure' element={<AppealProcedure />} />
          <Route path='/trialProcedure' element={<TrialProcedure />} />
          <Route path='/processOfLawsuit' element={<ProcessOfLawSuit />} />
          <Route path='/courtFee' element={<CourtFee />} />
          <Route path='/suitValidation' element={<SuitValidation />} />
          <Route path='/noticeBoard/noticeItems' element={<NoticeItems />} />
          <Route path='/noticeBoard/noticeView' element={<NoticeView />} />
          <Route path='/discription' element={<Description />} />
          <Route
            path='/detailedNotice/:noticeId'
            element={<DetailedNotice />}
          />
          <Route
            path='/newsInDetails/:newsId'
            element={<ShowReportsAndNews />}
          />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
