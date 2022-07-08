import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "skills",
      "imageUrl": "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      "id": 2,
      "title": "certification",
      "imageUrl": "https://images.unsplash.com/photo-1570610159825-ec5d3823660c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80"
    },
    {
      "id": 3,
      "title": "web development",
      "imageUrl": "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    },
    {
      "id": 4,
      "title": "design works",
      "imageUrl": "https://images.unsplash.com/photo-1613667138005-c281de70406a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
    },
    {
      "id": 5,
      "title": "blog",
      "imageUrl": "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80"
    },
  ];

  return (
    <Directory categories={categories} />

  );
}

export default App;
