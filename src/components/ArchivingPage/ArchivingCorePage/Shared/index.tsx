import React, { useState } from 'react';
import { ReactComponent as Book } from '../../../../assets/icons/ArchivingPage/ArchivingCorePage/book.svg';
import './style.scss'; 

function Shared() {
  const [fetchData, setFetchData] = useState<boolean>(false);
  return (
    <div className="shared-wrapper">
      {fetchData ? <> 불러온 데이터가 들어갈 영역 </>: <Book className="shared-book" />}
    </div>
  );
}

export default Shared;