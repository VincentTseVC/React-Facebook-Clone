import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Contact from './Contact';

const contacts = [
  {
    name: 'Elon Musk',
    src: '/images/elon-musk.jpg',
    profile: '/images/elon-musk-sm.jpg',
  },
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

const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contact</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
};

export default Widgets;
