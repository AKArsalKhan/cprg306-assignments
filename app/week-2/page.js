import StudentInfo from "./student-info";



  

  const Page = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Shopping List</h1>
        <StudentInfo />
        
      </div>
    );
  }


  const styles = {

    container: {
      textAlign: 'left',
      backgroundColor: 'black',
      color: 'white',
      height: '100vh',
    },
  }

  export default Page;