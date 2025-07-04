import React, { useState, useEffect } from 'react';

const laosData = {
  "Vientiane Prefecture": {
    "Chanthabuly": ["Ban Phonthan", "Ban Nongbone", "Ban Watnak"],
    "Sikhottabong": ["Ban Dongdok", "Ban Phonpapao"],
    "Sisattanak": ["Ban Simeuang", "Ban Haisok", "Ban Phonsinuan"],
    "Xaysetha": ["Ban Nongbeuk", "Ban Saphanthong Neua"],
    "Hadxayfong": ["Ban Naxay", "Ban Mai", "Ban Dongnaxok"]
  },
  "Luang Prabang": {
    "Mueang Luang Prabang": ["Ban Xiengthong", "Ban Watphabook", "Ban Vangvieng"],
    "Phonxay": ["Ban Phonxay", "Ban Hadsadone"]
  },
  "Champasak": {
    "Pakse": ["Ban Phonxai", "Ban Thongkhankham"],
    "Mueang Champasak": ["Ban Wat Luang", "Ban Nong Sa"]
  }
};

const Location = () => {
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [village, setVillage] = useState('');

  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  useEffect(() => {
    if (province) {
      setDistricts(Object.keys(laosData[province]));
      setDistrict('');
      setVillages([]);
      setVillage('');
    } else {
      setDistricts([]);
      setDistrict('');
      setVillages([]);
      setVillage('');
    }
  }, [province]);

  useEffect(() => {
    if (province && district) {
      setVillages(laosData[province][district]);
      setVillage('');
    } else {
      setVillages([]);
      setVillage('');
    }
  }, [district, province]);

  return (
    <div className="location_wrapper mt-4">
      <h2 className='title'>Location</h2>

      <div className="location_option">
        <label htmlFor="province">Province:</label>
        <select
          id="province"
          className="province form-select mb-3"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        >
          <option value="">Select Province</option>
          {Object.keys(laosData).map((prov) => (
            <option key={prov} value={prov}>{prov}</option>
          ))}
        </select>

        <label htmlFor="district">District / City:</label>
        <select
          id="district"
          className="district form-select mb-3"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          disabled={!districts.length}
        >
          <option value="">Select District</option>
          {districts.map((dist) => (
            <option key={dist} value={dist}>{dist}</option>
          ))}
        </select>

        <label htmlFor="village">Village:</label>
        <select
          id="village"
          className="village form-select mb-3"
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          disabled={!villages.length}
        >
          <option value="">Select Village</option>
          {villages.map((vill) => (
            <option key={vill} value={vill}>{vill}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Location;
