import { useSession } from 'next-auth/client';
import Image from 'next/image';

const InputBox = () => {
  const [session] = useSession();

  return (
    <div>
      <div>
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default InputBox;
