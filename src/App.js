import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 'eid123',
      label: 'Please can you open the paragraph',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, felis id interdum vulputate, augue nunc consequat odio, sed interdum felis odio non quam.',
    },
    {
      id: 'eid1234',
      label: 'Please can you open the react page',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, felis id interdum vulputate, augue nunc consequat odio, sed interdum felis odio non quam.',
    },
    {
      id: 'eid1235',
      label: 'Please can you open the python code',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, felis id interdum vulputate, augue nunc consequat odio, sed interdum felis odio non quam.',
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
