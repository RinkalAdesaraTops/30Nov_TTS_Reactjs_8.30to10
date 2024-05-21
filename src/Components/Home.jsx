import React from 'react'
import Header from '../Components/common_component/Header'
import Footer from '../Components/common_component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';

export const Home = () => {
  return (
    <>
    <Header />
    <div>Home Page</div>
        <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
            Button as link
        </Button>
        <Button as="a" variant="success">
            Button as link
        </Button>
        </Stack>;
    <Footer/>
    </>
  )
}
