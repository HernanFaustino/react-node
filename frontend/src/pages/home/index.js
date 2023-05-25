import React from 'react';
import { HeaderContainer } from '../../containers/header';
import { FooterContainer } from '../../containers/footer';
import { TableContainer } from '../../containers/table';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <TableContainer />
      <FooterContainer />
    </>
  );
}
