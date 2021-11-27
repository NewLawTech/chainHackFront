import { PDFDownloadLink } from '@react-pdf/renderer';
import { CarDeed } from '../deeds/CarDeed';

export const DownloadPdfDeed = () => (
  <div>
    <PDFDownloadLink document={<CarDeed />} fileName="NewLawDeed.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  </div>
);