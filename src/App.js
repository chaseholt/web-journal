import React from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import PostGrid from "./comps/PostGrid";
import Post from "./comps/Post";
function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <PostGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Post
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
}

export default App;
