
import "./About.css";


const About = () => {
    return (
        <>
            <div className="about-page">
  <div className="about-container">
    <h1 className="about-heading">About Srikanth Technologies</h1>

    <p className="about-text">
      Srikanth Technologies is a software training institute established by Srikanth Pragada.
      It is located at the heart of Visakhapatnam. It provides training on latest technologies.
      Srikanth Pragada, who has been teaching from 1992, conducts all training programmes himself.
      The institute consists of a well equipped lab and a spacious AC classroom with LCD projector.
      All classes are demo based. That means everything is shown live and more stress is laid on
      demonstration. It provides a unique facility where a student can either opt for theory alone
      or theory with lab facility. It enables students who have access to software and computer to
      opt only for theory. Each course has its own exclusive course material designed by Srikanth
      Pragada. Course material contains important points, references, diagrams and sample programs
      thus making it the most important resource for current course and future reference. It was
      founded on 24th October, 1998. The institute is known for its quality of training and
      transparent functionality.
    </p>

    <table className="contact-table">
      <tbody>
        <tr>
          <td className="label">Contact Address</td>
          <td className="value">
            Srikanth Technologies,<br />
            304, Eswar Paradise, Beside SBI Dwarkanagar Branch,<br />
            Dwarkanagar Main Road, Opp. 3rd Lane, Dwarkanagar,<br />
            Visakhapatnam - 530016.<br />
            Andhra Pradesh, India.
          </td>
        </tr>
        <tr>
          <td className="label">Phone</td>
          <td className="value">0891-2541948, 9059057000</td>
        </tr>
        <tr>
          <td className="label">Email Address</td>
          <td className="value">
            <a href="mailto:info@srikanthtechnologies.com">
              info@srikanthtechnologies.com
            </a>
          </td>
        </tr>
        <tr>
          <td className="label">Website</td>
          <td className="value">
            <a href="https://www.srikanthtechnologies.com" target="_blank" rel="noreferrer">
              www.srikanthtechnologies.com
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        </>
    )
};

export default About;