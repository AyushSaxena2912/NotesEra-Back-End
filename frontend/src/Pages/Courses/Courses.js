import React, { useEffect, useState } from 'react';
import './Courses.css';
import axios from 'axios';
import Select from 'react-select';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
/* eslint-disable react-hooks/exhaustive-deps */
function Courses() {
  const[submitbuttonclicked,setSubjectbutton]=useState(false);
  const [isLoadingColleges, setIsLoadingColleges] = useState(true);
  const [colleges, setColleges] = useState([]);
  const [years, setYears] = useState([]);
  const [types, setTypes] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const BASE_URL='https://notesera-basic-backend-d3bk.onrender.com'
  const fetchColleges = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/data/all/colleges`
      );
      const collegeData = response.data.map((college) => ({
        value: college,
        label: college,
      }));
      setColleges(collegeData);
      setIsLoadingColleges(false); // Set loading to false when data is loaded
    } catch (error) {
      console.error('Error fetching colleges:', error);
    }
  };

  useEffect(() => {
    // Fetch college data from the API
    fetchColleges();
  }, []);


  const handleCollegeChange = (selectedOption) => {
    setSelectedCollege(selectedOption);

    // Fetch years for the selected college from the API
    axios.get(`${BASE_URL}/data/all/${selectedOption.value}/years`)
      .then(response => {
        const yearData = response.data.map(year => ({
          value: year,
          label: year,
        }));
        setYears(yearData);
      })
      .catch(error => {
        console.error('Error fetching years:', error);
      });
  };

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);

    // Fetch types for the selected college and year from the API
    axios.get(`${BASE_URL}/data/all/${selectedCollege.value}/${selectedOption.value}/types`)
      .then(response => {
        const typeData = response.data.map(type => ({
          value: type,
          label: type,
        }));
        setTypes(typeData);
      })
      .catch(error => {
        console.error('Error fetching types:', error);
      });
  };

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
  };

  const fetchSubjects = async () => {
    if (selectedCollege && selectedYear && selectedType) {
      const link = `${BASE_URL}/data/all/${selectedCollege.value}/${selectedYear.value}/${selectedType.value}/subjects`;
      setSubjectbutton(true);
      try {
        const response = await axios.get(link);
        const subjectsData = response.data;
        console.log(subjectsData);
        setSubjects(subjectsData);
        setSubjectbutton(false);
        console.log(subjectsData);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    }
  };

  // Function to open the link associated with a subject
  const openSubjectLink = async (subject) => {
    if (selectedCollege && selectedYear && selectedType && subject) {
      const link = `${BASE_URL}/data/all/${selectedCollege.value}/${selectedYear.value}/${selectedType.value}/${subject}/links`;
      try {
        const response = await axios.get(link);
        const links = response.data;
        // Check if there are links, and if so, open the first one in a new tab
        if (links.length > 0) {
          window.open(links[0].link, '_blank');
        }
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    }
  };


  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '8px', // Customize border radius
      borderColor: '#FFD32B', // Customize border color
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Customize box shadow
      '&:hover': {
        borderColor: '#e0cd04', // Customize hover border color
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#AF69EE' : 'white', // Customize selected option background color
      color: state.isSelected ? 'white' : 'black', // Customize selected option text color
      '&:hover': {
        backgroundColor: '#AF69EE', // Customize hover background color
        color: 'white', // Customize hover text color
      },
    }),
  };


  return (
    <div className='main-body'>
      <div className="container">
          <h1>Get Your Notes Here!</h1>
          <div id="dropdown-container">
            {isLoadingColleges&&<Skeleton height="40px"/>}
            {!isLoadingColleges&&
            <div className="dropdown">
              {/* <label>College:</label> */}
              <Select
                value={selectedCollege}
                onChange={handleCollegeChange}
                options={colleges}
                placeholder="Select College"
                styles={customSelectStyles}
              />
            </div>}
            {isLoadingColleges&&<Skeleton height="40px"/>}
            {!isLoadingColleges&&
            <div className="dropdown">
              {/* <label>Year:</label> */}
              <Select
                value={selectedYear}
                onChange={handleYearChange}
                options={years}
                placeholder="Select Year"
                styles={customSelectStyles}
              />
            </div>}
            {isLoadingColleges&&<Skeleton height="40px"/>}
            {!isLoadingColleges&&
  
            <div className="dropdown">
              {/* <label>Type:</label> */}
              <Select
                value={selectedType}
                onChange={handleTypeChange}
                options={types}
                placeholder="Select Type"
                styles={customSelectStyles}
              />
            </div>}
          </div>
  
          <div className="button-div">
            <button id="submitBtn" onClick={fetchSubjects}>Submit</button>
          </div>
  
          
          <div className="subjects-container">
            {submitbuttonclicked && <Skeleton count={5}/>}
            {!submitbuttonclicked&&subjects.map((subject, index) => (
              <div
                key={index}
                className="subject-rectangle"
                onClick={() => openSubjectLink(subject)}
              >
                {subject}
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Courses;
