import React from 'react';
import { Container, Typography } from '@mui/material';
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';

function App() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Management
      </Typography>
      <ContactForm />
      <ContactsTable />
    </Container>
  );
}

export default App;
