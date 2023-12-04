import "./About.css";
import authorImage from "../../images/me.jpg";

function About() {
  return (
    <div className="about">
      <img src={authorImage} alt="Author Image" className="about__image"></img>
      <p className="about__summary">
        Hello! I'm Cassandra, the creator of The Recipe. My passion for cooking,
        and connection, inspired me to create this platform, a haven for food
        enthusiasts of all skill levels. At the core of The Recipe lies my
        belief that there's a perfect recipe for everyone. This platform is more
        than just about finding the right dish; it's a journey to discover
        culinary passions, explore diverse flavors, and unite people in the love
        of cooking.
      </p>
    </div>
  );
}

export default About;
