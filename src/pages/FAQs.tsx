import Navbar from "../components/Navbar";
import "./FAQs.css";

const FAQs = () => {
  return (
    <>
      <Navbar />
      <h1 className="faqs-heading">Frequently Asked Questions (FAQs)</h1>
      <p className="faqs-text">
        Here are answers for most frequently asked questions about Srikanth
        Technologies and courses offered by Srikanth Technologies. If you don't
        find your question here, please write to {" "}
        <strong>contact@srikanthtechnologies.com.</strong>
      </p>

      <ul className="faqs-list">
        <li>
          <a href="#">About Courses</a>
        </li>
        <li>
          <a href="#">Online Course</a>
        </li>
        <li>
          <a href="#">Offline (classroom) Course</a>
        </li>
        <li>
          <a href="#">Corporate Training</a>
        </li>
        <li>
          <a href="#">Course Completion Certificate</a>
        </li>
        <li>
          <a href="#">Discontinuation and Refunds</a>
        </li>
      </ul>

      <div className="faqs-section">
        <h1 className="faqs-title">About Courses</h1>

        <div className="faq-item">
          <h3 className="faq-question">
            What are the courses offered at Srikanth Technologies?
          </h3>
          <p className="faq-answer">
            <a href="#" className="course-link">
              Click here
            </a>{" "}
            to know the courses offered at Srikanth Technologies.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">Who is the trainer for the courses?</h3>
          <p className="faq-answer">
            <a href="#" className="course-link">
              Srikanth Pragada
            </a>
            , the director of Srikanth Technologies, conducts all training
            programs in Srikanth Technologies. There are no other trainers.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">
            Where can I find the course syllabus and course fee?
          </h3>
          <p className="faq-answer">
            You can click on the course in the Batch Schedule on{" "}
            <a href="#" className="course-link">
              Home Page
            </a>
            . Alternatively, you can visit{" "}
            <a href="#" className="course-link">
              Courses Offered
            </a>{" "}
            page and click on course structure and detailed syllabus link
            available for each course.
          </p>
        </div>

        <>
          <h1 className="faqs-title">Online Course</h1>

          <div className="faq-item">
            <h3 className="faq-question">
              How can I register for the online course?
            </h3>
            <p className="faq-answer">
              When you are interested in any of the courses offered online, you
              have to click on <strong>Register</strong> link on the right of
              the batch that you want to register in the{" "}
              <a href="#" className="course-link">
                Course Schedule
              </a>{" "}
              or send a mail to{" "}
              <a
                href="mailto:contact@srikanthtechnologies.com?subject=Course Inquiry"
                className="highlight-link"
              >
                contact@srikanthtechnologies.com
              </a>{" "}
              with course name you are interested in. We will provide the link
              that enables you to join virtual classroom to your email.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">When should I pay the course fee?</h3>
            <p className="faq-answer">
              Generally after 2 or 3 sessions, we protect the virtual classroom
              with password. So you have to commit to the course by then to get
              password and continue to join virtual classroom.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">
              When do I get the password for the course?
            </h3>
            <p className="faq-answer">
              Once you commit to course by paying the course fee and filling the{" "}
              <a href="#" className="highlight-link">
                online admission form
              </a>
              , we will provide password and course material by email.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">
              How will I get course material as an Online Student?
            </h3>
            <p className="faq-answer">
              We provide course material in the form of PDF.
            </p>
          </div>

         <div className="faq-item">
          <h3 className="faq-question">
            How to make course fee payment for Online Courses?
          </h3>
          <p className="faq-answer">
            For online payment modes, you can visit{" "}
            <a href="#" className="highlight-link">
              Online Payments
            </a>{" "}
            page. You also have the option of paying in cash towards online
            course at the institute.
          </p>
         </div>

         <div className="faq-item">
          <h3 className="faq-question">Can I deposit cash in account?</h3>
          <p className="faq-answer">
            No. Depositing cash into account is not permitted. You can either
            make an online transfer or pay by cash at the institute.
          </p>
         </div>

         <div className="faq-item">
          <h3 className="faq-question">
            Is Loyalty discount applicable for Online Students?
          </h3>
          <p className="faq-answer">
            No. Loyalty discount is not applicable for Online Students.
          </p>
         </div>

         <div className="faq-item">
          <h3 className="faq-question">
            How can I interact during an Online Session?
          </h3>
          <p className="faq-answer">
            You must stay in mute mode all through the session. You can post
            your questions and respond to questions posed during the session in
            the chat window. The trainer will respond to your questions whenever
            it is appropriate.
          </p>
         </div>

         <div className="faq-item">
          <h3 className="faq-question">
            How can I contact for any programming issue I encounter or for any
            clarification?
          </h3>
          <p className="faq-answer">
            You can write to us on contact@srikanthtechnologies.com and response
            will be provided. If required, a meeting will be scheduled to look
            into the issue and resolve.
          </p>
         </div>

         <div className="faq-item">
          <h3 className="faq-question">
            Can I attend Online if I registered for Classroom course?
          </h3>
          <p className="faq-answer">
            No. Without password you cannot join the online sessions and only
            online students are given the password.
          </p>
         </div>

         <div className="faq-item">
          <h3 className="faq-question">
            Can I convert to classroom (offline) from Online?
          </h3>
          <p className="faq-answer">
            Yes. You have to inform at the front-office that you are an online
            student but attending classes in person.
          </p>
         </div>

         <div className="faq-item">
          <h3 className="faq-question">
            How can I convert from Classroom to Online course?
          </h3>
          <p className="faq-answer">
            You have to forgo loyalty discount received, if you have availed it.
          </p>
         </div>

         <div className="faq-item">
          <h3 className="faq-question">
            Are there any guidelines regarding online course that students need
            to follow?
          </h3>
          <p className="faq-answer">
            Yes. You must read and strictly adhere to{" "}
            <a href="#" className="highlight-link">
              Online student guidelines
            </a>{" "}
            for smooth functioning of live online course.
          </p>
         </div>
        </>
         <>
          <h1 className="faqs-title">Offline (classroom) Course</h1>

          <div className="faq-item">
            <h3 className="faq-question">How do I join offline course?</h3>
            <p className="faq-answer">
              You can join offline course by directly coming to the institute on
              the starting day of the course.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">How do I pay for offline course?</h3>
            <p className="faq-answer">
              You can pay in cash at the institute or even make payment online
              using any of the options mentioned in
              <a href="#" className="course-link">
                Online Payments
              </a>{" "}
              section.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Can I use lab facility?</h3>
            <p className="faq-answer">
              We do not provide lab facitlity. You have to practice on your own.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Do I get any course material?</h3>
            <p className="faq-answer">
              For some courses, we provide course material and for others we
              provide digital course material.
            </p>
          </div>
         </>

         <>
          <h1 className="faqs-title">Corporate Training</h1>

          <div className="faq-item">
            <h3 className="faq-question">
              How can I contact for a corporate training?
            </h3>
            <p className="faq-answer">
              Write your requirements to us on{" "}
              <a
                href="mailto:contact@srikanthtechnologies.com?subject=Corporate Training Inquiry"
                className="highlight-link"
              >
                contact@srikanthtechnologies.com
              </a>
              . Click{" "}
              <a href="#" className="course-link">
                here
              </a>{" "}
              to know about corporate training.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">
              Can a Corporate Training be Live Online Training?
            </h3>
            <p className="faq-answer">
              Yes. On-site or off-site training is provided according to
              requirements of the client.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">
              Can the course syllabus be customized for Corporate Training
              requirements?
            </h3>
            <p className="faq-answer">
              Yes. Training with tailor-made syllabus is provided according to
              the requirements of the client.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">
              What is the training rate for Corporate training?
            </h3>
            <p className="faq-answer">
              Training rates depend on the topic and nature of training program
              - on-site or off-site. Please write your requirements to us on{" "}
              <a
                href="mailto:contact@srikanthtechnologies.com?subject=Corporate Training Inquiry"
                className="highlight-link"
              >
                contact@srikanthtechnologies.com
              </a>{" "}
              for details.
            </p>
          </div>
         </>

         <>
          <h1 className="faqs-title">Course Completion Certificate</h1>

          <div className="faq-item">
            <h3 className="faq-question">
              Will I get course completion certificate after the completion of
              the course automatically?
            </h3>
            <p className="faq-answer">
              No. We do not issue any certificate by default.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Can I get certificate, if I want?</h3>
            <p className="faq-answer">
              Yes. You can ask for course completion certificate if you need it.
              However, this is an add-on service and will cost you 300 INR per
              certificate.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">
              Do I have to take any examination to get the certificate?
            </h3>
            <p className="faq-answer">No.</p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">
              What kind of certificate will I receive?
            </h3>
            <p className="faq-answer">
              You can choose between digital certificate vs. printed
              certificate. However, for physical certificate you have to come to
              the institute and collect it on your own.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">
              What details do I need to provide to request for certificate ?
            </h3>
            <p className="faq-answer">
              You have to provide your full name that should appear on
              certificate and batch details.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Where can I pay for certificate?</h3>
            <p className="faq-answer">
              You can pay online or offline. In case of offline, pay at the
              institute and fill the certificate requisition form. In case of
              online, pay (refer to online payments section) and then send an
              email to us on {" "}
              <a
                href="mailto:contact@srikanthtechnologies.com?subject=Payment for Certificate"
                className="highlight-link"
              >
                contact@srikanthtechnologies.com
              </a>{" "}
              with details.
            </p>
          </div>
         
         <div className="faq-item">
          <h3 className="faq-question">
            How much time does it take to get the certificate?
          </h3>
          <p className="faq-answer">Generally, it takes 24 to 48 hours.</p>
         </div>
        </>
        <>
          <h1 className="faqs-title">Discontinuation and Refunds</h1>

          <div className="faq-item">
            <h3 className="faq-question">
              Can I discontinue a batch and join next batch?
            </h3>
            <p className="faq-answer">
              Yes. You can discontinue in the current batch and resume in future
              batch from where you discontinue the current batch. You must send
              an email communicating the same to us on {" "}
              <a
                href="mailto:contact@srikanthtechnologies.com?subject=Corporate Training Inquiry"
                className="highlight-link"
              >
                contact@srikanthtechnologies.com
              </a>
              {" "}or fill the discontinuation form at the institute. Please note,
              you have to pay the difference in course fee, if there is any
              increase in course fee for the batch in which you are about to
              resume. If you fail to intimate us about your discontinuation then
              it is deemed you completed the course and you will not be eligible
              to resume in another batch.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">
              Can I drop out of a batch and seek refund?
            </h3>
            <p className="faq-answer">
              As a policy, we DO NOT process refunds.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">
              Can I switch from one course to another?
            </h3>
            <p className="faq-answer">
              No. You cannot switch from one course to another.
            </p>
          </div>
        </>
     </div>
     </>
  );
};

export default FAQs;
