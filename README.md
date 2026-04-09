# MapWhizz

MapWhizz is a reusable, responsive, and customizable SVG world map React component for visualizing geographical data. It allows you to display a choropleth map where countries are colored based on their respective values.

## Features

- **React Ready**: Seamlessly integrates into your React applications as a functional component.
- **Choropleth Colors**: Automatically interpolates colors for countries based on provided data values.
- **Interactivity**: Includes built-in tooltips on hover and a click handler for countries.
- **Responsive**: Adjusts automatically to the width and height of its parent container.

## Installation

Install via npm:

```bash
npm install mapwhizz
```

Or via yarn:

```bash
yarn add mapwhizz
```

## Usage

Here is a basic example of how to use MapWhizz in your React application:

```jsx
import React from "react";
import MapWhizz from "mapwhizz";

const App = () => {
  const mapData = [
    { country: "Egypt", value: 30 },
    { country: "Bahamas", value: 10 },
    { country: "Azerbaijan", value: 50 },
    { country: "United States", value: 100 },
    { country: "Canada", value: 75 },
  ];

  const handleCountryClick = (countryName, countryData) => {
    console.log(`Clicked on ${countryName}:`, countryData);
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <MapWhizz
        data={mapData}
        onCountryClick={handleCountryClick}
        className="my-custom-map-class"
        style={{ border: "1px solid #ddd", borderRadius: "8px" }}
      />
    </div>
  );
};

export default App;
```

## Props

| Prop             | Type       | Default     | Description                                                                                                             |
| ---------------- | ---------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`           | `Array`    | `[]`        | Array of objects representing the data to visualize. Each object must have a `country` (string) and a `value` (number). |
| `onCountryClick` | `Function` | `undefined` | Callback fired when a country is clicked. Receives `(countryName, countryData)` as arguments.                           |
| `className`      | `String`   | `""`        | Additional CSS class for the wrapper container.                                                                         |
| `style`          | `Object`   | `{}`        | Additional inline styles for the wrapper container.                                                                     |

## Data Format

The `data` prop should be an array of objects. The `country` field must directly map to country names exactly as specified in the internal map:

```json
[
  { "country": "Egypt", "value": 30 },
  { "country": "Bahamas", "value": 10 },
  { "country": "Azerbaijan", "value": 50 }
]
```

## Available Countries

The SVG map supports the following countries. Please ensure your `country` values match these names exactly:

<details>
<summary>View all supported countries</summary>

- Andorra
- United Arab Emirates
- Afghanistan
- Antigua and Barbuda
- Anguilla
- Albania
- Armenia
- Angola
- Argentina
- American Samoa
- Austria
- Australia
- Aruba
- Aland Islands
- Azerbaijan
- Bosnia and Herzegovina
- Barbados
- Bangladesh
- Belgium
- Burkina Faso
- Bulgaria
- Bahrain
- Burundi
- Benin
- Saint Barthelemy
- Brunei Darussalam
- Bolivia
- Bermuda
- Bonaire, Saint Eustachius and Saba
- Brazil
- Bahamas
- Bhutan
- Bouvet Island
- Botswana
- Belarus
- Belize
- Canada
- Cocos (Keeling) Islands
- Democratic Republic of Congo
- Central African Republic
- Republic of Congo
- Switzerland
- Côte d'Ivoire
- Cook Islands
- Chile
- Cameroon
- China
- Colombia
- Costa Rica
- Cuba
- Cape Verde
- Curaçao
- Christmas Island
- Cyprus
- Czech Republic
- Germany
- Djibouti
- Denmark
- Dominica
- Dominican Republic
- Algeria
- Ecuador
- Egypt
- Estonia
- Western Sahara
- Eritrea
- Spain
- Ethiopia
- Finland
- Fiji
- Falkland Islands
- Federated States of Micronesia
- Faroe Islands
- France
- Gabon
- United Kingdom
- Georgia
- Grenada
- French Guiana
- Guernsey
- Ghana
- Gibraltar
- Greenland
- Gambia
- Guinea
- Glorioso Islands
- Guadeloupe
- Equatorial Guinea
- Greece
- South Georgia and South Sandwich Islands
- Guatemala
- Guam
- Guinea-Bissau
- Guyana
- Hong Kong
- Heard Island and McDonald Islands
- Honduras
- Croatia
- Haiti
- Hungary
- Indonesia
- Ireland
- Palestine
- Isle of Man
- India
- British Indian Ocean Territory
- Iraq
- Iran
- Iceland
- Italy
- Jersey
- Jamaica
- Jordan
- Japan
- Juan De Nova Island
- Kenya
- Kyrgyzstan
- Cambodia
- Kiribati
- Comoros
- Saint Kitts and Nevis
- North Korea
- South Korea
- Kosovo
- Kuwait
- Cayman Islands
- Kazakhstan
- Lao People's Democratic Republic
- Lebanon
- Saint Lucia
- Liechtenstein
- Sri Lanka
- Liberia
- Lesotho
- Lithuania
- Luxembourg
- Latvia
- Libya
- Morocco
- Monaco
- Moldova
- Madagascar
- Montenegro
- Saint Martin
- Marshall Islands
- Macedonia
- Mali
- Macau
- Myanmar
- Mongolia
- Northern Mariana Islands
- Martinique
- Mauritania
- Montserrat
- Malta
- Mauritius
- Maldives
- Malawi
- Mexico
- Malaysia
- Mozambique
- Namibia
- New Caledonia
- Niger
- Norfolk Island
- Nigeria
- Nicaragua
- Netherlands
- Norway
- Nepal
- Nauru
- Niue
- New Zealand
- Oman
- Panama
- Peru
- French Polynesia
- Papua New Guinea
- Philippines
- Pakistan
- Poland
- Saint Pierre and Miquelon
- Pitcairn Islands
- Puerto Rico
- Palestinian Territories
- Portugal
- Palau
- Paraguay
- Qatar
- Reunion
- Romania
- Serbia
- Russia
- Rwanda
- Saudi Arabia
- Solomon Islands
- Seychelles
- Sudan
- Sweden
- Singapore
- Saint Helena
- Slovenia
- Svalbard and Jan Mayen
- Slovakia
- Sierra Leone
- San Marino
- Senegal
- Somalia
- Suriname
- South Sudan
- Sao Tome and Principe
- El Salvador
- Saint Martin
- Syria
- Swaziland
- Turks and Caicos Islands
- Chad
- French Southern and Antarctic Lands
- Togo
- Thailand
- Tajikistan
- Tokelau
- Timor-Leste
- Turkmenistan
- Tunisia
- Tonga
- Turkey
- Trinidad and Tobago
- Tuvalu
- Taiwan
- Tanzania
- Ukraine
- Uganda
- Jarvis Island
- Baker Island
- Howland Island
- Johnston Atoll
- Midway Islands
- Wake Island
- United States
- Uruguay
- Uzbekistan
- Vatican City
- Saint Vincent and the Grenadines
- Venezuela
- British Virgin Islands
- US Virgin Islands
- Vietnam
- Vanuatu
- Wallis and Futuna
- Samoa
- Yemen
- Mayotte
- South Africa
- Zambia
- Zimbabwe

</details>

## License

ISC License
