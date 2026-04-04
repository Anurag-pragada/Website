import "./Testimonials.css";
import Navbar from "../components/Navbar";

interface Testimonial {
  title: string;
  message: string;
  email: string;
}

const handleShowAll = () => {
  console.log("Show all clicked");
  // later you can navigate or expand list
};


const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      title: "Feedback",
      message:
        '"In my B.tech 3rd year I joined for J2EE course.Now Iam working as a Software Engineer @ Persistent.Even today I refer to your site and you are my inspirational teacher.My life has changed a lot after learning Java from you.Thanks a lot."',
      email: "s.anandkumar.89@gmail.com",
    },
    {
      title: "Comment On Blog- Are you using or abusing resources?",
      message:
        `"I remember that u discussed the same point in the class. Its inspiring...thank you for sharing with us...I didn't forget the line till now i.e. life begins after college ends...its true sir... now i am experiencing..."`,
      email: "lokeshpaluri@gmail.com",
    },
    {
      title: "Feedback",
      message:
        '"i think discipline is required to achieve anything.and sir,u r the best example for that,and above all..ur enthu for teaching."',
      email: "ephemeral2k@yahoo.co.in",
    },
    {
      title: "Comment On Blog- No job, No prospects, A lot of free time – What to do?",
      message:
        `"Sir, I am feeling nervous, that i can't achieve job. At that time i thought to post you a mail regarding my problem. i opened your site, in blog i saw your article. after reading it , it gave me lot of confidence, saying that one day will be mine, get ready for that day. Thank you very much for posting good article. i love you so much sir,your are my inspiration to reach my target.i am your student from 1999.....2009......"`,
      email: "damodar515@yahoo.co.in",
    },
    {
      title: "Comment On Blog- Are you using or abusing resources?",
      message:
        `"Another eye-opening article from you sir. 'Its not what you have but what you do with that matters the most' I liked this statement. Thank you very much for sharing such valuable information with all of us. I will keep them in my mind."`,
      email: "ar.manikumar88@gmail.com",
    },
    {
      title: "Feedback",
      message:
        `"I hope you are doing great. I am your x-student for Java, J2EE courses held in year 2004. I am working for United Health Care, leading insurance company in United States in it's IT department. During a recent re-org, I have been moved to a oracle team. So I was looking for basic oracle and plsql tutorials in google and this site came along. I felt very happy to see it. From last few days, I was going through the oracle pdf that you have shared in the site in my free times. It's very simple and useful. Thanks for that. I have also seen some of your blogs/photos. You look just like how were when I have seen you last. And after reading your blogs and the way you are maintaining site, I can again say, You are always a well organised man. Great work. Regards, Krishnapriya Rayala."`,
      email: "krishnapriya.rayala@gmail.com",
    },
    {
      title: "Comment on Blog - 13 years",
      message:
        `"Congratulations,Sir for completing 13 successful years. But,I think I should say 'THANK YOU' rather than 'Congratulations'. Thank you for starting a training institution,Sir. Thank you for sharing your hard earned knowledge. Thank you for the inspiration,motivation,support and warmth you give to us. Thank you,Sir !!! You the best software trainer any student could ask for."`,
      email: "charanswathi@gmail.com",
    },
     {
      title: "Comment on Blog - 13 years",
      message:
        `"Dear Srikanth sir ,first let me tell a very big 'THANK YOU ' to you,to have an opportunity of having a big brand image like ' I AM A SRIKANTH SIR'S STUDENT. I have recently finished java at you sir,apart from the course the things that can learn from you are more and many more,but mention a few are the commitement,the punctuality,the quality,the personality...we can't find anywhere else.as a student of B.E.,M.B.A an an employee of 8 yrs experience i never come across such a kind of personality.really we are blessed. finally Congratulations to you and the entire staff for your dedicated and thoughtful work in reaching this milestone, I sincerely hope that the institute will cross many such milestones.thank u for giving me an oppurtunity to express."`,
      email: "rummyramsh@gmail.com",
    },
    {
      title: "Comment on Blog - 13 years",
      message:
        `"Really great..And I strongly believe that today I am able to post this comment from my office cabin because once upon a time I was his student.I would like to Congratulate Srikanth Sir with all my heart:)"`,
      email: "sadu_kumar@persistent.co.in",
    },
      {
      title: "Comment on Blog - Languages",
      message:
        `"Nice to read everything abt u.Iam a student of urs...ur hardwork and dedication really inspires us.......you have motivated me to improve my technical skills. Thanks for ur guidance."`,
      email: "gamanasaveena@gmail.com",
    },
    {
      title: "Comment on blog - VSP Java EE Training",
      message:
        `"Professional to the core with a perfect sense of timing. Inspiring, intelligent and modest. Better late than never, thanks to the solid foundation given on OOP concepts and best possible introduction to the world of Java."`,
      email: "mkcvarthy@vizagsteel.com",
    },
    {
      title: "Comment on blog - Age Of Distraction",
      message:
        `"Very well said Sir!! Really a motivating one..and it helps young guys like us to stay focused on our goal. I personally feel your teaching in/off class pretty awesome! Looking forward for more articles like this from you Sir:)"`,
      email: "jayachandramanda@gmail.com",
    },
    {
      title: "Comment on blog - The reality of Academic Projects",
      message:
        `"Ulimate guidelines. I did not get this type of guidelines before."`,
      email: "dast.mca@gmail.com",
    },
    {
      title: "Comment on blog - The reality of Academic Projects",
      message:
        `"'Success is not an accident. You have to plan for it and execute the plans'. Great quote. Sir, What you have mentioned is absolutely true. The teachers have to take care of the students life. They must atlest explain about the project from 3rd year itself.Till final year students are not bothering about the technology.Just enjoying the student life with mobile or something crazy time pass. I wish students who has enthusiasm must understand your concern."`,
      email: "p.rajasekhar@rocketmail.com",
    },
     {
      title: "Comment on blog - Features of Java 7.0",
      message:
        `"Great post! Thanks you sir for the simple explanations of the new features in Java 7."`,
      email: "ravi.mukkavilli@gmail.com",
    },
    {
      title: "Feedback On Oracle Book",
      message:
        `"Hello Mr. Pragada, I am in the US and taking a masters level course in database systems. I have to say your Oracle online book is wonderful. Your diagrams and text are very clear in conveying the theory. Thank you and best wishes."`,
      email: "roses7527@yahoo.com",
    },
    {
      title: "Feedback On Oracle Book",
      message:
        `"Srikanth I was your student during my MCA I still use the book on your website for references years after I stopped coding. I like your style of teaching and still remember and appreciate your puntuality and steadfastness. You come there on time rain or storm, for the people who make it to the class.. Kudos to you.."`,
      email: "oracle099@gmail.com",
    },
    {
      title: "Feedback",
      message:
        `"I found this site when I was searching for image displaying using servlets. Then I went on exploring the website and found it's worthy for any software engineers or budding software engineers. Nice and clear information on the subjects. Just a suggestion if you could conduct online classes, then a lot more of people can get benefit from it."`,
      email: "sanjeev.pk@gmail.com",
    },
    {
      title: "Feedback On Oracle Book",
      message:
        `"GOOD DAY SIR, MY NAME IS KOLAWOLE FROM NIGERIA, I JUST WANT TO SAY A VERY BIG THANK YOU FOR ALL OF THIS, HONESTLY YOU DONT KNOW HOW MUCH I DO APPRECIATE THIS.... WITH ALL THIS DOCUMENT INFO, I AM GETTING SOMEWHERE, I DONT EVEN HAVE MONEY TO GO AND LEARN ALL THIS, BUT NOW ALL I HAVE TO DO IS TO CREATE TIME TO READ, and IF I CAN DOWNLOAD THE APPS, I WILL BE COOL..... ONCE AGAIN THANK YOU and GOD BLESS YOU AND YOUR FAMILY, BYE BYE..-KOLA"`,
      email: "kolasplash@yahoo.com",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="testimonials-container">
      <div className="testimonials-header">Testimonials</div>

      {testimonials.map((item: Testimonial, index: number) => (
        <div className="testimonial-item" key={index}>
          <h3 className="testimonial-title">{item.title}</h3>
          <p className="testimonial-message">{item.message}</p>
          <p className="testimonial-email">- {item.email}</p>
        </div>
      ))}
      <div className="show-all" onClick={handleShowAll}>
      Show All
    </div>
    </div>
    </>
  );
};

export default Testimonials;