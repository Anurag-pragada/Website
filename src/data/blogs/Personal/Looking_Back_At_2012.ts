import type { BlogPost } from "../../../types/blogs";
import In_Yelagiri_At_Tea_Stall from "../../../assets/images/Personal/Looking_Back_At_2012/In_Yelagiri_At_Tea_Stall.jpg";
import In_Coracle_At_Hogenakkal_Falls from "../../../assets/images/Personal/Looking_Back_At_2012/In_Coracle_At_Hogenakkal_Falls.jpg";
import At_Yercaud from "../../../assets/images/Personal/Looking_Back_At_2012/At_Yercaud.jpg";
import At_Sterling_Resorts_In_Yelagiri from "../../../assets/images/Personal/Looking_Back_At_2012/At_Sterling_Resorts_In_Yelagiri.jpg";
import Members_Of_Java_EE_Training from "../../../assets/images/Personal/Looking_Back_At_2012/Members_Of_Java_EE_Training.jpg";
import Members_Of_Microsoft_Dotnet_Training from "../../../assets/images/Personal/Looking_Back_At_2012/Members_Of_Microsoft_Dotnet_Training.jpg";
import At_Ramoji_Film_City from "../../../assets/images/Personal/Looking_Back_At_2012/At_Ramoji_Film_City.jpg";
import Sarcastic_Smile_By_Pranav from "../../../assets/images/Personal/Looking_Back_At_2012/Sarcastic_Smile_By_Pranav.jpg";
import At_Snow_World from "../../../assets/images/Personal/Looking_Back_At_2012/At_Snow_World.jpg";
import At_Snow_World_1 from "../../../assets/images/Personal/Looking_Back_At_2012/At_Snow_World_1.jpg";
import Infront_Of_Science_City from "../../../assets/images/Personal/Looking_Back_At_2012/Infront_Of_Science_City.jpg";
import At_Entrance_Of_Victoria_Memorial from "../../../assets/images/Personal/Looking_Back_At_2012/At_Entrance_Of_Victoria_Memorial.jpg";
import Inside_Victoria_Memorial from "../../../assets/images/Personal/Looking_Back_At_2012/Inside_Victoria_Memorial.jpg";
import Howrah_Bridge_At_Night_With_Lights_On from "../../../assets/images/Personal/Looking_Back_At_2012/Howrah_Bridge_At_Night_With_Lights_On.jpg";
import Me_And_My_Partner_Ramesh_With_Trophies from "../../../assets/images/Personal/Looking_Back_At_2012/Me_And_My_Partner_Ramesh_With_Trophies.jpg";
import book_2012_1 from "../../../assets/images/Personal/Looking_Back_At_2012/book_2012_1.jpg";
import book_2012_2 from "../../../assets/images/Personal/Looking_Back_At_2012/book_2012_2.jpg";
import book_2012_3 from "../../../assets/images/Personal/Looking_Back_At_2012/book_2012_3.jpg";
import book_2012_4 from "../../../assets/images/Personal/Looking_Back_At_2012/book_2012_4.jpeg";
import book_2012_5 from "../../../assets/images/Personal/Looking_Back_At_2012/book_2012_5.jpg";
import book_2012_6 from "../../../assets/images/Personal/Looking_Back_At_2012/book_2012_6.jpg";
import book_2012_7 from "../../../assets/images/Personal/Looking_Back_At_2012/book_2012_7.jpg";
import book_2012_8 from "../../../assets/images/Personal/Looking_Back_At_2012/book_2012_8.jpeg";
import book_2012_9 from "../../../assets/images/Personal/Looking_Back_At_2012/book_2012_9.jpg";
import book_2012_10 from "../../../assets/images/Personal/Looking_Back_At_2012/book_2012_10.jpeg";

export const Looking_Back_At_2012 : BlogPost = {

    id: "24",
    title: "Looking Back At 2012",
    slug: "looking-back-at-2012",
    category: "Personal",
    date: "3-1-2013",
    intro: "Looking back at 2012.",
    sections: [
        {
            content: [
                {
                    type: "paragraph",
                    text: "Time has come to look back and share my experiences in year 2012 with my readers."
                }
            ]
        },
        {
            id: "trip_to_yelagiri_and_yercaud",
            title: "Trip to Yelagiri and Yercaud",
            content : [
                {
                    type: "paragraph",
                    text: "My friends and I visited a couple of new places in TamilNadu during Pongal vacation. We first stayed at Yelagiri for 2 days. On the way to Yercaud, we visited Hogenakkal Falls and had a boat ride, which was quite exciting as it took us very close to waterfalls."
                }
            ],
            images: [
                {
                    src: In_Yelagiri_At_Tea_Stall,
                    caption: "In Yelagiri at Tea Stall"
                },
                {
                    src: In_Coracle_At_Hogenakkal_Falls,
                    caption: "In Coracle at Hogenakkal Falls"
                },
                {
                    src: At_Yercaud,
                    caption: "At Yercaud"
                },
                {
                    src: At_Sterling_Resorts_In_Yelagiri,
                    caption: "At Sterling Resorts in Yelagiri"
                }
            ]
        },
        /* Implement the pages and then make the routing later */
        {
            id: "samsung_galaxy_tab",
            title: "Samsung Galaxy Tab",
            content: [
                {
                    type: "paragraph",
                    text: "I was fascinated by Android. I wanted to use an Android device to deploy Android Applications as I teach Android Programming course. So I had to choose between Android Phone and Android Tab. I chose Tab as I felt I could use it for reading books with its 10 inches screen. I purchased Samsung Galaxy Tab on 21st Jan."
                },
                {
                    type: "paragraph",
                    text: "During Android courses, we developed some Android applications as part of course and I deployed them into my tab. Basically those applications are meant for personal use. I also found a very good Expenses Application in Android Market to keep track of my expenses. I occasionally use Tab to check mails also with wi-fi."
                },
                {
                    type: "paragraph",
                    text: "The applications that I developed as classroom projects and use in my Tab to keep track of my classes and accounts are available in my website. You can check them out at:"
                },
                {
                    type: "list",
                    items: [
                        "Class Scheduler",
                        "Accounts Tracker",
                        "Financial Notifier"
                    ]
                }
            ]
        },
        {
            id: "vsp_corporate_training",
            title: "VSP Corporate Training",
            content: [
                {
                    type: "paragraph",
                    text: "I had the pleasure of training Visakhapatanam Steel Plant (VSP) IT Department on Java EE from 2nd March to 14th March and then on .NET from 16th March to 30th March. Had a wonderful time with both. Had a great time with Java EE batch especially as it was very interactive! VSP HRD Centre has been a familiar territory for me in the last couple of years. I enjoyed every programme that I conducted there. As I make use of travelling time to listen to Audio books, even travelling becomes very productive and interesting."
                }
            ],
            images: [
                {
                    src: Members_Of_Java_EE_Training,
                    caption: "Members Of Java EE Training"
                },
                {
                    src: Members_Of_Microsoft_Dotnet_Training,
                    caption: "Members Of Microsoft .NET Training"
                }
            ]
        },
        {
            id: "revised_course_material",
            title: "Revised Course Material",
            content: [
                {
                    type: "paragraph",
                    text: "Course material is to be revised every now and then. New versions for different technologies keep popping up for every two years or so. This year it was turn of Java SE. I upgraded Java SE material to Java SE 7.0 by including features of Java SE 7.0. I also revised Java EE 6.0 material with new examples and rewrote many programs with new features of Java EE 6.0 and Java SE 7.0."
                },
                {
                    type: "paragraph",
                    text: "I prepared new material for Oracle Database and got it printed."
                },
                {
                    type: "paragraph",
                    text: "So I had to spend good amount of time rewriting and adding programs. As my courses are designed to use course material extensively, I take as much care as I can to ensure material serves purpose. Considering the fact that students tell me they use material even after years of completion of course, I take utmost care while preparing material. However, nothing is perfect, so I continuously endeavor to make material as perfect as possible."
                }
            ]
        },
        {
            id: "trip_to_hyderabad",
            title : "Trip to Hyderabad",
            content: [
                {
                    type: "paragraph",
                    text: "We had a desire to see Hyderabad and especially Charminar and festive atmosphere during Ramzan festival. Pranav wanted to see Ramoji Film City! We also wanted to see Basara (Sarasawathi Devi Temple). We made to all by visiting Hyderabad during August second week."
                },
                {
                    type: "paragraph",
                    text: "Had been to Ramoji Film City on 10th Aug. We had a great time there. We had seen that in year 2000. But Pranav was not born then so this trip was specially for Pranav."
                },
                {
                    type: "paragraph",
                    text: "We went to Charminar at 8:00 pm and experienced that festive atmosphere there. It was buzzing with activity. The area was so crowded that there was no space even to walk let alone vehicles."
                },
                {
                    type: "paragraph",
                    text: "Visited Sarasawathi Devi Temple at Basara on 11th Aug."
                },
                {
                    type: "paragraph",
                    text: "Pranav also wanted to see Snow. I, Padmaja and Praneeth had been to Kulu, Manali and Rothang Pass in year 2000 and had a great time with Snow there. Since then we couldn’t plan any trip to show him real Snow, so we compensated that for the time being by showing him Snow World at Hyderabad."
                }
            ],
            images: [
                {
                    src: At_Ramoji_Film_City,
                    caption: "At Ramoji Film City"
                },
                {
                    src: Sarcastic_Smile_By_Pranav,
                    caption: "Sarcastic Smile By Pranav"
                },
                {
                    src: At_Snow_World,
                    caption: "At Snow World"
                },
                {
                    src: At_Snow_World_1,
                    caption: "At Snow World"
                }
            ]
        },
        {
            id: "trip_to_kolkata",
            title: "Trip to Kolkata",
            content: [
                {
                    type: "paragraph",
                    text: "The only metro city that I didn’t see was Kolkata. So decided to visit Kolkata just before Dasara from 3th Oct to 7th Oct."
                },
                {
                    type: "paragraph",
                    text: "Enjoyed ride in Trams, which is still unique feature of this city. Used Metros for long distance travelling. In fact, used every mode of transport available except man-pulled cart."
                },
                {
                    type: "paragraph",
                    text: "Visited Science City, Victoria Memorial and Zoo."
                },
                {
                    type: "paragraph",
                    text: "Could see how life goes on in Kolkata. But city seemed too old. It appeared as if in much of the city no new building was constructed for a long time."
                },
                {
                    type: "paragraph",
                    text: "Had to wait for my train for a few hours at Howrah Railway Station, so enjoyed the sight of Howrah Bridge in lights."
                }
            ],
            images: [
                {
                    src: Infront_Of_Science_City,
                    caption: "Infront of Science City"
                },
                {
                    src: At_Entrance_Of_Victoria_Memorial,
                    caption: "At entrance of Victoria Memorial"
                },
                {
                    src: Inside_Victoria_Memorial,
                    caption: "Inside Victoria Memorial"
                },
                {
                    src: Howrah_Bridge_At_Night_With_Lights_On,
                    caption: "Howrah Bridge at Night with lights on"
                }
            ]
        },
        {
            id: "started_learning_tennis",
            title: "Started Learning Tennis",
            content : [
                {
                    type: "paragraph",
                    text: "One of the games that I didn’t play as a kid was Tennis. So decided to learn Tennis and joined Tennis training on 29th June."
                },
                {
                    type: "paragraph",
                    text: "The court is walkable from my house. Moreover both my kids play Tennis there and I know all Coaches. I have coaches at home also. Praneeth plays Tennis at a higher level. He won tournaments conducted by AITA (All India Tennis Association) in Under 12 and Under 14 categories. Pranav is learning for more than a year. So they are always there to help me."
                },
                {
                    type: "paragraph",
                    text: "It is never too late to learn. I am enjoying learning and playing. I always enjoy playing games. So, for now, pursuing both Badminton and Tennis on daily basis. I still play club cricket. But that is only a few matches in a year."
                }
            ]
        },
        {
            id: "badminton_tournament",
            title: "Badminton Tournament",
            content: [
                {
                    type: "paragraph",
                    text: "On Dec 25th doubles tournament was conducted for members of our Badminton court. Me and my partner were runners-up. We lost in finals with score 21-18, 18-21, 13-21. It was my first tournament in this indoor court since I joined it in December,2011."
                }
            ],
            images: [
                {
                    src: Me_And_My_Partner_Ramesh_With_Trophies,
                    caption: "Me and my partner (Ramesh) with Trophies"
                }
            ]
        },
        {
            id: "books_read",
            title: "Books Read",
            content: [
                {
                    type: "paragraph",
                    text: "The following are the books I read during this year. There is nothing like reading a book. Enjoyed every book; but of all, found Steve Jobs book very interesting."
                },
                {
                    type: "paragraph",
                    text: "To be honest, I must say, the number of books I read is not very impressive. I feel it could have been more. A book per month is plausible. So I must say, I just fell short of it.  "
                },
                {
                    type: "paragraph",
                    text: "Here are the books read by me in this year:"
                }
            ],
            images: [
                {
                    src: book_2012_1,
                    caption: "Attitude is Everything - Jeff Keller"
                },
                {
                    src: book_2012_2,
                    caption: "Steve Jobs - Walter Isaacson"
                },
                {
                    src: book_2012_3,
                    caption: "Roger Federer the greatest - Chris Bowers"
                },
                {
                    src: book_2012_4,
                    caption: "It's Not About the Bike - Lance Armstrong and Sally Jenkins"
                },
                {
                    src: book_2012_5,
                    caption: "Pullela Gopi Chand: The World Beneath His Feat - Sanjay Sharma and Shachi S.Sharma"
                },
                {
                    src: book_2012_6,
                    caption: "The Last Lecture - Randy Pausch with Jeffrey Zaslow"
                },
                {
                    src: book_2012_7,
                    caption: "The Fountainhead - Ayn Rand"
                },
                {
                    src: book_2012_8,
                    caption: "Outliers - Malcolm Gladwell"
                },
                {
                    src: book_2012_9,
                    caption: "The Logic of Life - Tim Harford"
                },
                {
                    src: book_2012_10,
                    caption: "Rich Dad Poor Dad - Robert Kiyosaki and Sharon Lechter"
                }
            ]
        }
    ]
}
