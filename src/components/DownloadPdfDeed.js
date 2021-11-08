import { PDFDownloadLink } from '@react-pdf/renderer';
import { PdfDeed } from './PdfDeed';


export const DownloadPdfDeed = () => (
  <div>
    <PDFDownloadLink document={<PdfDeed />} fileName="NewLawDeed.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  </div>
);