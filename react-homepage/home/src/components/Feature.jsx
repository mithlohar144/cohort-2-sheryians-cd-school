import React from 'react'

const Feature = () => {
  return (
    <div className='parent'>
    <div className='feature_parent'>
        
    <div className='Parent_div'>
        <div className='feature_top_mid'>
           <div className='top_icon'> <i class="fa-brands fa-microsoft"></i> </div>
            <div className='top-mid'><p className='para_feature'>Professional hard court <span>swith tournament-grade lighting & climate control - play in</span>perfect conditions, in any season.</p></div>

        </div>
        <div className='feature_end'>
            <button className='end_icon'>
                <i class="fa-solid fa-toggle-on"></i>
            </button>
        </div>
    </div>

    <div className='feature_mid'>
        <div className='mid_text'>
            <button>Private & Group Lessons</button>
        </div>
    </div>

    <div className='Card_3'>
        <div className='top'>
            <h1>100+</h1>
            <h4>Pro Coaches</h4>
            <p>Certified professionals ready to boost your game from first serve to tournament level.</p>
        </div>
        <div className='line'>
            <h5>Beginner</h5>
            <div className='dote'>
                <div className='dote_circle'><i class="fa-solid fa-circle"></i></div>
                <div className='dote_circle'><i class="fa-solid fa-circle"></i></div>
                <div className='dote_circle'><i class="fa-solid fa-circle"></i></div>
                <div className='dote_circle'><i class="fa-solid fa-circle"></i></div>
                <div className='dote_circle'><i class="fa-solid fa-circle"></i></div>
            </div>
            <h5 className='line_number'>55</h5>
        </div>
        <div className='line'>
             <h5>Intermediate</h5>
            <div  className='dote'>
                <div className='dote_circle'><i class="fa-solid fa-circle"></i></div>
                <div className='dote_circle'><i class="fa-solid fa-circle"></i></div>
                <div className='dote_circle'><i class="fa-solid fa-circle"></i></div>
                <div className='dote_circle'><i class="fa-solid fa-circle"></i></div>
            </div>
            <h5 className='line_number'>40</h5>
        </div>
        <div className='line'>
             <h5>Advanced</h5>
            <div  className='dote'>
                
                <div className='dote_circle'><i class="fa-solid fa-circle"></i></div>
                <div className='dote_circle'><i class="fa-solid fa-circle"></i></div>
                <div className='dote_circle'><i class="fa-solid fa-circle"></i></div>
                
            </div>
            <h5 className='line_number'>35</h5>
        </div>
    </div>

    </div>
        <h1>A few more facts about us in numbers</h1>
    </div>
    
  )
}

export default Feature