import React, { useEffect, useState } from 'react';
import { BikeDataTypes } from './useDashBoardTypes';

function useDashBoard(): {
  BikeData: BikeDataTypes[];
  error: string;
  isLoading: boolean;
  setSearch: React.Dispatch<React.SetStateAction<number>>;
} {
  const [BikeData, setBikeData] = useState<BikeDataTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState<number>(0);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    void (async () => await getBikeDetails())();
  }, [search]);

  const getBikeDetails = async (): Promise<any> => {
    try {
      setIsLoading(true);
      const fetchResults = await fetch(
        ' https://bikeindex.org/api/v3/search?location=Sydney&stolenness=stolen'
      );
      const fetchResultsJSON = await fetchResults.json();
      if (search > 0) {
        setBikeData(fetchResultsJSON.bikes.filter((e: { year: number }) => e.year === search));
        setIsLoading(false);
      } else {
        setBikeData(fetchResultsJSON.bikes);
        setIsLoading(false);
      }
    } catch (e: any) {
      setError(e);
      setIsLoading(false);
    }
  };

  return {
    BikeData,
    error,
    isLoading,
    setSearch
  };
}

export default useDashBoard;
