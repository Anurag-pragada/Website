import type { BlogPost } from "../../../types/blogs";
import Badminton_Court from "../../../assets/images/Personal/My_Day/Badminton_Court.jpg";
import View_From_Balcony from "../../../assets/images/Personal/My_Day/View_From_Balcony.jpg";
import Classroom from "../../../assets/images/Personal/My_Day/Classroom.jpg";
import My_Cabin from "../../../assets/images/Personal/My_Day/My_Cabin.jpg";
import My_Room_At_Home from "../../../assets/images/Personal/My_Day/My_Room_At_Home.jpg";

export const My_Day: BlogPost = {
    id: "18",
    title: "My Day",
    slug: "my-day",
    category: "Personal",
    date: "24-9-2015",
    intro: "In this blog, I want to share my typical day with my students and readers.",
    sections: [
        {
            id: "day_starts_at_4_30",
            title: "Day starts at 4:30",
            content: [
                {
                    type: "paragraph",
                    text: "I get up at 4:30 am. Of course my Phone alarm wakes me up."
                },
                {
                    type: "paragraph",
                    text: "I get ready to go for Badminton. I play badminton from 5:00-6:00 am in an Indoor court at Seethammadhara. I have started playing badminton in 2010. First played in outdoor court in a park. Then moved to Indoor court. Starting from 2012 I have been playing in the morning 5-6 slot in ISN Raju Indoor court for Badminton at Seethammadhara, which has well-maintained wooden floor. Entry is restricted to members and our slot has 6 members who jell well."
                },
                {
                    type: "paragraph",
                    text: "On some Sundays we start at 4:30 am, so I get up at 4:00 am. Sunday and holidays are the days I get to stay beyond 6:00 am and enjoy some conversation with team mates. Otherwise I leave court at 6:00 am or a little earlier as my first class starts at 7:00 am."
                },
                {
                    type: "paragraph",
                    text: "We play irrespective of weather. We play doubles and only in some rare cases we play singles."
                }
            ],
            images: [
                {
                    src: Badminton_Court,
                    caption: "Badminton Court"
                }
            ]
        },
        {
            id: "coffee_with_padmaja",
            title: "Coffee with Padmaja",
            content: [
                {
                    type: "paragraph",
                    text: "By 6:30 am I have coffee with Padmaja, my wife."
                },
                {
                    type: "paragraph",
                    text: "Even having coffee in the Balcony of my house is a blessing in life. When I miss it I realize how simple it is yet how important it is."
                },
                {
                    type: "paragraph",
                    text: "I leave home for office by 6:45 am. My drive will take only 10 minutes at the most. Drive is pleasant at this time. I use Honda City mostly and occasionally Honda Brio. So I am in office by 6:55 am."
                }
            ],
            images: [
                {
                    src: View_From_Balcony,
                    caption: "View from Balcony"
                }
            ]
        },
        {
            id: "morning_session",
            title: "Morning session",
            content: [
                {
                    type: "paragraph",
                    text: "Every day I get to give my knowledge to students, is an opportunity and blessing. There is no better place than my classroom. It is the best and most sacred place for me."
                },
                {
                    type: "paragraph",
                    text: "My first class starts at 7:00 am. I start at 7:00 am irrespective of number of students. Some students arrive before me and some after me. I encourage students to come even if they are late as missing a part of class is better than missing whole class."
                },
                {
                    type: "paragraph",
                    text: "My second class starts at 8:00 am. It is typically Microsoft.NET course for 2 hours duration."
                },
                {
                    type: "paragraph",
                    text: "So I am done with my morning session by 10:00 am. But during summer schedule, my courses go on till 12:00 or 1:00 pm. Also all my corporate training programs are scheduled between 10:00 to 1:00 pm. During those periods I will be occupied with classes till 1:00 pm or beyond."
                }
            ],
            images: [
                {
                    src: Classroom,
                    caption: "Classroom"
                }
            ]
        },
        {
            id: "time_to_learn",
            title: "Time to learn", 
            content: [
                {
                    type: "paragraph",
                    text: "On a typical day, I am ready to learn or prepare course material or help students in fixing their issues etc. by 10:00 am. I generally work till 1:00 pm at office. Learning matters to me a lot. I always have a lot to learn as I work with multiple technologies like Microsoft.Net, Java, Oracle and other web and mobile technologies."
                },
                {
                    type: "paragraph",
                    text: "Reading books, blogs and watching videos are my sources of information. I have to apply whatever I read and listen, so I work with my laptop in office to implement whatever I learn. At times things just don’t go in my way. Then I need to spend a lot of time to fix things and understand what went wrong."
                },
                {
                    type: "paragraph",
                    text: "So, there are some tough days technically. Sometimes I get stuck with bugs for hours. Patience is the key. I generally don’t use any program in class until I try it on my own. With so many new versions and new tools, you never know when things can go wrong. So I try as many things as I can so that I know the problem well in advance before I discuss the topic in class."
                },
                {
                    type: "paragraph",
                    text: "I work with a Laptop connected with an external monitor so that I have two monitors to work with. I use this laptop with pen tablet while recording videos and taking online sessions."
                },
                {
                    type: "paragraph",
                    text: "Both my laptop and classroom desktop are from Dell and recently upgraded to Windows 10."
                }
            ],
            images: [
                {
                    src: My_Cabin,
                    caption: "My Cabin"
                }
            ]
        },
        {
            id: "lunch_plus_nap",
            title : "Lunch + Nap",
            content : [
                {
                    type: "paragraph",
                    text: "I generally have lunch around 1:30 pm. Kids are generally not around except on their holidays. I am not a food lover and not particular about taste."
                },
                {
                    type: "paragraph",
                    text: "After my lunch + fruits, I sleep for a while to regain energy. I take a day as two parts and this is the end of part 1 for me. So I sleep for 60 to 120 minutes between 2:00 pm to 4:00 pm."
                },
                {
                    type: "paragraph",
                    text: "By 4:30 pm I get ready to go to office after having tea with Padmaja."
                },
                {
                    type: "paragraph",
                    text: "I am at office by 4:45 pm to resume my evening sessions."
                }
            ]
        },
        {
            id: "evening_sessions",
            title: "Evening Sessions",
            content: [
                {
                    type: "paragraph",
                    text: "Evening classes start at 5:00 pm. I generally have classes one after another till 9:00 pm. There is no break between classes. Students of one batch leave and those of next batch enter. Some who do multiple courses remain seated. I remain in class all through. My mobile remains in my cabin and I don’t get to see any calls or messages. I don’t want to be distracted by my mobile, so I don’t even take it to classroom."
                }
            ]
        },
        {
            id: "time_to_learn_again",
            title: "Time to learn again",
            content: [
                {
                    type: "paragraph",
                    text: "I come home at 9:15 or so. It is time for dinner. I prefer to watch sports after dinner. My dinner and lunch are always followed by fruits. I have no reservations about fruits. I eat all and love all."
                },
                {
                    type : "paragraph",
                    text: "By 10:00 pm, once I am done with dinner I get back to my room where I have a typical desktop with two monitors connected. It is still a Windows 7 machine."
                }
            ],
            images: [
                {
                    src: My_Room_At_Home,
                    caption: "My Room at home"
                }
            ]
        },
        {
            id: "getting_ready_for_next_day",
            title: "Getting ready for next day",
            content: [
                {
                    type: "paragraph",
                    text: "I decide the dress, belt and shoes to wear for next day before I go to bed. I also keep my badminton dress and shoes ready as I don’t get time next day morning. But if any ironing is be done, that is done in the morning before I put on the dress. I love to do my work myself. At times I wash my clothes. I was taught by my parents to do my work myself."
                },
                {
                    type: "paragraph",
                    text: "I maintain to-do list in my diary and also in my mobile."
                }
            ]
        },
        {
            id: "another_day_comes_to_an_end",
            title: "Another day comes to an end",
            content: [
                {
                    type: "paragraph",
                    text: "By the time I am ready to sleep, I know another day in my life has come to an end. I take each day as a privilege and an opportunity to work. I believe work is worship. I believe all Gods advocated humans to work. I am of the opinion we go to work to make ourselves more valuable."
                },
                {
                    type: "paragraph",
                    text: "By the time I go to bed it is beyond 12:00 am. So, many times my day ends the next day."
                }
            ]
        },
        {
            id: "my_sunday",
            title: "My Sunday",
            content: [
                {
                    type: "paragraph",
                    text: "Sunday starts a little earlier as we start playing by 4:30 am. After completing the game, I generally get time to converse with my batchmates as I don't have to leave by 6:00 am."
                },
                {
                    type: "paragraph",
                    text: "I prefer to work in the morning. At times I have classes on Sunday morning. If I have to record videos, my office is ideal place as it is quite calm on Sunday morning."
                },
                {
                    type: "paragraph",
                    text: "I prefer shopping in the afternoon. I feel shops are relatively free on Sunday afternoon. Generally the whole family goes together for shopping. There is something to buy for everyone."
                },
                {
                    type: "paragraph",
                    text: "Evenings are generally meant for get together of relatives and friends."
                },
                {
                    type: "paragraph",
                    text: "We don't prefer going to movie on Sunday. We do watch movies but mostly during weekdays and night shows."
                }
            ]
        },
        {
            id: "what_else",
            title: "What else??",
            content: [
                {
                    type: "paragraph",
                    text: "There are good days, great days and also bad days. I try my best to be balanced on all days."
                },
                {
                    type: "paragraph",
                    text: "I love to read as many books as possible. Love to know about successful people and places. I have the responsibility to motivate and encourage students to make the most of their talent and resources. They trust me and I can’t let them down."
                },
                {
                    type : "paragraph",
                    text: "I don’t watch TV except for sports and occasionally news. I have no interest in TV serials or reality shows. With 24 x 7 channels, every unnecessary event is a news. I feel I have better things to do rather than watching news. However, I prefer watching news on BBC to other channels. I love all sports. I played Cricket, Football, Badminton, Tennis, and Volleyball. When it comes to watching sports, I love to watch all sports. I enjoy watching athletics a lot – relay is my favourite event in athletics."
                },
                {
                    type: "paragraph",
                    text: "I don’t use mobile as much as many others. For me it is a good device but not indispensible. It keeps me in touch with a few good friends I have. I don’t know games like Candy Crush and Angry birds. I never played them and don’t think I will ever see myself wasting time on them."
                },
                {
                    type: "paragraph",
                    text: "I am always connected to internet. I use Twitter and Facebook sparingly. I use Dropbox for all my documents."
                },
                {
                    type: "paragraph",
                    text: "That’s about me and my typical day."
                }
            ]
        }
    ]
};