import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Skills',
    },
    {
      id: 2,
      title: 'Certification',
    },
    {
      id: 3,
      title: 'Web development',
    },
    {
      id: 4,
      title: 'Design works',
    },
    {
      id: 5,
      title: 'Blog',
    },
  ];

  return (
    <div className='categories-container'>

      {categories.map(({ title, id }) => (
        <div key={id} className='category-container'>

          <div className='background-image' />
          <div className='category-body-container'>

            <h2>{title}</h2>
            <p>Read Now</p>

          </div>
        </div>
      ))}

    </div>
  );
}

export default App;
