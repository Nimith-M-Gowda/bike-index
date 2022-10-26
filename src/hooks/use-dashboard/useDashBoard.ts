import { useEffect, useState } from 'react';
import { BikeDataTypes } from './useDashBoardTypes';

function useDashBoard(): { BikeData: BikeDataTypes[]; error: string } {
  const [BikeData, setBikeData] = useState<BikeDataTypes[]>([]);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    void (async () => await getBikeDetails())();
  }, []);

  const getBikeDetails = async (): Promise<any> => {
    try {
      const fetchResults = await fetch(
        ' https://bikeindex.org/api/v3/search?location=Sydney&stolenness=stolen'
      );
      const fetchResultsJSON = await fetchResults.json();
      setBikeData(fetchResultsJSON);
    } catch (e: any) {
      setError(e);
    }
  };

  return {
    BikeData,
    error
  };
}

export default useDashBoard;
