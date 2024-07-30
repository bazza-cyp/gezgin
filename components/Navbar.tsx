import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gezgindarkestgreen border-4 border-gezginlightgreen fixed top-0 left-0 w-full z-30 h-20 flex items-center justify-between px-6">
      <Link href="/">
        <Image src="/gezgintext.png" alt="logo" width={100} height={40} />
      </Link>
      <div className="flex items-center space-x-6">
        <Link href="/">
          <Image src="/profile.png" alt="profile" width={29} height={29} />
        </Link>
        <Link href="/">
          <Image src="/settings.png" alt="settings" width={29} height={29} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
