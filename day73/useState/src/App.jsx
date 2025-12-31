import React, { useState } from 'react'

const App = () => {

//   const [King, setKing] = useState("sumit")
// const [queen, setqueen] = useState('kirti')

//   const ChangeKing = () =>{
//     console.log("Btn Clicked ");
//     setKing("Mithilesh")
//   }

//   const chageQueen = () =>{
//     // console.log("Btn Clicked ");
//     setKing('ji')
//   }
 
// const [user, setUser] = useState('sumit')
// const changeUser = () => {
//   setUser('Mithilesh')
// }

// const [num, setNum] = useState(0)

// const [num, setNum] = useState(0)
 

// const arr = ['sumit','mithileh', 'shree', 'bhumii']

// const [first, setfirst] = useState(0)


 
const [marks, setMarks] = useState([88,76,80,64,28,12])

function graceStudent(){
   const newMarks = marks.map(function(elm){
    return elm+5
    
  })

  setMarks(newMarks)
  
  
}

  return (
    <div>

      <div>
        {marks.map(function(elm,idx){
          return <h1 key={idx}>Student {idx+1} = {elm} ({elm>=33 ? 'PASS': 'FAIL'})</h1>

        })}

        <button className='active:scale-70 text-white bg-blue-300 p-[10px 20px] rounded mt-[10px]' onClick={graceStudent}> Give them grace </button>
      </div>

      {/* <div>
        <h1>{arr[first]}</h1>
        <button onClick={()=>{
          if(first < arr.length - 1){
          setfirst(first+1)
          }
        }}> changr User</button>
      </div> */}

      {/* <div className='h-[200px] w-[200px] text-4xl mb-[10px] bg-blue-300'>
       {num}
      </div>
       <button onClick={() =>{
        const no = Math.floor(Math.random()* 100)
        setNum(no)
       }}>Click Here</button> */}
{/* 
    <div>

      <button onClick={()=>{
        setNum(num-1)
      }}>Decrease Num</button>

      <h1>{num}</h1>

      <button onClick={()=>{
        setNum(num+1)
      }}>Increase Num</button>


    </div> */}
      {/* <h1>{user}</h1>

      <button onClick={changeUser}>Change User</button> */}
      {/* <h1>{King} x {queen}</h1>

      <button onClick={ChangeKing}>Change king</button>

      <button onClick={chageQueen}>Change Queen</button> */}




    </div>
  )
}

export default App