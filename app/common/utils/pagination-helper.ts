import { PageMetadata, PaginationType } from '../models';

/*
export type PageMetadata = {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

  meta: {
    totalItems: 40,
    itemCount: 20,
    itemsPerPage: 20,
    totalPages: 2,
    currentPage: 1
  },
 */

function getPaginationFromMeta(metaData: PageMetadata): PaginationType {
  return {
    label: metaData ? convertMetaToText(metaData) : '',
    hasPrev: metaData ? hasPrev(metaData) : false,
    prev: metaData ? getPrevPage(metaData) : 1,
    hasNext: metaData ? hasNext(metaData) : false,
    next: metaData ? getNextPage(metaData) : 1,
    current: metaData ? metaData.currentPage : 1,
    itemCount: metaData ? metaData.itemCount : 0,
  };
}

function convertMetaToText(metaData: PageMetadata) {
  const index = (metaData.currentPage - 1) * metaData.itemsPerPage;
  const inicial = index + 1; // ((currentPage - 1) * itemsPerPage) + 1
  const final = index + metaData.itemCount;
  const total = formatNumber(metaData.totalItems);
  return `${inicial}-${final} de ${total}`;
}

function getPrevPage(metaData: PageMetadata) {
  if (metaData.currentPage > 1) {
    return metaData.currentPage - 1;
  }
  return 1;
}

function getNextPage(metaData: PageMetadata) {
  if (metaData.currentPage < metaData.totalPages) {
    return metaData.currentPage + 1;
  }
  return metaData.totalPages;
}

function hasPrev(metaData: PageMetadata) {
  if (metaData.currentPage > 1) {
    return true;
  }
  return false;
}

function hasNext(metaData: PageMetadata) {
  if (metaData.currentPage < metaData.totalPages) {
    return true;
  }
  return false;
}

function formatNumber(value: number): string {
  // Crear una instancia de Intl.NumberFormat
  const formatter = new Intl.NumberFormat('en-US', {
    // Especificar la localización, 'en-US' utiliza comas como separadores de miles
    maximumFractionDigits: 2, // Ajusta esto según la precisión decimal que necesites
  });
  return formatter.format(value);
}

export { getPaginationFromMeta };
