import type { BlogPost } from "../../../types/blogs";
import AWS_Certification from "../../../assets/images/Personal/I_Am_Now_Aws_Certified_Cloud_Practitioner/AWS_Certification.jpg";

export const I_am_now_AWS_Certified_Practitioner: BlogPost = {
    id: "7",
    title: "I am now AWS Certified Practitioner",
    slug: "i-am-now-aws-certified-practitioner",
    category: "Personal",
    date: "26-06-2023",
    intro: [
        "I have been working with AWS for more than a year. I wanted to prove to myself that my knowledge of AWS is good enough. I know there is no better way than taking AWS certification exam.",
       {
    type: "paragraph",
    text: [
      "On 17th June, 2023, I took ",
      { type: "link", text: "AWS Cloud Practitioner (CLF-C01)", url: "https://aws.amazon.com/certification/certified-cloud-practitioner" },
      " at Pearson VUE in Chennai and got through the exam. It is a very good exam covering many services of AWS.",
    ],
  },
  "This is my 7th industry certification.",
    "Two topics that I found most difficult are - 6 Pillars of Well Architected Framework and Cloud Adaption Framework (CAF). Both topics are theory oriented and very abstract.",
    "Needless to say that during the preparation for exam I did learn a few new things that I didn't know before. In fact that is the very reason, I take certification exams."

    ],
    sections: [
        {
            id: "certificate_issued_by_Aws",
            title: "Certificate issued by AWS",
            content: [
                {
                    type: "paragraph",
                    text: "Here is a look at my official certificate:"
                }
            ],
                images : [
                    {src: AWS_Certification, caption: "AWS Certification"}
                ]
            }
        ]
};