import React from 'react';
import PageLayout from './PageLayout';

const App = () => {
  return (
    <PageLayout
      header={<h1>This is the header</h1>}
      footer={<h2>This is the footer</h2>}
    >
      <p>This is the content of the page</p>
    </PageLayout>
  );
}

export default App;
