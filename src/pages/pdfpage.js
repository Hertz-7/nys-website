import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './pdf.css';
import PDF from './mid slides Slidesgo.pdf';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState(800); // Default page width

  useEffect(() => {
    const handleResize = () => {
      const pdfViewerWidth = document.querySelector('.pdfViewer').clientWidth;
      setPageWidth(pdfViewerWidth * 1); // Adjust scale based on container size
    };

    handleResize(); // Call on mount to set initial size

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this effect runs once on mount

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages));
  };

  return (
    <div className="pdfViewer">
      <nav className="pdfViewer__nav">
        <button className="arrow left" onClick={goToPrevPage}><IoIosArrowBack /></button>
        <button className="arrow right" onClick={goToNextPage}><IoIosArrowForward /></button>
      </nav>
      <div className="pdfViewer__document">
        <Document
          file={PDF}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} width={pageWidth} renderTextLayer={false} />
        </Document>
      </div>
      <p className="pdfViewer__pageInfo">Page {pageNumber} of {numPages}</p>
    </div>
  );
};

export default PDFViewer;
