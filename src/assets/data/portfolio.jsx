import Image from '../image.jpg'
import doctor from '../doctors directory.png'
import netflix from '../netflixclone.png'
import flagship from '../flagship.jpg'
import chess from '../chess.jpg'
import realEstate from '../Real estate.png'
import devhoch from '../Dev-Hoch-LMS.png'
const portfolio=[
    {
        id: 6,
        image: realEstate,
        title: 'Real Estate',
        demo: 'https://sixthandrio.com/',
        buildWith: 'WordPress',
        forSell: false,

    },
    {
        id: 1,
        image: doctor,
        title: 'Doctors Directory',
        demo: 'https://doctors.anoy369.com/',
        buildWith: 'WordPress',
        forSell: true,
    },
    {
        id: 3,
        image: devhoch,
        title: 'Learning Management System',
        demo: 'https://dev-hoch.com/',
        buildWith: 'WordPress',
        forSell: false,

    },
    {
        id: 4,
        image: flagship,
        title: 'e-commerce',
        demo: 'https://flagshipstorebd.com/',
        buildWith: 'WordPress',
        forSell: false,

    },
    {
        id: 5,
        image: netflix,
        title: 'Streaming Application',
        github: 'https://github.com/anoy369/react-netflix',
        buildWith: 'React js + TMDB API',
        forSell: true,
    },
    {
        id: 6,
        image: chess,
        title: 'Multiplayer chess with video calling',
        github: 'https://github.com/anoy369/multimedia-chess',
        buildWith: 'React js + Node js',
        forSell: true,

    }
]

export default portfolio;