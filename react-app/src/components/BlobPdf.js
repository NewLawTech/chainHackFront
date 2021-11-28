import { pdf } from '@react-pdf/renderer';
import { TestDeed } from '../deeds/TestDeed';

export const blob = pdf(TestDeed).toBlob();
