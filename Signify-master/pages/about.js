const Page = () => {
  return (
    <div style={{ marginTop: '2em' }}>
      <div className="jumbotron text-center">
        <h1>Deaf Talk - Translator</h1>
        <h4>
        </h4>
      </div>
      <div className="bg-secondary jumbotron">
        <h3 className="text-center">1. OpenCV Pipeline</h3>
        <div className="row justify-content-center">
          <img
            src="opencv.png"
            alt="OpenCV Pipeline Demo"
            className="img-responsive col-xs-12 col-md-6"
            style={{ height: '100%' }}
          />
          <div className="col-xs-12 col-md-6">
            <p>
              <br />
              <code>
                cv.cvtColor(img, result, cv.COLOR_BGR2GRAY);
                <br />
                cv.adaptiveThreshold( result, result, 255,
                cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 21, 2 );
                <br />
                cv.cvtColor(result, result, cv.COLOR_GRAY2RGB);
              </code>
              <br />

            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondary jumbotron">
        <h3 className="text-center">2. Tensorflow CNN</h3>
        <div className="row justify-content-center">
          <img
            src="model-architecture.png"
            alt="OpenCV Pipeline Demo"
            className="img-responsive col-xs-12 col-md-6"
            style={{ height: '100%' }}
          />
          <div className="col-xs-12 col-md-6">
            <p>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondary jumbotron">
        <h3 className="text-center">3. Interpreting The Results</h3>
        <div className="row justify-content-center">
          <img
            src="interpretation.png"
            alt="OpenCV Pipeline Demo"
            className="img-responsive col-xs-12 col-md-6"
            style={{ height: '100%' }}
          />
          <div className="col-xs-12 col-md-6">
            <p>

            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondary jumbotron">
        <h3 className="text-center">4. Autocorrection And Text To Speech</h3>
        <div className="row justify-content-center">
          <img
            src="tts.jpeg"
            alt="OpenCV Pipeline Demo"
            className="img-responsive col-xs-12 col-md-6"
            style={{ height: '100%' }}
          />
          <div className="col-xs-12 col-md-6">
            <p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
