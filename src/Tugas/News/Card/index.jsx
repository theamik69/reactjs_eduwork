import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default class Card extends React.Component {
  state = {
    articles: [],
    loading: true,
    searchTerm: "",
    query: "apple",
    backButtonVisible: false,
    warningVisible: false,
  };

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleFormatDate = (publishedAt) => {
    const date = new Date(publishedAt);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = `${months[monthIndex]} ${day} ${year}`;

    return formattedDate;
  };

  performSearch = () => {
    this.setState({ query: this.state.searchTerm }, () => {
      this.componentDidMount();
    });
    this.setState({ backButtonVisible: true });
  };

  handleBack = () => {
    this.setState({ searchTerm: "" });
    this.setState({ query: "apple" }, () => {
      this.componentDidMount();
    });
    this.setState({ backButtonVisible: false });
  };

  fetchData = () => {
    fetch(`https://newsapi.org/v2/everything?q=${this.state.query}&apiKey=`)
      .then((response) => response.json())
      .then(({ articles }) => {
        const articlesWithId = articles.map((article, index) => ({
          ...article,
          id: index + 1,
        }));
        if (!articlesWithId.length) {
          this.setState({ warningVisible: true });
        } else {
          this.setState({ warningVisible: false });
        }
        this.setState({
          articles: articlesWithId,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const searchStyle = {
      position: "relative",
      boxShadow: "0 0 40px rgba(51, 51, 51, .1)",
      padding: "10px",
    };

    const inputStyle = {
      height: "60px",
      textIndent: "25px",
      border: "2px solid #d6d4d4",
    };

    const searchIconStyle = {
      position: "absolute",
      top: "20px",
      left: "16px",
    };

    const buttonStyle = {
      position: "absolute",
      top: "15.5px",
      right: "15px",
      height: "50px",
      width: "100px",
    };

    return (
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div style={searchStyle}>
              <i className="fa fa-search" style={searchIconStyle}></i>
              <input type="text" className="form-control" placeholder="Cari berita..." style={inputStyle} value={this.state.searchTerm} onChange={this.handleSearchChange} />
              <button className="btn btn-primary" style={buttonStyle} onClick={this.performSearch}>
                Search
              </button>
            </div>
          </div>
        </div>

        <div id="warning" className="mt-2 d-flex justify-content-center align-items-center">
          <p className="p-2 mb-2 bg-danger text-white" style={this.state.warningVisible ? {} : { display: "none" }}>Konten tidak ditemukan</p>
        </div>

        <div id="back" className="mt-4" style={this.state.backButtonVisible ? {} : { display: "none" }}>
          <button className="btn btn-light btn-lg" onClick={this.handleBack}>
            Kembali
          </button>
          <div className="border mt-4"></div>
        </div>

        <main id="main" data-aos="fade" data-aos-delay="1500">
          <section id="gallery" className="gallery">
            <div className="container-fluid">
              <div className="row gy-4 justify-content-center">
                {this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  this.state.articles.map((article) => (
                    <div key={article.id} className="border m-3 p-3 rounded bg-black col-xl-3 col-lg-4 col-md-6">
                      <div className="gallery-item h-100">
                        <img src={article.urlToImage} className="img-fluid mb-2" alt={article.title} />
                        <div className="timeandname d-flex align-items-center mt-3">
                          <time dateTime={article.publishedAt}>{this.handleFormatDate(article.publishedAt)}</time>
                          <a href={article.url} className="aname">
                            {article.source.name}
                          </a>
                        </div>
                        <div>
                          <h3 className="title">
                            <a href={article.url}>{article.title}</a>
                          </h3>
                          <p className="description">{article.content}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
