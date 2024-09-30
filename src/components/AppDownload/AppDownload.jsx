import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p className="text-2xl font-bold text-center mb-6">
                For Better Experience Download <br />Food Savvy App
            </p>

            <div className="app-download-platforms flex justify-center mb-10">
                <img src={assets.play_store} alt="Play Store" className="w-40 mx-2" />
                <img src={assets.app_store} alt="App Store" className="w-40 mx-2" />
            </div>

            
        </div>
    )
}

export default AppDownload
