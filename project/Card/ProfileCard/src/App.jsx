import React from 'react'
import Card from './comppnents/Card'

const App = () => {
const users = [
  {
    fullName: "Tony Stark",
    title: "Iron Man",
    profileImage: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    coverImage: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee",
    likesCount: 250000,
    postCount: 320,
    viewCount: 1200000,
    followed: true
  },
  {
    fullName: "Steve Rogers",
    title: "Captain America",
    profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    likesCount: 180000,
    postCount: 210,
    viewCount: 980000,
    followed: false
  },
  {
    fullName: "Bruce Wayne",
    title: "Batman",
    profileImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    coverImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    likesCount: 300000,
    postCount: 400,
    viewCount: 1500000,
    followed: true
  },
  {
    fullName: "Clark Kent",
    title: "Superman",
    profileImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    coverImage: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    likesCount: 270000,
    postCount: 350,
    viewCount: 1400000,
    followed: true
  },
  {
    fullName: "Peter Parker",
    title: "Spider-Man",
    profileImage: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    coverImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    likesCount: 290000,
    postCount: 390,
    viewCount: 1600000,
    followed: false
  },
  {
    fullName: "Natasha Romanoff",
    title: "Black Widow",
    profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    coverImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    likesCount: 160000,
    postCount: 200,
    viewCount: 870000,
    followed: true
  },
  {
    fullName: "Thor Odinson",
    title: "Thor",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    coverImage: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    likesCount: 310000,
    postCount: 410,
    viewCount: 1700000,
    followed: true
  },
  {
    fullName: "T'Challa",
    title: "Black Panther",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    likesCount: 280000,
    postCount: 330,
    viewCount: 1450000,
    followed: false
  },
  {
    fullName: "Diana Prince",
    title: "Wonder Woman",
    profileImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    coverImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    likesCount: 260000,
    postCount: 300,
    viewCount: 1300000,
    followed: true
  },
  {
    fullName: "Wade Wilson",
    title: "Deadpool",
    profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    coverImage: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    likesCount: 340000,
    postCount: 420,
    viewCount: 1900000,
    followed: false
  }
];

  return (
    <div className='bg-black  flex flex-wrap'>
      {users.map(function(elem){
         return <Card Name={elem.fullName} 
         title={elem.title} 
         profileImage={elem.profileImage} 
         coverImage={elem.coverImage}
         likesCount={elem.likesCount}
         postCount={elem.postCount}
         viewCount={elem.viewCount}
        //  followed={elem.followed}
         />
      })}
      
    </div>
  )
}

export default App