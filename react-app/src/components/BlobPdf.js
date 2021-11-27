import { pdf } from '@react-pdf/renderer';
import { PdfDeed } from './PdfDeed';

export const blob = pdf(PdfDeed).toBlob();
