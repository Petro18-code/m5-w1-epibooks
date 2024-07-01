function MyFooter() {
    return(
    <footer className="d-flex bg-dark mt-2">
      <span className="text-white m-auto p-2">
        <strong>EPIBOOKS</strong> - Copyright {new Date().getFullYear()}
      </span>
    </footer>
    );
  }
  
  export default MyFooter;
  