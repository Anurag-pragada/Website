import type { BlogPost } from "../../../types/blogs";
import Oracle_Certificate from "../../../assets/images/Personal/I_Am_Now_Oracle_PL_SQL_Developer_Certified_Associate/Oracle_Certificate.jpg";
import Exam_Score_Report from "../../../assets/images/Personal/I_Am_Now_Oracle_PL_SQL_Developer_Certified_Associate/Exam_Score_Report.jpg";

export const I_am_now_Oracle_PL_SQL_Developer_Certified_Associate: BlogPost = 
{
    id: "23",
    title: "I am now Oracle PL/SQL Developer Certified Associate",
    slug: "i-am-now-oracle-pl-sql-developer-certified-associate",
    category: "Personal",
    date: "27-7-2013",
    intro: "I am now Oracle PL/SQL Developer Certified Associate.",
    sections: [
        /* Complete the link once you get the working one */
        {
            content: [
                {
                    type: "paragraph",
                    text: "Since I have completed MCTS .NET 4, Web Application certification in 2010, I had been thinking of another certification. I could not find anything interesting enough. I finally thought of PL/SQL Developer exam, which covers PL/SQL thoroughly. One of the reasons to take an exam is to get better at the technology. I never had opportunity to explore PL/SQL and preparing for exam was the best way to do that."
                },
                {
                    type: "paragraph",
                    text: "On 6th July, 2013, I took Oracle Database 11g: Program with PL/SQL (1Z0-144) at Pearson VUE in Vizag. I got through the exam with 91%. This gives me a new title - Oracle PL/SQL Developer Certified Associate. To get this title one has to clear two exams - Oracle Database SQL Expert (1Z0-047), which I passed on 20-Nov,2009 (My blog on that) and Oracle Database 11g: Program with PL/SQL (1Z0-144), which I passed yesterday."
                },
                {
                    type: "link",
                    text: "Oracle Database 11g: Program with PL/SQL (1Z0-144)",
                    url: "#"
                }
            ]
        },
        {
            id: "my_preparation",
            title: "My Preparation",
            content: [
                {
                    type: "paragraph",
                    text: "I have decided to go for this in late May and could spend some time on and off on this. But this is my busiest period (May and June) in the year as I work for more than 8 hours during weekdays and 4 hours on Sundays. In spite of that I decided to go ahead and spend whatever time left out of working hours on this."
                },
                {
                    type: "paragraph",
                    text: "The following are the resources I used during my preparation."
                },
                {
                    type: "subheading",
                    text: "Study Guide for 1Z0-144: Oracle Database 11g: Program with PL/SQL"
                },
                {
                    type: "paragraph",
                    text: "It is not very useful. Just a final reference kind of thing. Not worth its price (Rs.580/-). I bought this book online at Pothi.com and it took 4 days to deliver this book. Read it in two days as it has only 175 pages."
                },
                {
                    type: "subheading",
                    text: "Oracle PL/SQL Programming, 5th Edition By Steven Feuerstein, Bill Pribyl"
                },
                {
                    type: "paragraph",
                    text: "This is the best book on PL/SQL. But it takes a lot of time as it has detailed explanation about all important areas of PL/SQL. I spent most of the time reading this book. I was not very fond of documentation, though I read a little here and there."
                },
                {
                    type: "paragraph",
                    text: [
                        "For sample questions, I used ",
                        {
                            type: "link",
                            text: "ucertify.com",
                            url: "http://www.ucertify.com/"
                        }
                    ]
                },
                {
                    type: "paragraph",
                    text: "I did prepare my own notes for quick reference. I would like to share that with others who are preparing for this exam. Though it is not very polished as it was prepared for personal use, it could still be of use to others."
                },
                {
                    type: "link",
                    text: "My Study Guide for IZ0-144",
                    url: "/documents/IZ0_144_Study_Guide.pdf"
                }
            ]
        },
        {
            id: "taking_exam",
            title: "Taking the Exam",
            content: [
                {
                    type: "paragraph",
                    text: "I booked slot for 12:00 pm on 26th July on 23rd July. I had to pay $150 USD, which worked out to be Rs. 9300/-."
                },
                {
                    type: "paragraph",
                    text: "I reached exam centre around 11:15, but could not take exam until 12:30pm as slot was not free till then. I had to wait for 30 minutes having completed formalities like providing my id etc."
                },
                {
                    type: "paragraph",
                    text: "Though exam was not very complex, the time provided was hardly enough. Just 90 minutes for 70 questions was too short. That too half of the questions contain some exhibits where we need to read code from 5 to 20 lines. I personally feel the time given was very inadequate. So I was left with little time to revise questions at the end."
                },
                {
                    type: "paragraph",
                    text: "At the end I thought I would get the mark sheet then and there. But it was not so (It was the case for all five exams I took so far). Instead this time I had to log into Oracle CertView to to get my result. I personally would like to see marks sheet immediately. Expecting candidate to log into his/her account and get result is a little lengthy process. That too if you don't have Oracle Web Account, you have to create one. That can further prolong your anxiety."
                },
                {
                    type: "paragraph",
                    text: "Here is the result provided by the CertView website for my exam."
                },
                
            ],
            images: [
                {
                    src: Oracle_Certificate,
                    caption: "Certificate Issued By Oracle"
                },
                {
                    src: Exam_Score_Report,
                    caption: "Examination Score Report"
                }
            ]
        }
    ]
}