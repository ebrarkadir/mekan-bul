import React, { useState } from 'react';
import Header from "./Header";
import VenueReducer from '../services/VenueReducer';

const UpdateVenue = () => {


  const [mekanAdi, setMekanAdi] = useState('');
  const [mekanAdresi, setMekanAdresi] = useState('');
  const [imkanlar, setImkanlar] = useState('');
  const [enlem, setEnlem] = useState('');
  const [boylam, setBoylam] = useState('');
  const [gun1, setGun1] = useState('');
  const [acilis1, setAcilis1] = useState('');
  const [kapanis1, setKapanis1] = useState('');
  const [kapali1, setKapali1] = useState(false);
  const [gun2, setGun2] = useState('');
  const [acilis2, setAcilis2] = useState('');
  const [kapanis2, setKapanis2] = useState('');
  const [kapali2, setKapali2] = useState(false);
 

  const handleAddUpdateVenue = () => {
  };

  return (
    <>
      <Header headerText="Mekan güncelle"/>
      <form>
        
          <table>
        <tr>
          <td><label for="mekanAdi">Mekan Adı:</label></td>
          <td><input type="text" id="mekanAdi" value={mekanAdi} onChange={(e) => setMekanAdi(e.target.value)} /></td>
        </tr>
        <tr>
          <td><label for="mekanAdresi">Mekan Adresi:</label></td>
          <td><input type="text" id="mekanAdresi" value={mekanAdresi} onChange={(e) => setMekanAdresi(e.target.value)} /></td>
        </tr>
        <tr>
          <td><label for="imkanlar">İmkanlar:</label></td>
          <td><input type="text" id="imkanlar" value={imkanlar} onChange={(e) => setImkanlar(e.target.value)} /></td>
        </tr>
        <tr>
          <td><label for="enlem">Enlem:</label></td>
          <td><input type="text" id="enlem" value={enlem} onChange={(e) => setEnlem(e.target.value)} /></td>
        </tr>
        <tr>
          <td><label for="boylam">Boylam:</label></td>
          <td><input type="text" id="boylam" value={boylam} onChange={(e) => setBoylam(e.target.value)} /></td>
        </tr>
        <tr>
          <td><label for="gun1">Günler-1:</label></td>
          <td><input type="text" id="gun1" value={gun1} onChange={(e) => setGun1(e.target.value)} /></td>
        </tr>
        <tr>
          <td><label for="acilis1">Açılış-1:</label></td>
          <td><input type="text" id="acilis1" value={acilis1} onChange={(e) => setAcilis1(e.target.value)} /></td>
        </tr>
        <tr>
          <td><label for="kapanis1">Kapanış-1:</label></td>
          <td><input type="text" id="kapanis1" value={kapanis1} onChange={(e) => setKapanis1(e.target.value)} /></td>
        </tr>
        <tr>
          <td><label for="kapali1">Kapalı-1:</label></td>
          <td><input type="checkbox" checked={kapali1} onChange={() => setKapali1(!kapali1)} /></td>
        </tr>
        <tr>
          <td><label for="gun2">Günler-2:</label></td>
          <td><input type="text" id="gun2" value={gun2} onChange={(e) => setGun2(e.target.value)} /></td>
        </tr>
        <tr>
          <td><label for="acilis2">Açılış-2:</label></td>
          <td><input type="text" id="acilis2" value={acilis2} onChange={(e) => setAcilis2(e.target.value)} /></td>
        </tr>
        <tr>
          <td><label for="kapanis2">Kapanış-2:</label></td>
          <td><input type="text" id="kapanis2" value={kapanis2} onChange={(e) => setKapanis2(e.target.value)} /></td>
        </tr>
        <tr>
          <td><label for="kapali2">Kapalı-2:</label></td>
          <td><input type="checkbox" checked={kapali2} onChange={() => setKapali2(!kapali2)} /></td>
        </tr>
      </table>

        <button id='button-add' onClick={handleAddUpdateVenue}>
          Mekanı güncelle
        </button>
      </form>
    </>
  );
};

export default UpdateVenue;


