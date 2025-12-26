import React from 'react'

const Hero = () => {
  return (
    <div className='parent_div'>
        {/* <img className='parent_img' src="https://react-project-02-two.vercel.app/assets/heroImage-BEuOm4pa.avif" alt="" /> */}
        <div className='parent_text'>
            <h1>
                Unleash Your Inner Champion Today.
                All In One Place.
            </h1>
            <p>
                Join the ultimate tennis experience - where passion meets performance, 
                and every swing brings you closer to victory.
            </p>
            <button>
                Start your own journey
                 <i className="ri-arrow-right-up-long-line"></i>
            </button>
        </div>
        
        <div className='hero_end_text'>
            <div className='end_text'>
                <p>Train with real professionals <br />
                Get the real results.</p>
            </div>

            <div className='end_img'>
                <img src="https://react-project-02-two.vercel.app/assets/menTrainer1-SVPABsvH.avif" alt="" />
                <img src="https://react-project-02-two.vercel.app/assets/femaleTrainer-Cjz_rFZB.avif" alt="" />
                <img src="https://react-project-02-two.vercel.app/assets/menTrainer2-fm7uKy6S.avif" alt="" />
            </div>
            <div className='social-text'>
                <button>
                    Instagram
                </button>
                <button>
                    FaceBook
                </button>
                <button>
                    Tik Tok 
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero