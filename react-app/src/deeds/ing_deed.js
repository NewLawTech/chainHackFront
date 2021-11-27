import React from 'react';
import { Page, Font, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
import logo from '../images/ing.png';
import collateral from '../images/collateral.jpg'

// Create Document Component
export const ingDeed = () => (
  <Document>
    <Page style={styles.body}>
    <Text style={styles.title} fixed>NewLawTech</Text>
      <Text style={styles.author} fixed>Ale Couperus</Text>
      <Image
        style={styles.logo}
        src= {logo}
        fixed
      />

      <Text style={styles.subtitle}>
        Pledge agreement
      </Text>
      <Text style={styles.text}>
        Artikel 1:  De gezekerde schulden

        De in deze akte opgenomen verpanding geschiedt tot meerdere zekerheid voor 
        de betaling van de vorderingen van Financier op Kredietnemer die voortvloeien 
        uit de op 1 November 2021 gedateerde overeenkomst, op basis waarvan een 
        geldsom is verschuldigd in hoofdsom groot EUR 10.000,-, te vermeerderen met 
        renten en kosten tot een maximum van 1/3 deel van de oorspronkelijke hoofdsom, 
        hierna te noemen de “Gezekerde Schulden”. 

        Op grond van deze overeenkomst is Kredietnemer jegens Financier verplicht de 
        in deze akte genoemde zekerheden aan Financier te verschaffen. Partijen bevestigen 
        hierbij het bestaan van deze verplichting. 
      </Text>
      
      <Text style={styles.text}>
        Artikel 2: Verpanding

        2.1	Pandgever verpandt aan Financier, die deze verpanding aanvaardt, 
        hierbij alle tot het bedrijf van de Pandgever behorende goederen waaronder 
        begrepen, maar niet beperkt tot de Bedrijfsuitrusting, Voorraden en Vorderingen;

      </Text>
      <Text style={styles.text}>
        Artikel 8: Diversen
        
        8.8	Wanneer Financier, na mededeling aan de schuldenaar, overweegt met de 
        schuldenaar een minnelijk of gerechtelijk akkoord te sluiten, deelt zij dat 
        mee aan Pandgever. Pandgever kan het sluiten van het akkoord voorkomen door het 
        bedrag van de betreffende verpande vordering aan Financier te betalen. 
      </Text>
      <Text style={styles.subtitle} break>
        Annex I: Verpand object
      </Text>
      <Image
        style={styles.image}
        src={collateral}
      />
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 30,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  logo: {
    width: 70,
    marginVertical: 30,
    marginHorizontal: 48,
    position: 'absolute'
  }
});