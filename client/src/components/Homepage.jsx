import React from 'react'   

function Homepage() {
    return (
        <div className="Homepage">
            <div className='homepage--header'>
                <h1>Happy Hydrent</h1>
                <h1 style={{fontSize: '2em', marginTop: '-2%'}}>Dog Walking Co.</h1>
            </div>
            <img className='homepage--img' src="https://www.lawnstarter.com/blog/wp-content/uploads/2022/01/rsz_shutterstock_2051387972.jpg" alt="" />
            <div className='homepage--description'>
                <p>
                    At Happy Hydrant Dog Walking Co. we strive for an excellence
                </p>
                <p>
                    With 50 years of collective experience
                </p>
                <p>
                    We are a dog walking team you can trust
                </p>
                <div className='homepage--ratings'>
                    <h2>Featured in:</h2>
                    <br></br>
                    <img className='homepage--ratings--img' style={{height: '10vh'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/NewYorkTimes.svg/2560px-NewYorkTimes.svg.png"></img>
                    <img className='homepage--ratings--img img2' style={{height: '16vh'}} src="https://cdn.shopify.com/s/files/1/0012/3056/9532/files/modern-dog-magazine_250x_crop_top@2x.png?v=1613561743"></img>
                    <img className='homepage--ratings--img img3' style={{height: '30vh'}} src="https://www.workingdogmagazine.com/wp-content/uploads/2019/03/WorkingDogPatch.jpg"></img>
                    <img className='homepage--ratings--img img4' style={{height: '30vh'}} src="https://wunderdogmagazine.com/wp-content/uploads/elementor/thumbs/Wunderdog-logo-q76g8v0cv5kt8extyzw9y4kua5zkaru1rfyw5bq8lk.png"></img>
                </div>
                <div>
                    <h7>
                        Coming to a town near you.
                    </h7>
                </div>
            </div>
        </div>
    )
}

export default Homepage