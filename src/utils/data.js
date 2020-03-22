import GoodNewz from '../assets/images/prime/GoodNewz.jpg';
import Test from '../assets/images/prime/Test.jpg';
import Hunters from '../assets/images/prime/Hunters.jpg';
import Street from '../assets/images/prime/StreetDancer.jpg';
import Aquaman from '../assets/images/prime/Aquaman.jpg';

export const PrimeVideosList = () => {
    return (
        {
            shortDescription: `In Amazon prime videos you can stream many latest movies and original TV shows ads free along with ads-free music and free fast delivery on amazon in just Rs. 129/month or Rs. 999/year.
            You can stream on mobile, laptop, tablet or you can stream or cast on TVs. If you have amazon prime subscripttion you can check below list of shows and movies which are trending right now on prime videos.`,
            shows: [{
                title: 'Good Newz',
                rating: '6.9',
                starring: 'Akshay Kumar, Kareena Kapoor, Diljit Dosanjh, Kiara Advani',
                src: 'https://www.primevideo.com/',
                img: GoodNewz,
                youtubeLink: 'https://www.youtube.com/embed/r9VJpqoAr84',
                description: 'Two couples with the same surnames pursue in-vitro fertilization and wait for their upcoming babies. Trouble ensues when they find that the sperms of each couple have been mixed with each other.',
                genres: 'Comedy, Drama, International'
            },
            {
                title: 'The Test',
                rating: '9.2',
                starring: 'Justin Langer, Tim Paine, Nathan Lyon, Pat Cummins, Usman Khwaja...',
                src: 'https://www.primevideo.com/',
                img: Test,
                youtubeLink: 'https://www.youtube.com/embed/a9g8exCgVP4',
                description: 'The Test: A New Era for Australia’s Team, is a docuseries following the Australian Men’s Cricket Team, offering a behind-the-scenes look at how one of the world’s best cricket teams fell from grace and was forced to reclaim their title and integrity.',
                genres: 'Documentary, Sport',
                episodes: 10
            },
            {
                title: 'Hunters',
                rating: '7.2',
                starring: 'Al Pacino, Logan Lerman, Jerrica Hinton, LEna Olin',
                src: 'https://www.primevideo.com/',
                img: Hunters,
                youtubeLink: 'https://www.youtube.com/embed/HBGkjmfIzAw',
                description: 'Inspired by true events, HUNTERS follows a rag-tag team of Nazi Hunters in 1977 New York City who discover that hundreds of escaped Nazis are living in America. And so, they do what any bad-ass vigilante squad would do: they set out on a bloody quest for revenge and justice. But they soon discover a far-reaching conspiracy and must race against time to thwart the Nazis’ new genocidal plans.',
                genres: 'Crime, Drama, Mystery ',
                episodes: 10
            },
            {
                title: 'Aquaman',
                rating: '7.0',
                starring: 'Jason Mamao, Amber Heard, William Dafoe, Patrick Wilson',
                src: 'https://www.primevideo.com/',
                img: Aquaman,
                youtubeLink: 'https://www.youtube.com/embed/WDkg3h8PCVU',
                description: '“Aquaman” reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime-to discover if he is worthy of who he was born to be…a king.',
                genres: 'Adventure, Action, Science Fiction, Fantasy'
            },
            {
                title: 'Street Dancer',
                rating: '6.0',
                starring: 'Varun Dhawan, Shraddha Kapoor, Prabhu Deva',
                src: 'https://www.primevideo.com/',
                img: Street,
                youtubeLink: 'https://www.youtube.com/embed/2Ym7LJv6L_c',
                description: 'A dance epic based on the multifarious colors of dance and the unity that occurs between two different groups coming together for a single cause. Set in London, the film is about 2 rival dance groups from India and Pakistan, who\'ve been competing against each other every time they meet.',
                genres: 'Drama'
    
            }
        ]}
    )
}

export const OtherVideosList = () => {
    return (
        {
            shortDescription: `There are various other streaming apps other than leading prime videos and netflix like hotstar which is also giving tough competiotion with live cricket streaming and other tv streaming along with lastest movies and shows. Other apps 
            providing streaming facility are Zee5, Voot which are also giving varios options to you to entertain.`,
            shows: [{
                title: 'Asur: Welcome to Your Dark Side',
                rating: '9.1',
                starring: 'Arshad Warsi, Barun Sobti, Anupriya Goenka',
                src: 'https://www.voot.com/',
                img: GoodNewz,
                youtubeLink: 'https://www.youtube.com/embed/LDirQBvwx7g',
                description: 'A unique crime thriller that pits two opposing worlds against each other. The less explored, intricate world of forensic science and the deep mysticism of ancient Indian Mythology.',
                genres: 'Drama, Thriller',
                app: 'Voot',
                episodes: 8
            },
            {
                title: 'Special OPS',
                rating: '8.9',
                starring: 'Kay Kay Menon, Karan Ashar, Rajat Kaul',
                src: 'https://www.hotstar.com/',
                img: Test,
                youtubeLink: 'https://www.youtube.com/embed/GF0H5DZAE2g',
                description: 'The series follows Himmat Singh of Research and Analysis Wing who draws similar patterns in terrorist attacks and is convinced a single person is behind all the attacks. His task force team of five agents living in various parts of the world aim to catch the mastermind. The story is based on an inspiration taken from nineteen years worth of national significant events.',
                genres: 'Thriller',
                episodes: 8,
                app: 'Hotstar'
            },
            {
                title: 'Tanhaji: The Unsung Warrior',
                rating: '8.0',
                starring: 'Ajay Devgn, Saif Ali Khan, Sharad Kelkar',
                src: 'https://www.hotstar.com/',
                img: Hunters,
                youtubeLink: 'https://www.youtube.com/embed/cffAGIYTEHU',
                description: 'Tanhaji Malusare, a military chieftain in the army of the Maratha king Shivaji, leads the charge to capture the strategically important Kondhana fort guarded by the army of the fierce Rajput chieftain Udaybhan Rathod.',
                genres: 'Action, Biography, Drama',
                app: 'Hotstar'
            },
            {
                title: 'The Chargesheet: Innocent or Guilty?',
                rating: '9.0',
                starring: 'Arunoday Singh, Sikandar Kher, Shiv Panditt',
                src: 'https://www.primevideo.com/',
                img: Aquaman,
                youtubeLink: 'https://www.youtube.com/embed/CQCDA0avvco',
                description: 'A national sport star is assassinated in broad day light. The killing shocks the entire nation. CBI takes over the case and what looked like an open and shut case has new layers unfolding , unravelling the darkest secrets of the suspects.',
                genres: 'Crime, Drama, Mystery',
                app: 'Zee5',
                episodes: 8
            },
            {
                title: 'The Flash',
                rating: '7.7',
                starring: 'Grant Gustin, Candice Patton, Danielle Panabaker',
                src: 'https://www.hotstar.com/',
                img: Street,
                youtubeLink: 'https://www.youtube.com/embed/Yj0l7iGKh8g',
                description: 'After being struck by lightning, Barry Allen wakes up from his coma to discover he\'s been given the power of super speed, becoming the Flash, fighting crime in Central City.',
                genres: 'Action, Adventure, Drama',
                app: 'Hotstar',
                episodes: '7 seasons'
            },
            {
                title: 'Code M',
                rating: '8.6',
                starring: 'Jennifer Winget, Tanuj Virwani, Kundan Roy',
                src: 'https://www.hotstar.com/',
                img: Street,
                youtubeLink: 'https://www.youtube.com/embed/0U8zIu3KjKw',
                description: 'Miltary lawyer,Major Monica Mehra,is roped in to solve, what seems like an open and shut case, of the death of an army officer, killed by militants in an encounter. The truth is far from what it appears to be. Will she crack the code?',
                genres: 'Mystery, Thriller',
                app: 'Zee5',
                episodes: 8
            },
            {
                title: 'The Outsider',
                rating: '8.1',
                starring: 'Ben Mendelsohn, Bill Camp, Jeremy Bobb',
                src: 'https://www.hotstar.com/',
                img: Street,
                youtubeLink: 'https://www.youtube.com/embed/eNDKWr3Xmjk?list=TLPQMjIwMzIwMjBWafSiryQf9w',
                description: 'The Outsider begins with a seemingly straightforward investigation into the gruesome murder of a young boy. But when an insidious supernatural force edges its way into the case, it leads a seasoned cop and an unorthodox investigator to question everything they believe in.',
                genres: 'Crime, Drama, Mystery',
                app: 'Hotstar',
                episodes: 10
            }
        ]}
    )
}