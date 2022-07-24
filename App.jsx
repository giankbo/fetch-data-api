const App = () => {
  const { useState, useEffect } = React;
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    const url = 'https://api.adviceslip.com/advice';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.slip.advice);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Enjoy your advice</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">{advice}</p>
        <div className="d-grid justify-content-sm-center">
          <button type="button" onClick={refreshPage} className="btn btn-primary btn-lg px-4 gap-3">Click to reload!</button>
        </div>
      </div>
    </div>
  );
};

// =================================================
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);