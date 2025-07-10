import React from 'react';
import ViewImage from '../../components/viewImage/ViewImage';
import Sign from '../../components/sign/Sign';
import Specs from '../../components/specs/Specs';
import ViewDetail from '../../components/viewDetail/ViewDetail';

const ViewPage = () => {
  return (
    <div>
      <Sign />
      <ViewImage />
      <Specs />
      <ViewDetail/>
    </div>
  );
};

export default ViewPage;
