import { Bookmark } from 'lucide-react'
import Card from './Components/Card'
const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com,/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Remote, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Embedded Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 58,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "2 months ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    datePosted: "3 weeks ago",
    post: "Data Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: 35,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 42,
    location: "Noida, India"
  }
];
return (
    <div className='parent'>
      {jobOpenings.map(function(Elem, idx){
        console.log(idx);

        return (
          <div key={idx}>
            <Card company={Elem.companyName} post={Elem.post} tag2={Elem.tag2} tag1={Elem.tag1} pay={Elem.pay} location={Elem.location} brandLogo={Elem.brandLogo} datePosted={Elem.datePosted} />
          </div>
        )
      })}
      </div>
)
}

export default App