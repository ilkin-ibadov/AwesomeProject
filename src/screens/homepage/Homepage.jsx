import {useState, useEffect} from 'react';
import Layout from '@common/Layout';
import InfoCard from './components/InfoCard';
import NoData from './components/NoData';
import {FlatList} from 'react-native';

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );

      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout title="Home">
      <FlatList
        contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 20}}
        data={data}
        renderItem={({item}) => <InfoCard cardItem={item} />}
        ListEmptyComponent={() => <NoData />}
      />
    </Layout>
  );
};

export default Homepage;
