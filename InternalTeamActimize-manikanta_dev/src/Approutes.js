import React, { useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component
import 'react-toastify/dist/ReactToastify.css';
import Portalsmain from './components/Portalsmain';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Skills from './pages/Skills';
import Leaves from './pages/Leaves';
import MyProjects from './pages/MyProjects';
import HoursEntry from './pages/HoursEntry';
import BankDetails from './pages/BankDetails';
import UserProfile from './pages/UserProfile';
import DailyStatus from './pages/DailyStatus';
import FamilyDetails from './pages/FamilyDetails';
import WorkExperience from './pages/WorkExperience';
import PersonalDetails from './pages/PersonalDetails';
import EmergencyDetails from './pages/EmergencyDetails';
import Hrportal from './components/Hrportal';
import ExpertCreation from './pages/ExpertCreation';
import ExpertPage from './pages/ExpertPage';
import LeaveBank from './pages/LeaveBank';
import LeaveRequests from './pages/LeaveRequests';
import ExpertWeeklyStatus from './pages/ExpertWeeklyStatus';
import ExpertMothlyStatus from './pages/ExpertMothlyStatus';
import ExpertAttendenceList from './pages/ExpertAttendenceList';
import ExpertMonthlyAttendenceList from './pages/ExpertMonthlyAttendenceList';
import ExpertCertificateVarification from './pages/ExpertCertificateVarification';
import ExpertReleavingData from './pages/ExpertReleavingData';
import ExpertPerformanceAppraisals from './pages/ExpertPerformanceAppraisals';
import ExpertDmerits from './pages/ExpertDmerits';
import ProficiencyMangement from './pages/ProficiencyMangement';
import ProjectsMangement from './pages/ProjectsMangement';
import HolidaysMangement from './pages/HolidaysMangement';
import PayslipMangement from './pages/PayslipMangement';
import BirthdaysMangement from './pages/BirthdaysMangement';
import EventsMangement from './pages/EventsMangement';
import Gadgetsmangement from './pages/Gadgetsmangement';
import Requestsmangement from './pages/Requestsmangement';
import ExpertWiseEmergency from './pages/ExpertWiseEmergency';
import ExpertWisetFamily from './pages/ExpertWisetFamily';
import ExpertWiseSkills from './pages/ExpertWiseSkills';
import ExpertWiseExperience from './pages/ExpertWiseExperience';
import ExpertWisebankDetails from './pages/ExpertWisebankDetails';
import ExpertWiseProjects from './pages/ExpertWiseProjects';
import ExpertWiseLeaveBank from './pages/ExpertWiseLeaveBank';

// Import other components and pages...

const ScrollToTop = () => {
  const pathname = useLocation();
  const prevPathname = useRef();
  const roles = JSON.parse(localStorage.getItem('data'));
  console.log("private", roles);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      window.scrollTo(0, 0);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
};

const Approutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Portalsmain />} />

      {/* Employee Routes */}
    
      <Route path="/emp" element={<PrivateRoute element={Navbar} allowedRoles={['Employee']} />} >
        <Route path="/emp/profiles/personaldetails" element={<PrivateRoute element={PersonalDetails} allowedRoles={['Employee']} />} />
        <Route path="/emp/profiles/familydetails" element={<PrivateRoute element={FamilyDetails} allowedRoles={['Employee']} />} />
        <Route path="/emp/profiles/emergencydetails" element={<PrivateRoute element={EmergencyDetails} allowedRoles={['Employee']} />} />
        <Route path="/emp/profiles/userprofile" element={<PrivateRoute element={UserProfile} allowedRoles={['Employee']} />} />
        <Route path="/emp/workandskills/workexperience" element={<PrivateRoute element={WorkExperience} allowedRoles={['Employee']} />} />
        <Route path="/emp/workandskills/skills" element={<PrivateRoute element={Skills} allowedRoles={['Employee']} />} />
        <Route path="/emp/tasks/dailystatus" element={<PrivateRoute element={DailyStatus} allowedRoles={['Employee']} />} />
        <Route path="/emp/tasks/hoursentry" element={<PrivateRoute element={HoursEntry} allowedRoles={['Employee']} />} />
        <Route path="/emp/myprojects" element={<PrivateRoute element={MyProjects} allowedRoles={['Employee']} />} />
        <Route path="/emp/bankdetails" element={<PrivateRoute element={BankDetails} allowedRoles={['Employee']} />} />
        <Route path="/emp/leaves" element={<PrivateRoute element={Leaves} allowedRoles={['Employee']} />} />
      </Route>

      {/* Management Routes */}
      <Route path="/hr" element={<PrivateRoute element={Hrportal} allowedRoles={['Management']} />} >
        <Route path="/hr/experts/expertscreation" element={<PrivateRoute element={ExpertCreation} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/expertpage" element={<PrivateRoute element={ExpertPage} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/leaves/leavebank" element={<PrivateRoute element={LeaveBank} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/leaves/leaverequests" element={<PrivateRoute element={LeaveRequests} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/expertstatus/weeklystatus" element={<PrivateRoute element={ExpertWeeklyStatus} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/expertstatus/mothlystatus" element={<PrivateRoute element={ExpertMothlyStatus} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/attendence/attendencelist" element={<PrivateRoute element={ExpertAttendenceList} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/attendence/monthlyattendencelist" element={<PrivateRoute element={ExpertMonthlyAttendenceList} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/certificate_verification" element={<PrivateRoute element={ExpertCertificateVarification} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/expert-releavingdata" element={<PrivateRoute element={ExpertReleavingData} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/performance_appraisals" element={<PrivateRoute element={ExpertPerformanceAppraisals} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/dmerits" element={<PrivateRoute element={ExpertDmerits} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/expertpage/personaldetails/:id" element={<PrivateRoute element={Requestsmangement} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/expertpage/emergencydetails/:id" element={<PrivateRoute element={ExpertWiseEmergency} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/expertpage/familydetails/:id" element={<PrivateRoute element={ExpertWisetFamily} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/expertpage/skills/:id" element={<PrivateRoute element={ExpertWiseSkills} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/expertpage/workexperience/:id" element={<PrivateRoute element={ExpertWiseExperience} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/expertpage/bankdetails/:user_id" element={<PrivateRoute element={ExpertWisebankDetails} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/expertpage/projects/:id" element={<PrivateRoute element={ExpertWiseProjects} allowedRoles={['Management']} />} />
        <Route path="/hr/experts/expertpage/leavebank/:id" element={<PrivateRoute element={ExpertWiseLeaveBank} allowedRoles={['Management']} />} />
        <Route path="/hr/proficiency" element={<PrivateRoute element={ProficiencyMangement} allowedRoles={['Management']} />} />
      <Route path="/hr/projects" element={<PrivateRoute element={ProjectsMangement} allowedRoles={['Management']} />} />
      <Route path="/hr/holidays" element={<PrivateRoute element={HolidaysMangement} allowedRoles={['Management']} />} />
      <Route path="/hr/payslip" element={<PrivateRoute element={PayslipMangement} allowedRoles={['Management']} />} />
      <Route path="/hr/birthdays" element={<PrivateRoute element={BirthdaysMangement} allowedRoles={['Management']} />} />
      <Route path="/hr/schedules-events" element={<PrivateRoute element={EventsMangement} allowedRoles={['Management']} />} />
      <Route path="/hr/gadgets" element={<PrivateRoute element={Gadgetsmangement} allowedRoles={['Management']} />} />
      </Route>

    
    </Routes>
    <ScrollToTop />
  </>
);

export default Approutes;
