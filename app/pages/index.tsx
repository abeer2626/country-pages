// pages/index.js
import Link from 'next/link';
import countries from '../data/countries';

type CountryData = {
  [key: string]: {
    name: string;
  };
};

const Home: React.FC = () => {
  return (
    <div>
      <h1>Country List</h1>
      <ul>
        {Object.keys(countries).map((countryCode) => (
          <li key={countryCode}>
            <Link href={`/${countryCode}`}>
              <a>{(countries as CountryData)[countryCode].name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;