import React from 'react';
import { Page, Font, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
import logo from '../images/newlawlogo.png';
import car from '../images/skoda.png'

// Create Document Component
export const PdfDeed = () => (
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
        En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
        mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
        antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que
        carnero, salpicón las más noches, duelos y quebrantos los sábados,
        lentejas los viernes, algún palomino de añadidura los domingos,
        consumían las tres partes de su hacienda. El resto della concluían sayo
        de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
        mismo, los días de entre semana se honraba con su vellori de lo más
        fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina
        que no llegaba a los veinte, y un mozo de campo y plaza, que así
        ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro
        hidalgo con los cincuenta años, era de complexión recia, seco de carnes,
        enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
        tenía el sobrenombre de Quijada o Quesada (que en esto hay alguna
        diferencia en los autores que deste caso escriben), aunque por
        conjeturas verosímiles se deja entender que se llama Quijana; pero esto
        importa poco a nuestro cuento; basta que en la narración dél no se salga
        un punto de la verdad
      </Text>
      
      <Text style={styles.text}>
        Con estas y semejantes razones perdía el pobre caballero el juicio, y
        desvelábase por entenderlas, y desentrañarles el sentido, que no se lo
        sacara, ni las entendiera el mismo Aristóteles, si resucitara para sólo
        ello. No estaba muy bien con las heridas que don Belianis daba y
        recibía, porque se imaginaba que por grandes maestros que le hubiesen
        curado, no dejaría de tener el rostro y todo el cuerpo lleno de
        cicatrices y señales; pero con todo alababa en su autor aquel acabar su
        libro con la promesa de aquella inacabable aventura, y muchas veces le
        vino deseo de tomar la pluma, y darle fin al pie de la letra como allí
        se promete; y sin duda alguna lo hiciera, y aun saliera con ello, si
        otros mayores y continuos pensamientos no se lo estorbaran. Tuvo muchas
        veces competencia con el cura de su lugar (que era hombre docto graduado
        en Sigüenza), sobre cuál había sido mejor caballero, Palmerín de
        Inglaterra o Amadís de Gaula; mas maese Nicolás, barbero del mismo
        pueblo, decía que ninguno llegaba al caballero del Febo, y que si alguno
        se le podía comparar, era don Galaor, hermano de Amadís de Gaula, porque
        tenía muy acomodada condición para todo; que no era caballero
        melindroso, ni tan llorón como su hermano, y que en lo de la valentía no
        le iba en zaga.
      </Text>
      <Text style={styles.text}>
        En resolución, él se enfrascó tanto en su lectura, que se le pasaban las
        noches leyendo de claro en claro, y los días de turbio en turbio, y así,
        del poco dormir y del mucho leer, se le secó el cerebro, de manera que
        vino a perder el juicio. Llenósele la fantasía de todo aquello que leía
        en los libros, así de encantamientos, como de pendencias, batallas,
        desafíos, heridas, requiebros, amores, tormentas y disparates
        imposibles, y asentósele de tal modo en la imaginación que era verdad
        toda aquella máquina de aquellas soñadas invenciones que leía, que para
        él no había otra historia más cierta en el mundo.
      </Text>
      <Text style={styles.subtitle} break>
        Annex I: car
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


