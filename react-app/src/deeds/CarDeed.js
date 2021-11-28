import React from 'react';
import { Page, Font, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
import logo from '../images/newlawlogo.png';
import car from '../images/skoda.png'

// Create Document Component
export const CarDeed = () => (
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
      Right of Pledge and Covenant to Pledge

      2.1	The Pledgors hereby agree to create in favour of the Pledgee the 
      right of pledge referred to in this Article 2. The Pledgee hereby 
      agrees to accept such right of pledge. 

      2.2	In order to secure to the Pledgee the prompt fulfilment of the 
      Secured Obligations, the Pledgors hereby pledge the Assets, now, or 
      as the case may be, in advance (bij voorbaat) to the Pledgee, which 
      right of pledge the Pledgee hereby accepts.

      2.3	The creation of the right of pledge in respect of the Assets shall 
      be completed by the Registration of this Deed of Pledge.

      2.4	The Pledgors undertake at their expense to cause the Registration 
      of this Deed of Pledge to be effected as soon as possible after its 
      execution by the Parties. The Pledgors shall provide the Pledgee without 
      delay with a copy of the registered Deed of Pledge. The Pledgee is also 
      authorised at any time to effect the Registration of this Deed of Pledge.

      2.5	The Assets at any time pledged by this Deed of Pledge shall include 
      the Assets specified in Schedule 1 or in any Asset List and shall otherwise 
      be determined by the terms of this Deed of Pledge, the intentions of the 
      Pledgors and the Pledgee, the books and records of the Pledgee and such 
      other factors as the law permits.
      </Text>
      
      <Text style={styles.text}>
      Signed by Chainlink and NewLawTech on 28 November 2021
      </Text>
      <Text style={styles.text}>
        Specific clauses drafted by legal designer;-)
      </Text>
      <Text style={styles.subtitle} break>
        Annex I: Pledged object
      </Text>
      <Image
        style={styles.image}
        src={car}
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


