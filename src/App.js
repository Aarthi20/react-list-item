import ReviewComponent from "./components/Reviews";
import './App.css';



const reviewsList = [
  {
    imgUrl:"https://tinyurl.com/46jmhbvv",
    name: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl:"https://tinyurl.com/4dsnh6f4",
    name: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: "https://tinyurl.com/yt5urzax",
    name: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl:"https://tinyurl.com/534krxft",
    name: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
  {
    imgUrl:"https://tinyurl.com/ymjxzzc4",
    name: 'Luffy',
    companyName: 'HP',
    description:
      'The product quality is consistently outstanding, exceeding my expectations every time.',
  },
  {
    imgUrl:"https://tinyurl.com/mrx537j4",
    name: 'Jesika',
    companyName: 'TCS',
    description:
      'I was completely impressed with their professionalism and customer service, and The ambiance here is always inviting and comfortable.',
  },
  {
    imgUrl:"https://tinyurl.com/42ceps5e",
    name: 'Rojer',
    companyName: 'HCL',
    description:
      'The service quality was truly exceptional, I can’t wait to come back, The team is extremely knowledgeable and helpful, it is a delight to work with them.',
  },
]

const App = () => <ReviewComponent reviewsList = {reviewsList}/>

export default App;
