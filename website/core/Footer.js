const React = require('react');

class Footer extends React.Component {
  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="copyright">
        Created by <a href="https://github.com/kkoscielniak">@kkoscielniak</a>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
