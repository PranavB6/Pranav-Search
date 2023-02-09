const Footer: React.FC = () => {
  return (
    <>
      {/* Footer */}
      <footer>
        <div className="footer-section">
          <div className="footer-text-container">
            <a href="https://www.google.com" className="footer-text">
              Pranav Lives in Canada
            </a>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-text-container">
            <a href="https://www.google.com" className="footer-text">
              Advertise to Pranav
            </a>
            <a href="https://www.google.com" className="footer-text">
              Business with Pranav
            </a>
          </div>

          <div className="footer-text-container">
            <a href="https://www.google.com" className="footer-text">
              Privacy
            </a>
            <a href="https://www.google.com" className="footer-text">
              Terms
            </a>
            <a href="https://www.google.com" className="footer-text">
              Settings
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
