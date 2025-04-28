import { useEffect, useState } from 'react';

const RenderPropsPattern = ({ getData = async () => null, render = () => null }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setResource(data);
      } catch (error) {
        console.error('Failed to fetch resource:', error);
      }
    };

    fetchData();
  }, [getData]);

  return typeof render === 'function' ? render(resource) : null;
};

export default RenderPropsPattern;