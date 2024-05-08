import "./Video.css";

const Video = () => {
  return (
    <section id="experience">
      <h5>What I hope to Achive</h5>
      <h2>My Goals</h2>

      <div className="container">
        <div className="experience__frontend">
          <iframe
            width="800px"
            height="500px"
            src="https://youtube.com/embed/TAdkbuNnm2o"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
