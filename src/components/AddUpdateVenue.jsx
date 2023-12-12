import React, { useState } from 'react';
import Header from "./Header";


const AddUpdateVenue = () => {
  // State tanımlamaları
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

  // Mekan ekle veya güncelle fonksiyonu
  const handleAddUpdateVenue = () => {
    // Burada mekan bilgilerini kullanarak API'ye istek gönderme veya başka bir işlem yapabilirsiniz
    // Örneğin: axios.post('/api/mekanlar', { mekanAdi, mekanAdresi, ... })
  };

  return (
    <>
      <Header headerText="Yeni Mekan Ekle"/>
      <form>
        
        <label>Mekan Adı:</label>
        <input type="text" value={mekanAdi} onChange={(e) => setMekanAdi(e.target.value)} />

        <label>Mekan Adresi:</label>
        <input type="text" value={mekanAdresi} onChange={(e) => setMekanAdresi(e.target.value)} />

        <label>İmkanlar:</label>
        <input type="text" value={imkanlar} onChange={(e) => setImkanlar(e.target.value)} />

        <label>Enlem:</label>
        <input type="text" value={enlem} onChange={(e) => setEnlem(e.target.value)} />

        <label>Boylam:</label>
        <input type="text" value={boylam} onChange={(e) => setBoylam(e.target.value)} />

        <label>Günler-1:</label>
        <input type="text" value={gun1} onChange={(e) => setGun1(e.target.value)} />

        <label>Açılış-1:</label>
        <input type="text" value={acilis1} onChange={(e) => setAcilis1(e.target.value)} />

        <label>Kapanış-1:</label>
        <input type="text" value={kapanis1} onChange={(e) => setKapanis1(e.target.value)} />

        <label>Kapalı-1:</label>
        <input type="checkbox" checked={kapali1} onChange={() => setKapali1(!kapali1)} />

        <label>Günler-2:</label>
        <input type="text" value={gun2} onChange={(e) => setGun2(e.target.value)} />

        <label>Açılış-2:</label>
        <input type="text" value={acilis2} onChange={(e) => setAcilis2(e.target.value)} />

        <label>Kapanış-2:</label>
        <input type="text" value={kapanis2} onChange={(e) => setKapanis2(e.target.value)} />

        <label>Kapalı-2:</label>
        <input type="checkbox" checked={kapali2} onChange={() => setKapali2(!kapali2)} />

        {/* Mekanı Ekle/Güncelle butonu */}
        <button type="button" onClick={handleAddUpdateVenue}>
          Mekanı Ekle/Güncelle
        </button>
      </form>
    </>
  );
};

export default AddUpdateVenue;
