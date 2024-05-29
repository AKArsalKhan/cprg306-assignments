import React from "react";
import Link from "next/link";

const StudentInfo = () => {
  return (
    <div style={styles.container}>
      <h1  style={styles.header}>Arsal Khan</h1>
      < div style={styles.Link}>
      <Link href="https://github.com/AKArsalKhan/cprg306-assignments"passHref>
        https://github.com
      
      
      </Link>
    </div>
    </div>
  );
}

const styles = {
  container: {
    
    textAlign: 'left',
    color: '#333',
  
   
  },
  header: {
    
    color: 'white',
  },

  Link: {
    color: 'white',
    
  },

  


};

export default StudentInfo;