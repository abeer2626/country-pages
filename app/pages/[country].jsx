// pages/[country].js
import React from 'react';
import countries from '../data/countries';

const CountryPage = ({ countryData }) => {
  return (
    <div>
      <h1>{countryData.name}</h1>
      <p>Population: {countryData.population}</p>
      <p>Capital: {countryData.capital}</p>
    </div>
  );
};


export async function getStaticPaths() {
  const paths = Object.keys(countries).map((countryCode) => ({
    params: { country: countryCode },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
    const countryData = countries.pakistan[params.country];
    return { props: { countryData } };
  }
  export async function getStaticProps({ params }) {
    const countryData = countries.india[params.country];
    return { props: { countryData } };
  }
  export async function getStaticProps({ params }) {
    const countryData = countries.canada[params.country];
    return { props: { countryData } };
  }
  export async function getStaticProps({ params }) {
    const countryData = countries.kenya[params.country];
    return { props: { countryData } };
  }
  export async function getStaticProps({ params }) {
    const countryData = countries.indonesia[params.country];
    return { props: { countryData } };
  }
  export default countrypage;