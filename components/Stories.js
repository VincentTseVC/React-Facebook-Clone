import SidebarRow from './SidebarRow';
import StoryCard from './StoryCard';
import Test from './Test';

const stories = [
  // {
  //   name: 'Vincent Tse',
  //   src: 'google.com1',
  //   profile: 'google.com',
  // },
  {
    name: 'Elon Musk',
    src: '/images/elon-musk.jpg',
    profile: '/images/elon-musk-sm.jpg',
  },
  {
    name: 'Jeff Bezoz',
    src: '/images/jeff-bezoz.jpg',
    profile: '/images/jeff-bezoz-sm.jpg',
  },
  {
    name: 'Mark Zuckerberg',
    src: '/images/mark-zuck.jpg',
    profile: '/images/mark-zuck-sm.jpg',
  },
  {
    name: 'Bill Gates',
    src: '/images/bill-gates.jpg',
    profile: '/images/bill-gates-sm.jpg',
  },
];

const s = [1, 2, 3, 5];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => {
        return (
          <StoryCard
            key={story.src}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        );
      })}
    </div>
  );
};

export default Stories;
