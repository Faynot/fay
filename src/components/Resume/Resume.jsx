import React from 'react';
import Header from '../Header/Header';

const Resume = () => {
  return (
    <div>
      <Header />
      <h1 className='h11'>Resume</h1>
      <embed className='pdf' src="../../../public/en_resume.pdf" type="application/pdf" width="100%" height="1200px"></embed>
      <h1 className='h11'>Or click link:</h1>
      <div className='buttons'>
        <button class="button">
            <a href='https://docs.google.com/document/d/1JnORS8XYzT0MkLiTvhZ4Kca-Z9RQNXioO3SnqmPphz4/edit?usp=sharing'>
                Goto Resume In Google Documents
            </a>
        </button>
        </div>
    </div>
  );
};

export default Resume;
