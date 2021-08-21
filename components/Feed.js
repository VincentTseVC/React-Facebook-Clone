import Stories from './Stories';
import InputBox from './InputBox';
import Posts from './Posts';

const Feed = ({ posts }) => {
  return (
    <div className="flex flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide mb-10">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />

        <InputBox />

        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Feed;
