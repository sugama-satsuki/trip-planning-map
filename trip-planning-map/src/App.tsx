import './App.css'
import { useRef, useCallback, useState } from 'react';

/* import Map */ 
import { GeoloniaMap } from "@geolonia/embed-react";



function App() {

  const mapRef = useRef(null);
  const [lngLatZoom, setLngLatZoom] = useState<{[key: string]: string}>({lat: "38", lng: "133", zoom: "4.3"});

  const PREFECTURE: {[key: string]: string} = {
    hokkaido: '北海道',
    tokyo: '東京都',
    okinawa: '沖縄県',
  }
  const GENRE: {[key: string]: string} = {
    museum: '美術館',
    hotel: 'ホテル',
  }

  // onLoad用 callback関数
  const handler = useCallback(() => {

  }, [])
  

  return (
    <>
      <div className='side-menu'>
        <div className='title'>
          <img src='' alt='画像がきまっせ'/>
          <h1>TRIP PLANNING <br/>MAP</h1>
        </div>
        <p className='description'>素敵な旅行の計画を立てましょう。。。</p>
        <div className="content">
          <div className='items'>
            <p className='content-sub-title'>- どの県に行きたい？ -</p>
            <div className='widget-wrapper'>
              <label className="selectbox-002">
                <select>
                  { Object.keys(PREFECTURE).map((val:string) => {
                      return <option key={`pref-${val}`}>{PREFECTURE[val]}</option>;
                  })}
                </select>
              </label>
            </div>
          </div>
          <div className='items'>
            <p className='content-sub-title'>- どんなジャンルの場所？ -</p>
            <div className='widget-wrapper'>
              <fieldset className="checkbox-003" key={'genre-fieldset'}>
                { Object.keys(GENRE).map((val:string) => {
                  return <label key={`gen-${val}`}>
                          <input type="checkbox" name="checkbox-003"/>
                          { GENRE[val] }
                        </label>
                }) }
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      <div className='map-area'>
        <GeoloniaMap 
          apiKey={"3407afe23e7c46cca1391c93f9f84567"}
          style={{height: "100%", width: "100%"}}
          lng={lngLatZoom.lng}
          lat={lngLatZoom.lat}
          zoom={lngLatZoom.zoom}
          marker="off"
          mapRef={mapRef}
          onLoad={handler}
          // mapStyle={styleIdentifier}
        />
        {/* <StyleSelector style={styleSelectorStyle} styleIdentifier={styleIdentifier} setStyleIdentifier={setStyleIdentifier} /> */}
      </div>
    </>
  )
}

export default App
