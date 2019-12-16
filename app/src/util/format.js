import numeral from 'numeral';

export const formatPrice = value => `R$ ${numeral(value).format('0,0.00')}`;
